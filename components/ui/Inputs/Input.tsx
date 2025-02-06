import { Fonts } from "@/constants/Fonts";
import { InputProps } from "@/constants/Types";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, TextInput } from "react-native";

const Input = ({
  style,
  lightColor,
  darkColor,
  text,
  maxLength,
  type = "auth",
  ...rest
}: InputProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "inputGray"
  );

  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );
  return (
    <TextInput
      placeholder={text}
      style={[
        { backgroundColor, color: textColor },
        type === "auth" ? styles.auth : undefined,
        style,
      ]}
      {...rest}
      maxLength={maxLength}
    ></TextInput>
  );
};

export default Input;

const styles = StyleSheet.create({
  auth: {
    paddingHorizontal: 12,
    paddingVertical: 19,
    borderRadius: 4,
    fontFamily: Fonts.CircularStd400,
    fontSize: 16,
    lineHeight: 20.24,
    letterSpacing: -0.41,
  },
});
