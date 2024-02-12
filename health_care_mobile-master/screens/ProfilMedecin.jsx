import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableHighlight,
  requireNativeComponent,
  TextInput,
} from "react-native";

export default function ProfilMedecin({ route }) {
  const { idPatient, idMedecin } = route.params;
  const [medecin, setMedecin] = useState();
  console.log("============ idPatient : ", idPatient);

  const newRendezVous = {
    idRendezVous: null,
    dateRendezVous: "",
    heureRendezVous: "",
    objet: "",
    status: "",
  };

  const [rendezVous, setRendezVous] = useState(newRendezVous);
  const [demanderRV, setDemanderRV] = useState(null);
  const [isTake, setIsTake] = useState(false);

  useEffect(() => {
    axios
      .get(`http://192.168.82.216:9090/api/medecin/${idMedecin}`)
      .then((response) => {
        setMedecin(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération : ", error);
      });
  }, [idMedecin]);

  const handleChange = (name, value) => {
    setRendezVous({ ...rendezVous, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post(
        `http://192.168.82.216:9090/api/rendezVous/add/${idPatient}/${idMedecin}`,
        rendezVous
      )
      .then((response) => {
        setDemanderRV(response.status);
        setRendezVous(newRendezVous);
        setIsTake(true);
        console.log("Ajouté avec succès:", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout:", error);
      });
  };

  return (
    <ImageBackground
      source={require("../assets/medicineBottle.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.profileContainer}>
        <ScrollView>
          <View style={styles.textEndContainer}></View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>
              Dr {medecin?.prenom} {medecin?.nom}
            </Text>
            <Text style={styles.cardText}>{medecin?.specialite}</Text>
            <View style={styles.mb}>
              <Text style={styles.descriptionTitle}>Description :</Text>
              <Text style={styles.descriptionBody}>{medecin?.description}</Text>
            </View>
            <View style={styles.mb}>
              <Text style={styles.coordonneeTitle}>Telephone :</Text>
              <Text style={styles.coordonneeBody}>{medecin?.telephone}</Text>
            </View>
            <View style={styles.mb}>
              <Text style={styles.coordonneeTitle}>Email :</Text>
              <Text style={styles.coordonneeBody}>{medecin?.email}</Text>
            </View>

            <TextInput
              style={styles.formField}
              placeholder="Objet du Rendez-vous"
              onChangeText={(text) => handleChange("objet", text)}
              value={rendezVous.objet}
            />
            {isTake ? (
              demanderRV === 200 ? (
                <TouchableOpacity style={{ marginTop: 10 }}>
                  <Text style={styles.goodResponse}>
                    Rendez-vous demandé avec succès !
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.mt5}>
                  <Text style={styles.wrongResponse}>
                    Erreur lors de la demande de Rendez-vous !
                  </Text>
                </TouchableOpacity>
              )
            ) : (
              ""
            )}
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Demander un Rendez-vous</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  profileContainer: {
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
  backgroundImageDr: {
    flex: 1,
    resizeMode: "contain",
    position: "top",
  },
  infosPatientContainer: {
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardBody: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    // height: 60,
    marginBottom: 20,
  },
  cardText: {
    fontSize: 20,
    color: "#555",
    marginBottom: 15,
    textAlign: "center",
    marginBottom: 40,
    // height: 60,
  },
  primaryButton: {
    backgroundColor: "#007BFF",
    padding: 8,
    borderRadius: 5,
    marginTop: 40,
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  mb: {
    marginBottom: 20,
    fontSize: 16,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  descriptionBody: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 20,
    textAlign: "justify",
  },
  coordonneeTitle: {
    fontSize: 12,
    // fontWeight: "bold",
  },
  coordonneeBody: {
    fontSize: 16,
    fontWeight: "bold",
  },
  formField: {
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  wrongResponse: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "900",
    color: "red",
  },
  goodResponse: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "900",
    color: "green",
  },
});
