// Library Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import * as clipboard from "clipboard-polyfill";

// Relative Imports
import { Container } from "./styles";
import Auth from "../../../components/_auth/login";
import Seed from "../../../components/_inputs/seed";

export default class Login extends Component {
  state = {
    seed_phrase: "",
    error: "",
    action: "PASTE"
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.errorMessage) {
      this.setState({ error: nextProps.errorMessage });
      setTimeout(() => this.setState({ error: "" }), 2000);
    }
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleLogin = () => {
    // Deconstruct state
    const { seed_phrase } = this.state;
    this.props.login(seed_phrase);
  };

  handlePaste = () => {
    clipboard
      .readText()
      .then(response => {
        this.setState({
          seed_phrase: response,
          action: "PASTED"
        });
        this.handleLogin();
      })
      .then(
        setTimeout(() => {
          this.setState({
            action: "PASTE"
          });
        }, 1000)
      )
      .catch(error => {
        this.setState({
          error: "CLIPBOARD EMPTY"
        });
      });
  };

  render() {
    const windowWidth = window.innerWidth;
    const { seed_phrase, error, action } = this.state;

    return (
      <Container>
        <Auth
          title="Log into your wallet"
          disable={seed_phrase === "" ? true : this.props.isRequestingLogin}
          onClick={() => this.handleLogin()}
          loading={this.props.isRequestingLogin}
          submit="Log In"
        >
          <Seed
            placeholder="Enter your password..."
            name="seed_phrase"
            value={seed_phrase}
            error={error}
            actionEvent={this.handlePaste}
            action={action}
            rows={windowWidth < 600 ? "6" : "4"}
            onChange={event => this.handleChange(event)}
          />
        </Auth>
      </Container>
    );
  }
}

Login.propTypes = {
  errorMessage: PropTypes.string,
  login: PropTypes.func.isRequired,
  isRequestingLogin: PropTypes.bool
};
