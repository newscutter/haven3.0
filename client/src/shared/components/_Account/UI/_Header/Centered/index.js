// Library Imports
import React from "react";

// Relative Imports
import { Content, Information, Icon } from "./styles";
import { NavigationIcon } from "../styles";
import H4 from "../../../../_Text/H4";
import P from "../../../../_Text/P";
import BackIcon from "../../../../../../assets/icons/back.png";
import CloseIcon from "../../../../../../assets/icons/close.png";

const HeaderCentered = props => {
  return (
    <Content>
      <Icon>
        <NavigationIcon onClick={props.back} icon={BackIcon} />
      </Icon>
      <Information>
        <H4 styling={"color: #000; text-align: center"}>{props.H4}</H4>
        <P styling={"color: #000; text-align: center"}>{props.P}</P>
      </Information>
      <Icon>
        <NavigationIcon onClick={props.close} icon={CloseIcon} />
      </Icon>
    </Content>
  );
};

export default HeaderCentered;
