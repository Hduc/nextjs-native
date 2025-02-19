import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "../../../layout/header";
import CustomNavigation from "./CustomNavigation";

const Home = () => {
  return <></>;
};
const Market = () => {
  return <></>;
};
const Change = () => {
  return <></>;
};
const Wallet = () => {
  return <></>;
};
const Profile = () => {
  return <></>;
};

const Tab = createBottomTabNavigator();

const TabStyle2 = () => {
  return (
    <>
      <Header title={"Footer Style 2"} titleLeft leftIcon={"back"} />
      <Tab.Navigator
        tabBar={(props) => <CustomNavigation {...props} />}
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Change"
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Markets" component={Market} />
        <Tab.Screen name="Change" component={Change} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </>
  );
};

export default TabStyle2;
