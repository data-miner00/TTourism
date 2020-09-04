//
//  This file contains the necessary routes for this application
//

/* Imports
=========================================== */
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// Component imports
import Home from "../screens/home";
import Details from "../screens/details";
import Add from "../screens/add";

/* Screen Registration
=========================================== */
// Each screens of the project must be registered here
// The first screen (Home) is the default screen
let screens = {
  Home: {
    screen: Home,
  },
  Details: {
    screen: Details,
  },
  Add: {
    screen: Add,
  },
};

/* Creating Stack and Container
=========================================== */
// This is the standard procedure
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
