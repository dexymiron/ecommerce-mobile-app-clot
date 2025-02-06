import { ICON_SETS } from "@/components/ThemedIcon";
import { PressableProps, TextInputProps, TextProps, ViewProps } from "react-native";

export type IconProps = {
    type?: "forButton";
};

export type ButtonProps = PressableProps & {
    lightColor?: string;
    darkColor?: string;
    title: string;
    type?: "auth" | "forIcon";
    pressAction?: any;
};

export type InputProps = TextInputProps & {
    lightColor?: string;
    darkColor?: string;
    text?: string;
    type?: "auth";
    maxLength?: number;
};

export type ThemedIconProps = {
    name: string;
    size?: number;
    color?: string;
    type?: keyof typeof ICON_SETS;
    style?: "forButton";
};

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: "default" | "title" | "subtitle" | "question" | "link" | "forButton";
};

export type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};