// Library Imports
import React, { Component } from "react";
// Relative Imports
import Page from "../../../components/_layout/page";
import Header from "../../../components/Header/Animated";
import Content from "../../../components/Content";

interface DetailsProps {
  amount: number;
  price: number;
  value: number;
  assetId: string;
}

export class Details extends Component<DetailsProps, any> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}
