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
import Explore from "../screens/explore";
import About from "../screens/about";
import Full from "../screens/full";
import Weather from "../screens/weather";
import Settings from "../screens/settings";

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
  Explore: {
    screen: Explore,
  },
  About: {
    screen: About,
  },
  Full: {
    screen: Full,
  },
  Weather: {
    screen: Weather,
  },
  Settings: {
    screen: Settings,
  },
};

/* Creating Stack and Container
=========================================== */
// This is the standard procedure
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
