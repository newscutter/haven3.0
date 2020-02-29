import * as actions from "../actions/Accounts";
import update from "react-addons-update";
import { array } from "prop-types";

const initialState = [
  {
    token: "Haven",
    ticker: "XHV",
    symbol: "H",
    available: true,
    price: 0,
    balance: 0.0,
    visible: false
  },
  {
    token: "US Dollar",
    ticker: "xUSD",
    symbol: "$",
    available: false,
    price: 0,
    balance: 0.0,
    visible: false
  },
  {
    token: "Euro",
    ticker: "xEUR",
    symbol: "€",
    available: false,
    price: 0,
    balance: 0.0,
    visible: false
  },
  {
    token: "British Pound",
    ticker: "xGBP",
    symbol: "£",
    available: false,
    price: 0,
    balance: 0.0,
    visible: false
  },
  {
    token: "Japanese Yen",
    ticker: "xJPY",
    symbol: "¥",
    available: false,
    price: 0,
    balance: 0.0,
    visible: false
  },

  {
    token: "Canadian Dollar",
    ticker: "xCAD",
    symbol: "$",
    available: false,
    price: 0,
    balance: 0.0,
    visible: false
  },
  {
    token: "Chinese Yuan",
    ticker: "xCNY",
    symbol: "¥",
    available: false,
    price: 0,
    balance: 0.0,
    visible: false
  },
  {
    token: "Australian Dollar",
    ticker: "xAUD",
    symbol: "$",
    available: false,
    price: 0,
    balance: 0.0,
    visible: false
  },
  {
    token: "Swiss Franc",
    ticker: "xCHF",
    symbol: "₣",
    available: false,
    price: 0,
    balance: 0.0,
    visible: false
  },
  {
    token: "New Zealand Dollar",
    ticker: "xNZD",
    symbol: "$",
    available: false,
    price: 0,
    balance: 0.0,
    visible: false
  },
  {
    token: "Norwegian Krone",
    ticker: "xNOK",
    symbol: "kr",
    available: false,
    price: 0,
    balance: 0.0,
    visible: false
  },
  {
    token: "Gold",
    ticker: "xGOLD",
    symbol: "G",
    available: false,
    price: 0,
    balance: 0.0,
    visible: false
  },
  {
    token: "Silver",
    ticker: "xSILV",
    symbol: "S",
    available: false,
    price: 0,
    balance: 0.0,
    visible: false
  },
  {
    token: "Bitcoin",
    ticker: "xBTC",
    symbol: "₿",
    available: false,
    price: 0,
    balance: 0.0,
    visible: false
  }
];

const Accounts = (state = initialState, action) => {
  switch (action.type) {
    case actions.ACCOUNTS_CHANGE_VISIBILITY:
      return state.map(account => {
        if (account.ticker !== action.ticker) {
          return account;
        }
        return {
          ...account,
          visible: account.visible ? false : true
        };
      });
    case actions.ACCOUNTS_UPDATE_BALANCES:
      return state;
    case actions.ACCOUNTS_UPDATE_PRICES:
      return state;
    default:
      return state;
  }
};

export default Accounts;
