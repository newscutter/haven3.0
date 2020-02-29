import * as actions from "../actions/Accounts";

const initialState = {
  accounts: [
    {
      token: "Haven",
      ticker: "XHV",
      symbol: "H",
      available: true,
      price: 0,
      balance: 0.0,
      visible: true
    },
    {
      token: "US Dollar",
      ticker: "USD",
      symbol: "$",
      available: false,
      price: 0,
      balance: 0.0,
      visible: true
    },
    {
      token: "Euro",
      ticker: "EUR",
      symbol: "€",
      available: false,
      price: 0,
      balance: 0.0,
      visible: true
    },
    {
      token: "British Pound",
      ticker: "GBP",
      symbol: "£",
      available: false,
      price: 0,
      balance: 0.0,
      visible: true
    },
    {
      token: "Japanese Yen",
      ticker: "JPY",
      symbol: "¥",
      available: false,
      price: 0,
      balance: 0.0,
      visible: false
    },

    {
      token: "Canadian Dollar",
      ticker: "CAD",
      symbol: "$",
      available: false,
      price: 0,
      balance: 0.0,
      visible: false
    },
    {
      token: "Chinese Yuan",
      ticker: "CNY",
      symbol: "¥",
      available: false,
      price: 0,
      balance: 0.0,
      visible: false
    },
    {
      token: "Australian Dollar",
      ticker: "AUD",
      symbol: "$",
      available: false,
      price: 0,
      balance: 0.0,
      visible: false
    },
    {
      token: "Swiss Franc",
      ticker: "CHF",
      symbol: "₣",
      available: false,
      price: 0,
      balance: 0.0,
      visible: false
    },
    {
      token: "New Zealand Dollar",
      ticker: "NZD",
      symbol: "$",
      available: false,
      price: 0,
      balance: 0.0,
      visible: false
    },
    {
      token: "Norwegian Krone",
      ticker: "NOK",
      symbol: "kr",
      available: false,
      price: 0,
      balance: 0.0,
      visible: false
    },
    {
      token: "Gold",
      ticker: "GOLD",
      symbol: "G",
      available: false,
      price: 0,
      balance: 0.0,
      visible: true
    },
    {
      token: "Silver",
      ticker: "SILV",
      symbol: "S",
      available: false,
      price: 0,
      balance: 0.0,
      visible: false
    },
    {
      token: "Bitcoin",
      ticker: "BTC",
      symbol: "₿",
      available: false,
      price: 0,
      balance: 0.0,
      visible: true
    }
  ]
};

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
    case actions.ACCOUNTS_UPDATE_BALANCES:
      return state;
    case actions.ACCOUNTS_UPDATE_PRICES:
      return state;
    default:
      return state;
  }
};

export default Accounts;
