import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Input from "@/components/ui/Inputs/Input";
import Button from "@/components/ui/Buttons/Button";
import ThemedIcon from "@/components/ThemedIcon";
import GoogleIcon from "@/components/svg/GoogleIcon";
import FacebookIcon from "@/components/svg/FacebookIcon";
import { ROUTES } from "@/constants/Routes";

const LoginPage = () => {
  const router = useRouter();
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Sign In</ThemedText>
        </ThemedView>

        <ThemedView style={styles.containerTop}>
          <Input text={"Username"} type="auth" maxLength={25} />
          <Button
            title={"Continue"}
            type="auth"
            pressAction={() => router.replace(ROUTES.PASSWORD_PAGE)}
          >
            <ThemedText type="forButton" lightColor="#fff">
              Continue
            </ThemedText>
          </Button>
          <ThemedView style={styles.containerText}>
            <ThemedText type="question">Dont have an Account ?</ThemedText>
            <ThemedText
              type="link"
              onPress={() => router.push(ROUTES.CREATE_ACCOUNT_PAGE)}
            >
              Create One
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.containerBottom}>
          <Button
            title={"Continue with Apple"}
            type="forIcon"
            lightColor="#F4F4F4"
            darkColor="#342F3F"
          >
            <ThemedIcon
              name="apple1"
              size={25}
              type="antdesign"
              style="forButton"
            ></ThemedIcon>
            <ThemedText type="forButton">Continue with Apple</ThemedText>
          </Button>

          <Button
            title={"Continue with Google"}
            type="forIcon"
            lightColor="#F4F4F4"
            darkColor="#342F3F"
          >
            <GoogleIcon type="forButton" />
            <ThemedText type="forButton">Continue with Google</ThemedText>
          </Button>

          <Button
            title={"Continue with Facebook"}
            type="forIcon"
            lightColor="#F4F4F4"
            darkColor="#342F3F"
          >
            <FacebookIcon type="forButton" />
            <ThemedText type="forButton">Continue with Facebook</ThemedText>
          </Button>
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
  containerBottom: {
    gap: 12,
  },
});

export default LoginPage;
