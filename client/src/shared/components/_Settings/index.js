// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { closeWallet } from "../../actions";
import { selectIsLoggedIn } from "../../../platforms/web/reducers/account";

// Relative Imports
import { Container, Content } from "./styles";
import Backdrop from "../Backdrop";
import Header from "../Header/Small";
import RightIcon from "../../../assets/icons/right-white.png";
import Button from "../_buttons/button";
import List from "./UI/List";
import ListContainer from "./UI/List/Container";
import P from "../_Text/P";
import LogOutIcon from "../../../assets/icons/logout.png";
import NativeCurrencyIcon from "../../../assets/icons/nativecurrency.png";
import WalletIcon from "../../../assets/icons/currencywallets.png";
import WalletPasswordIcon from "../../../assets/icons/masterkey.png";
import TransactionPasswordIcon from "../../../assets/icons/transactionkey.png";

class Settings extends Component {
  Logout = () => {
    this.props.logout();
  };

  render() {
    return (
      <Backdrop show={this.props.show}>
        <Container>
          <Header
            H1={"Haven Wallet"}
            P="Created on 31 Dec. 2019"
            icon={RightIcon}
            styling={"position: absolute;  opacity; 1;  "}
            close={this.props.close}
          />
          <Content>
            <ListContainer>
              <List
                styling={"&:hover{background-color: #B2484A}"}
                icon={LogOutIcon}
                name="Log Out"
                subname="Sign out of your wallet"
                info={""}
                onClick={() => this.Logout()}
              />
            </ListContainer>
            <P styling={"margin: 40px 0px 10px 0px"}>Settings:</P>
            <ListContainer>
              <List
                icon={NativeCurrencyIcon}
                name="Native Currency"
                subname="For wallet balances"
                info={""}
              />
              <List
                styling={"margin: 2px 0px 0px 0px"}
                icon={WalletIcon}
                name="Currency wallet"
                subname="Add/remove currency wallets"
                info={""}
              />
            </ListContainer>
            <P styling={"margin: 40px 0px 10px 0px"}>Security:</P>
            <ListContainer>
              <List
                icon={WalletPasswordIcon}
                name="Wallet Password"
                subname="Permits full wallet access."
                info={""}
              />
              <List
                styling={"margin: 2px 0px 0px 0px"}
                icon={TransactionPasswordIcon}
                name="Transaction Password"
                subname="Permits view of transactions."
                info={""}
              />
            </ListContainer>
          </Content>
        </Container>
      </Backdrop>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state)
});

export default connect(mapStateToProps, { logout: closeWallet })(Settings);
