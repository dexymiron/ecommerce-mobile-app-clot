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
});
