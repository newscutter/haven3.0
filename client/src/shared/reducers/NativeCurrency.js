import * as actions from "../actions/NativeCurrency";
import Axios from "axios";

const initialState = {
  symbol: "$",
  ticker: "USD",
  price: 1,
  options: [
    {
      ticker: "USD",
      symbol: "$"
    },
    {
      ticker: "EUR",
      symbol: "€"
    },
    {
      ticker: "CNY",
      symbol: "¥"
    },
    {
      ticker: "INR",
      symbol: "₹"
    },
    {
      ticker: "JPY",
      symbol: "¥"
    },
    {
      ticker: "GBP",
      symbol: "£"
    },
    {
      ticker: "TRY",
      symbol: "₺"
    }
  ]
};

const NativeCurrency = (state = initialState, action) => {
  switch (action.type) {
    case actions.NATIVECURRENCY_CHANGE:
      let optionsIndex = state.options.findIndex(p => {
        return p.ticker === action.ticker;
      });
      let newNativeCurrency = {
        ...state.options[optionsIndex]
      };
      return Object.assign({}, state, {
        ticker: newNativeCurrency.ticker,
        symbol: newNativeCurrency.symbol
      });

    case actions.NATIVECURRENCY_UPDATE_PRICE:
      Axios.get("https://api.exchangerate-api.com/v4/latest/USD").then(
        response => {
          return Object.assign({}, state, {});
        }
      );
    default:
      return state;
  }
};

export default NativeCurrency;
