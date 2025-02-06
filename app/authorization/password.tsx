import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Input from "@/components/ui/Inputs/Input";
import Button from "@/components/ui/Buttons/Button";
import { ROUTES } from "@/constants/Routes";

const PasswordPage = () => {
  const router = useRouter();
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Sign In</ThemedText>
        </ThemedView>

        <ThemedView style={styles.containerTop}>
          <Input text={"Password"} type="auth" maxLength={25} />
          <Button title={"Continue"} type="auth">
            <ThemedText type="forButton" lightColor="#fff">
              Continue
            </ThemedText>
          </Button>
          <ThemedView style={styles.containerText}>
            <ThemedText type="question">Forgot Password ?</ThemedText>
            <ThemedText
              type="link"
              onPress={() => router.push(ROUTES.FORGOT_PASSWORD_PAGE as any)}
            >
              Reset
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  titleContainer: {
    marginTop: 123,
    marginBottom: 32,
  },
  containerText: {
    flexDirection: "row",
    gap: 5,
  },
  containerTop: {
    gap: 16,
    marginBottom: 71,
  },
});

export default PasswordPage;
