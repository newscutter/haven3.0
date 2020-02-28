// Library Imports
import React, { Component } from "react";
import * as clipboard from "clipboard-polyfill";

// Relative Imports
import Auth from "../../../components/_auth/create/index.js";
import RevealSeed from "../../../components/_create/reveal_seed";
import CreateSeed from "../../../components/_create/create_seed";
import VerifySeed from "../../../components/_create/verify_seed";
import { Container } from "./styles";
import { decrypt } from "../../../../utility/utility-encrypt";
import PropTypes from "prop-types";

export class CreateWebComponent extends Component {
  state = {
    step: 1,
    error: "",
    verify_seed: "",
    mnemonicString: "",
    action: "PASTE PASSWORD"
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getSeed();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.mnemonicString !== "" && this.state.mnemonicString === "") {
      const seed = await decrypt(this.props.createdSeed);
      this.setState({ mnemonicString: seed });
    }
  }

  nextStep = () => {
    const { step } = this.state;
    const stepThree = step === 3;

    // Until step three incremennt the steps
    if (step < 3) {
      this.setState({ step: step + 1 });
    }
    // On step three, if seed is invalid display error messsage for 2s
    else if (stepThree) {
      const { mnemonicString, verify_seed } = this.state;

      const validationSucceed = this.props.verifySeed(verify_seed);

      if (!validationSucceed) {
        this.setState({ error: "Password incorrect" });
        setTimeout(() => {
          this.setState({ error: "" });
        }, 2000);
      }
    }
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handlePaste = () => {
    clipboard
      .readText()
      .then(response => {
        this.setState({
          verify_seed: response,
          action: "PASTED PASSWORD"
        });
        this.nextStep();
      })
      .then(
        setTimeout(() => {
          this.setState({
            action: "PASTE PASSWORD"
          });
        }, 1000)
      )
      .catch(error => {
        this.setState({
          error: "CLIPBOARD EMPTY"
        });
      });
  };

  handleSwitch = () => {
    const windowWidth = window.innerWidth;
    const { step, verify_seed, error } = this.state;

    switch (step) {
      case 1:
        return (
          <RevealSeed
            platform={"web"}
            value={this.state.mnemonicString}
            rows={windowWidth < 600 ? "6" : "4"}
            readOnly={true}
          />
        );
      case 2:
        return (
          <CreateSeed
            value={this.state.mnemonicString}
            rows={windowWidth < 600 ? "6" : "4"}
            readOnly={true}
          />
        );
      case 3:
        return (
          <VerifySeed
            label="Verify Your Password"
            name="verify_seed"
            placeholder="Enter your password"
            value={verify_seed}
            error={error}
            rows={windowWidth < 600 ? "6" : "4"}
            action={this.state.action}
            onChange={this.handleChange}
            onClick={this.handlePaste}
            ref="VerifySeedInput"
          />
        );
      default:
    }
  };

  render() {
    const { step, verify_seed } = this.state;
    const disabled = step === 3 && verify_seed === "";

    return (
      <Container>
        <Auth
          title={
            this.state.step === 1
              ? "Reveal your password:"
              : this.state.step === 2
              ? "Save your password:"
              : this.state.step === 3
              ? "Verify your password"
              : null
          }
          submit="DONE"
          step={step}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          disabled={disabled}
          loading={this.props.isRequestingLogin}
        >
          <>{this.handleSwitch()}</>
        </Auth>
      </Container>
    );
  }
}

CreateWebComponent.propTypes = {
  getSeed: PropTypes.func.isRequired,
  isRequestingLogin: PropTypes.bool,
  verifySeed: PropTypes.func.isRequired,
  createdSeed: PropTypes.any.isRequired
};
