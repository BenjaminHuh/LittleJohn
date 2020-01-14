import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import stocksReducer from "./stocks_reducer";
import stockReducer from "./stock_reducer";
import portfoliosReducer from "./portfolios_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  stock: stockReducer,
  stocks: stocksReducer,
  portfolio: portfoliosReducer
});

export default entitiesReducer;