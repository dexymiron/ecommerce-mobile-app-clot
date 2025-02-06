import { Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Button from "@/components/ui/Buttons/Button";
import { ROUTES } from "@/constants/Routes";

const SendEmailPage = () => {
  const router = useRouter();
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedView>
          <Image
            source={require("@/assets/images/sendEmail.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </ThemedView>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="sendEmail">
            We Send you an Email to reset your password.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.buttonContainer}>
          <Button
            title={"Return to Login"}
            type="halfWidth"
            pressAction={() => router.replace(ROUTES.LOGIN_PAGE as any)}
          >
            <ThemedText type="forButton" lightColor="#fff">
              Return to Login
            </ThemedText>
          </Button>
        </ThemedView>
      </ThemedView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  image: {
    width: 100,
    height: 100,
  },
  titleContainer: {},
  buttonContainer: {
    alignItems: "center",
    width: "100%",
  },
});

export default SendEmailPage;
