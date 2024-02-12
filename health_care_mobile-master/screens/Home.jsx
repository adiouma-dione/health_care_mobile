import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const Home = ({ navigation, route }) => {
  /* -------------------------------------------------------------------------- */
  /*                                    test                                    */
  /* -------------------------------------------------------------------------- */

  const { user } = route.params;
  const tmpUsername = user.username;
  const tmpPassword = user.password;

  // const [usernameError, setUsernameError] = useState("");
  // const [txtLoginError, setTxtLoginError] = useState("");
  let badUserResponse = false;

  const [idPatient, setIdPatient] = useState();
  const [isConnectedUser, setIsConnectedUser] = useState(false);

  useEffect(() => {
    console.log("In home useEffet");
    axios
      .get(`http://192.168.82.216:9090/api/user/${tmpUsername}`)
      .then((response) => {
        if (
          response.status !== 200 ||
          response.data.password !== tmpPassword ||
          response.data.role !== "patient"
        ) {
          badUserResponse = true;
          navigation.navigate("Page de Connexion", { badUserResponse });
        }
        setIsConnectedUser(true);
      })
      .catch((error) => {
        navigation.navigate("Page de Connexion");
        console.error(
          `Erreur lors de la recuperarion de l'utilisateur : \n`,
          error
        );
      });
  }, []);

  if (isConnectedUser) {
    axios
      .get(`http://192.168.82.216:9090/api/patient?email=${tmpUsername}`)
      .then((response) => {
        setIdPatient(response.data?.idPatient);
      })
      .catch((error) => {
        console.error(
          `Erreur lors de la recuperarion de l'utilisateur : \n`,
          error
        );
      });
  }

  /* -------------------------------------------------------------------------- */
  /*                                  fin test                                  */
  /* -------------------------------------------------------------------------- */

  return (
    <ImageBackground
      source={require("../assets/medicineBottle.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.containerHome}>
          <View style={styles.formContainer}>
            <TouchableOpacity
              style={styles.listItem}
              onPress={() =>
                navigation.navigate("Mes Traitements", { idPatient })
              }
            >
              <Text style={styles.listItemText}>
                <View style={styles.listItemImgContainer}>
                  <Image
                    style={styles.listItemImg}
                    source={require("../assets/pilule.png")}
                  />
                </View>
                {"\n"}Mes Traitements
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listItem}
              onPress={() =>
                navigation.navigate("Mes Rendez-vous", { idPatient })
              }
            >
              <Text style={styles.listItemText}>
                <View style={styles.listItemImgContainer}>
                  <Image
                    style={styles.listItemImg}
                    source={require("../assets/rv2.png")}
                  />
                </View>
                {"\n"}Mes Rendez-vous
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listItem}
              onPress={() =>
                navigation.navigate("Mes Factures", { idPatient })
              }
            >
              <Text style={styles.listItemText}>
                <View style={styles.listItemImgContainer}>
                  <Image
                    style={styles.listItemImg}
                    source={require("../assets/facture.png")}
                  />
                </View>
                {"\n"}Mes Factures
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
    // resizeMode: 'stretch'
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    minHeight: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    shadowColor: "#5e5e5e",
    shadowOpacity: 0.8,
    paddingTop: "5%",
    marginBottom: "15%",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  containerHome: {
    flex: 1,
    alignItems: "center",
    minHeight: "100%",
    justifyContent: "center",
  },
  formContainer: {
    width: "100%",
    marginBottom: 20,
  },
  listItem: {
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: "center",
  },
  listItemText: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    width: "50%",
    minHeight: "25%",
  },
  listItemImgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  listItemImg: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    // backgroundColor: "red",
  },
});
