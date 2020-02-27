// Library Imports
import React from "react";

// Relative Imports
import { Container, Wrapper, Social, Internal } from "./styles";
import Discord from "../../../assets/icons/Discord.png";
import Twitter from "../../../assets/icons/Twitter.png";
import Medium from "../../../assets/icons/Medium.png";
import Reddit from "../../../assets/icons/Reddit.png";
import GitHub from "../../../assets/icons/Github.png";
import Telegram from "../../../assets/icons/Telegram.png";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Social src={Discord} href="https://discordapp.com/invite/CCtNxfG" />
        <Social src={Twitter} href="https://twitter.com/HavenXHV" />
        <Social src={Medium} href="https://medium.com/@havencurrency" />
        <Social src={Reddit} href="https://www.reddit.com/r/havenprotocol/" />
        <Social
          src={GitHub}
          href="https://web.telegram.org/#/im?p=s1273047334_13986713956461503950"
        />
        <Social
          src={Telegram}
          href="https://web.telegram.org/#/im?p=s1273047334_13986713956461503950"
        />

        <Internal to="/team">Team</Internal>
        <Internal to="/blog">Blog</Internal>
        <Internal to="/faq">F.A.Q</Internal>
        <Internal to="/timeline">Timeline</Internal>
        <Internal to="/whitepaper">White Papers</Internal>
      </Wrapper>
    </Container>
  );
};

export default Footer;
