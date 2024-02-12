import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = ({ navigation, route }) => {
  let badUser = false;
  if (route.params) {
    const { badUserResponse } = route.params;
    badUser = badUserResponse;
  }

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    if (user) {
      navigation.navigate("Accueil", { user });
    }
  };

  return (
    <ImageBackground
      source={require("../assets/medicineBottle.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerHome}>
            <View style={styles.formContainerLogin}>
              <Text style={[styles.mb5, styles.title]}>Connexion</Text>
              <View style={styles.form}>
                <TextInput
                  style={styles.formField}
                  placeholder="Nom d'utilisateur"
                  onChangeText={(text) => handleChange("username", text)}
                  value={user.username}
                />
                <TextInput
                  style={styles.formField}
                  placeholder="Mot de passe"
                  secureTextEntry={true}
                  onChangeText={(text) => handleChange("password", text)}
                  value={user.password}
                />
                <Button
                  title="Se connecter"
                  color="#007bff"
                  onPress={handleSubmit}
                />
                {badUser ? (
                  <TouchableOpacity style={styles.mt5}>
                    <Text style={styles.wrong}>
                      Nom d'utilisateur et/ou Mot de passe incorrecte !
                    </Text>
                  </TouchableOpacity>
                ) : (
                  ""
                )}
                <TouchableOpacity style={styles.mt5}>
                  <Text>
                    Mot de passe oublié ?{" "}
                    <Text style={styles.link}>Cliquez ici</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", 
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    minHeight: "10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    boxShadowColor: "#5e5e5e",
    boxShadowOpacity: 0.8,
    paddingTop: "5%",
    marginBottom: "15%",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  containerHome: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
  },
  formContainerLogin: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: "7%",
    borderRadius: 10,
    margin: "5%",
    boxShadowColor: "#5e5e5e",
    boxShadowOffset: { width: 0, height: 0 },
    boxShadowOpacity: 0.8,
    boxShadowRadius: 25,
    width: "90%",
    minHeight: "70%",
  },
  mb5: {
    marginTop: "7%",
    marginBottom: "7%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  form: {
    marginTop: "7%",
  },
  formField: {
    height: "13%",
    // height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: "16%",
    paddingHorizontal: 10,
    // textTransform: "lowercase",
  },
  mt5: {
    marginTop: "16%",
  },
  link: {
    color: "blue",
    height: "16%",
  },
  wrong: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "900",
    color: "red",
  },
});

export default Login;
