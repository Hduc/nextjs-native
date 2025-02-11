import { View, Text, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../theme/color';

import Login from '../screens/Login';
import Splash from '../screens/Splash';
import Introduction from '../screens/Introduction';
import Login1 from '../screens/Login1';
import LFinger from '../screens/LFinger';
import Register from '../screens/Register';
// import RSuccess from '../screens/RSuccess';
// import Country from '../screens/Country';
// import Name from '../screens/Name';
// import Address from '../screens/Address';
// import Room from '../screens/Room';
import Home from '../screens/';
// import SearchR from '../screens/SearchR';
// import ActiveD from '../screens/ActiveD';
// import Otp from '../screens/Otp';
// import Setting from '../screens/Setting';
import VAssis from '../screens/VAssis';
// import Profile from '../screens/Profile';
// import Report from '../screens/Report';
import Condition from '../screens/Condition';
// import SC1 from '../screens/SC1';
import MHome from '../screens/MHome';
import HomeD from '../screens/HomeD';
// import EditAddress from '../screens/EditAddress';
// import InviteM from '../screens/InviteM';
// import AddDevice from '../screens/AddDevice';
// import ADSearch from '../screens/ADSearch';
// import ADSecurity from '../screens/ADSecurity';
// import ADLink from '../screens/ADLink';
// import ADLocation from '../screens/ADLocation';
// import SC2 from '../screens/SC2';
// import Automation from '../screens/Automation';
// import AutoLog from '../screens/AutoLog';
// import RoomD from '../screens/RoomD';
// import RoomE from '../screens/RoomE';
// import Scan from '../screens/Scan';
// import Scan1 from '../screens/Scan1';
// import Scan2 from '../screens/Scan2';
import MyTabs from './BottomNavigator';
// import Home from '../screens';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 4000);


  }, [])
  return (

    <NavigationContainer>

      <Stack.Navigator>
        {
          showSplashScreen ?
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }} />
            : null
        }

        <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} />
        {/*           
          <Stack.Screen
          name="ADLocation"
          component={ADLocation}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Scan2"
          component={Scan2}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Scan1"
          component={Scan1}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="RoomE"
          component={RoomE}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="RoomD"
          component={RoomD}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="AutoLog"
          component={AutoLog}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Automation"
          component={Automation}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="SC2"
          component={SC2}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="ADLink"
          component={ADLink}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="ADSecurity"
          component={ADSecurity}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="ADSearch"
          component={ADSearch}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="AddDevice"
          component={AddDevice}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="InviteM"
          component={InviteM}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="EditAddress"
          component={EditAddress}
          options={{ headerShown: false }} />

        

        

      

        <Stack.Screen
          name="ActiveD"
          component={ActiveD}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="SC1"
          component={SC1}
          options={{ headerShown: false }} />
        
        <Stack.Screen
          name="Report"
          component={Report}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }} />
        
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="SearchR"
          component={SearchR}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Room"
          component={Room}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Address"
          component={Address}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Name"
          component={Name}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Country"
          component={Country}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="RSuccess"
          component={RSuccess}
          options={{ headerShown: false }} />
*/}
<Stack.Screen
          name="HomeD"
          component={HomeD}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="MHome"
          component={MHome}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="VAssis"
          component={VAssis}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Condition"
          component={Condition}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="LFinger"
          component={LFinger}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Login1"
          component={Login1}
          options={{ headerShown: false }} />


        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}