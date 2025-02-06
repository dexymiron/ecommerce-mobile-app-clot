import { Redirect, useRootNavigationState } from "expo-router";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const rootNavState = useRootNavigationState();
  if (!rootNavState?.key) {
    return null;
  }

  if (false /* token */) {
    return <Redirect href="/" />;
  } else {
    return <Redirect href="/authorization/login" />;
  }
}

const styles = StyleSheet.create({});
