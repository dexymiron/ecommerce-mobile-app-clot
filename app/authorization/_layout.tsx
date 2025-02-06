import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  const background = useThemeColor({}, "background");

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
      <ThemedView style={[styles.container, { backgroundColor: background }]}>
        <Stack>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="password" options={{ headerShown: false }} />
          <Stack.Screen name="createAccount" options={{ headerShown: false }} />
          <Stack.Screen
            name="forgotPassword"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="sendEmail" options={{ headerShown: false }} />
        </Stack>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
