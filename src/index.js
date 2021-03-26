import reactDom from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers/reducer";
import "./index.css";

const store=createStore(reducer)
reactDom.render(
  <Provider store={store}><App/></Provider>,document.getElementById("root")
)