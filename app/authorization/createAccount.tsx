import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Input from "@/components/ui/Inputs/Input";
import Button from "@/components/ui/Buttons/Button";
import { ROUTES } from "@/constants/Routes";
import ThemedIcon from "@/components/ThemedIcon";

const CreateAccountPage = () => {
  const router = useRouter();
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Create Account</ThemedText>
        </ThemedView>

        <ThemedView style={styles.containerTop}>
          <Button
            title={"Continue"}
            type="round"
            lightColor="#F4F4F4"
            darkColor="#342F3F"
            pressAction={() => router.back()}
          >
            <ThemedIcon name="keyboard-arrow-left" size={16}></ThemedIcon>
          </Button>
          <Input text={"Firstname"} type="auth" maxLength={25} />
          <Input text={"Lastname"} type="auth" maxLength={25} />
          <Input text={"Email Adress"} type="auth" maxLength={25} />
          <Input text={"Password"} type="auth" maxLength={25} />
          <ThemedView style={styles.buttonContainer}>
            <Button
              title={"Continue"}
              type="auth"
              pressAction={() => router.push(ROUTES.ABOUT_YOURSELF_PAGE as any)}
            >
              <ThemedText type="forButton" lightColor="#fff">
                Continue
              </ThemedText>
            </Button>
          </ThemedView>
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
  container: { flex: 1, position: "relative" },
  titleContainer: {
    marginTop: 123,
    marginBottom: 32,
  },
  buttonContainer: {
    marginVertical: 24,
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

export default CreateAccountPage;
