/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/App";
// import CoreComponent from './src/CoreComponent';
// import DesignTampilan from "./src/DesignTampilan";
// import StateProps from "./src/StateProps";
//import ContohForm from "./src/ContohForm";
import { name as appName } from "./app.json";

import { YellowBox } from "react-native";
import _ from "lodash";

YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

AppRegistry.registerComponent(appName, () => App);
