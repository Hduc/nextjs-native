import { Stack } from "expo-router"
import { useEffect, useState } from "react";
import Splash from "../screens/Splash";

const AppLayout = () => {
  // cấu hình intro tại đẩy
  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 4000);
  }, [])

  return showSplashScreen ? <Splash /> : <Stack />
}

export default AppLayout
