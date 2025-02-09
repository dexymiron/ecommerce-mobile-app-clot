import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProtectedLayout() {
  const background = useThemeColor({}, "background");

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
      <ThemedView style={[styles.container, { backgroundColor: background }]}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
