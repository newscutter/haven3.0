import * as actions from "../actions/Accounts";

const initialState = [
  {
    token: "US Dollar",
    ticker: "USD",
    price: "$1.00",
    change: "~ 0.00",
    symbol: "$",
    balance: 0.0,
    visible: true
  },
  {
    token: "Bitcoin",
    ticker: "BTC",
    price: "$1.00",
    change: "~ 0.00",
    symbol: "₿",
    balance: 0.0,
    visible: true
  },
  {
    token: "New Zealand Dollar",
    ticker: "NZD",
    price: "$1.00",
    change: "~ 0.00",
    symbol: "$",
    balance: 0.0,
    visible: true
  },
  {
    token: "Norwegian Krone",
    ticker: "NOK",
    price: "$1.00",
    change: "~ 0.00",
    symbol: "kr",
    balance: 0.0,
    visible: true
  },
  {
    token: "Japanese Yen",
    ticker: "JPY",
    price: "$1.00",
    change: "~ 0.00",
    symbol: "¥",
    balance: 0.0,
    visible: true
  },
  {
    token: "British Pound",
    ticker: "GBP",
    price: "$1.00",
    change: "~ 0.00",
    symbol: "£",
    balance: 0.0,
    visible: true
  },
  {
    token: "Euro",
    ticker: "EUR",
    price: "$1.00",
    change: "~ 0.00",
    symbol: "€",
    balance: 0.0,
    visible: true
  },
  {
    token: "Chinese Yuan",
    ticker: "CNY",
    price: "$1.00",
    change: "~ 0.00",
    symbol: "¥",
    balance: 0.0,
    visible: true
  },
  {
    token: "Swiss Franc",
    ticker: "CHF",
    price: "$1.00",
    change: "~ 0.00",
    symbol: "₣",
    balance: 0.0,
    visible: true
  },
  {
    token: "Canadian Dollar",
    ticker: "CAD",
    price: "$1.00",
    change: "~ 0.00",
    symbol: "$",
    balance: 0.0,
    visible: true
  },

  {
    token: "Australian Dollar",
    ticker: "AUD",
    price: "$1.00",
    change: "~ 0.00",
    symbol: "$",
    balance: 0.0,
    visible: true
  },
  {
    token: "Gold",
    ticker: "GOLD",
    price: "$1.00",
    change: "~ 0.00",
    symbol: "G",
    balance: 0.0,
    visible: true
  },
  {
    token: "Silver",
    ticker: "SILV",
    price: "$1.00",
    change: "~ 0.00",
    symbol: "S",
    balance: 0.0,
    visible: true
  }
];

const Accounts = (state = initialState, action) => {
  switch (action.type) {
    case actions.ACCOUNTS_CHANGE_VISIBILITY:
      let accountIndex = state.findIndex(p => {
        return p.ticker === action.ticker;
      });
      return {
        ...state,
        accounts: {
          ...state.accounts,
          [accountIndex]: {
            ...state.accounts[accountIndex],
            visible: true
          }
        }
      };

    default:
      return state;
  }
};

export default Accounts;
