import React, { Component } from "react";

import { Icon, SocialMedia, Wrapper } from "./styles";

import Aux from "../../../Aux";
import Header from "../../UI/_Header/Default";
import Content from "../../UI/Content";
import H4 from "../../../_Text/H4";
import P from "../../../_Text/P";
import Discord from "../../../../../assets/icons/Discord.png";
import Twitter from "../../../../../assets/icons/Twitter.png";
import Medium from "../../../../../assets/icons/Medium.png";
import Reddit from "../../../../../assets/icons/Reddit.png";
import Telegram from "../../../../../assets/icons/Telegram.png";

class ComingSoon extends Component {
  render() {
    return (
      <Aux>
        <Header
          close={() => this.props.routing(this.props.data.ticker, "Default")}
        />
        <Content>
          <Icon styling={"margin: 0px 0px 20px 0px"} />
          <H4 styling={"color: #000; text-align: center;"}>
            {this.props.data.ticker} is coming soon!
          </H4>
          <P
            styling={
              "color: #000; text-align: center; margin: 0px 0px 10px 0px;"
            }
          >
            Follow Haven to stay tuned:
          </P>
          <Wrapper>
            <SocialMedia
              icon={Twitter}
              href="https://discordapp.com/invite/CCtNxfG"
            />
            <SocialMedia
              icon={Discord}
              href="https://discordapp.com/invite/CCtNxfG"
            />
            <SocialMedia
              icon={Reddit}
              href="https://www.reddit.com/r/havenprotocol/"
            />
            <SocialMedia
              icon={Medium}
              href="https://medium.com/@havencurrency"
            />
            <SocialMedia
              icon={Telegram}
              href="https://web.telegram.org/#/im?p=s1273047334_13986713956461503950"
            />
          </Wrapper>
        </Content>
      </Aux>
    );
  }
}

export default ComingSoon;
