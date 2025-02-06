import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedIconProps } from "@/constants/Types";

// https://icons.expo.fyi/Index -> find icons

export const ICON_SETS = {
  material: MaterialIcons,
  fontawesome: FontAwesome,
  antdesign: AntDesign,
};

const ThemedIcon = ({
  name,
  size = 25,
  color,
  type = "material",
  style,
}: ThemedIconProps) => {
  const themeColor = useThemeColor({}, "icon");

  const IconComponent = ICON_SETS[type] || MaterialIcons;

  return (
    <View
      style={[
        style === "forButton" ? styles.forButton : undefined,
        style === "forRoundButton" ? styles.forRoundButton : undefined,
      ]}
    >
      <IconComponent
        name={name as any}
        size={size}
        color={color || themeColor}
      />
    </View>
  );
};

export default ThemedIcon;

const styles = StyleSheet.create({
  forButton: {
    position: "absolute",
    left: 20,
  },
  forRoundButton: {},
});
