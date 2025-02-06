import { ButtonProps } from "@/constants/Types";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Pressable, StyleSheet } from "react-native";

const Button = ({
  title,
  pressAction,
  lightColor,
  darkColor,
  type,
  ...rest
}: ButtonProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "buttonPrimary"
  );
  return (
    <Pressable
      style={[
        { backgroundColor },
        type === "auth" ? styles.auth : undefined,
        type === "forIcon" ? styles.forIcon : undefined,
        type === "halfWidth" ? styles.halfWidth : undefined,
        type === "round" ? styles.round : undefined,
      ]}
      {...rest}
      onPress={pressAction}
    ></Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  auth: {
    borderRadius: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  forIcon: {
    borderRadius: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  halfWidth: {
    borderRadius: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 160,
    width: "100%",
  },
  round: {
    borderRadius: 100,
    height: 40,
    width: 40,
    position: "absolute",
    top: -130,
    left: 0,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
