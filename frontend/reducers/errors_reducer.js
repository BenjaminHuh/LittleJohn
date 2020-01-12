import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import stocksErrorsReducer from "./stocks_errors_reducer";

const errorsReducer = combineReducers({  
  session: sessionErrorsReducer,
  stocks: stocksErrorsReducer
});

export default errorsReducer;