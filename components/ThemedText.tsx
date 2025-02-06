import { Text, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { Fonts } from "@/constants/Fonts";
import { ThemedTextProps } from "@/constants/Types";

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "question" ? styles.question : undefined,
        type === "link" ? styles.link : undefined,
        type === "forButton" ? styles.forButton : undefined,
        type === "sendEmail" ? styles.sendEmail : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.CircularStd400,
  },
  title: {
    fontSize: 32,
    fontFamily: Fonts.CircularStd700,
    lineHeight: 34.5,
    letterSpacing: -0.41,
  },
  question: {
    fontSize: 12,
    fontFamily: Fonts.CircularStd400,
    lineHeight: 15.18,
    letterSpacing: -0.41,
    alignItems: "center",
  },
  link: {
    fontSize: 12,
    fontFamily: Fonts.CircularStd700,
    lineHeight: 15.18,
    letterSpacing: -0.41,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 24,
    fontFamily: Fonts.GabaritoBold,
    lineHeight: 28.8,
  },
  forButton: {
    fontFamily: Fonts.CircularStd500,
    fontSize: 16,
    lineHeight: 26.73,
    letterSpacing: -0.5,
  },
  sendEmail: {
    fontFamily: Fonts.CircularStd500,
    fontSize: 24,
    lineHeight: 30.36,
    textAlign: "center",
  },
});
