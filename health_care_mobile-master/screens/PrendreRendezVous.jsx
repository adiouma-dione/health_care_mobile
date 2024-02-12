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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { requireNativeModule } from "expo";

// Assuming you have the necessary navigation and styles imported

export default function PrendreRendezVous({ navigation, route }) {
  const { idPatient } = route.params;

  console.log("========== idPatient : ", idPatient);

  // const idPatient = connectedUser?.idUser;
  let idMedecin= null;
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [visibleMedecins, setVisibleMedecins] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://192.168.82.216:9090/api/medecin/list?name=${keyword}&page=${currentPage}&size=${pageSize}`
      )
      .then((response) => {
        setTotalPages(response.data.totalPages);
        setVisibleMedecins(response.data.content);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération : ", error);
      });
  }, [currentPage, pageSize, keyword]);

  // =====================================

  return (
    <ImageBackground
      source={require("../assets/medicineBottle.png")}
      style={styles.backgroundImage}
    >
      <ScrollView>
        <View style={styles.infosPatientContainer}>
          <View style={styles.row}>
            {visibleMedecins.map((medecin, index) => (
              <View
                style={styles.drProfilContainer}
                key={index}
              >
                <View style={styles.card}>
                  <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>
                      Dr {medecin.prenom} {"\n"} {medecin.nom}
                    </Text>
                    <Text style={styles.cardText}>{medecin.specialite}</Text>
                    <TouchableOpacity
                      style={styles.primaryButton}
                      onPress={() => {
                        idMedecin = medecin.idMedecin;
                        navigation.navigate("Profil Medecin", {
                          idPatient,
                          idMedecin,
                        });
                      }}
                    >
                      <Text style={styles.buttonText}>Voir plus</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
              <TouchableOpacity
                style={
                  currentPage === index
                    ? styles.pageButtonDesabled
                    : styles.pageButton
                }
                key={index}
                onPress={() => setCurrentPage(index)}
                disabled={currentPage === index}
              >
                <Text style={styles.pageButtonText}>{index + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
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
  drProfilContainer: {
    // flex: 1,
    margin: 5,
    width: "45%",
    // height: 350,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
  },
  card: {
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    // margin: "auto",
    // height: 350,
    borderRadius: 8,
  },
  cardImg: {
    height: 200,
    width: "100%",
  },
  cardBody: {
    padding: 10,
    // backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    height: 50,
    textAlign: "center",
  },
  cardText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
    marginBottom: 15,
    textAlign: "center",
  },
  primaryButton: {
    backgroundColor: "#007BFF",
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pagination: {
    flexDirection: "row",
    marginTop: 10,
  },
  pageButton: {
    backgroundColor: "#007BFF",
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
    minWidth: 35,
  },
  pageButtonDesabled: {
    backgroundColor: "#007BFF",
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
    opacity: 0.7,
    minWidth: 35,
  },
  pageButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  modalStyles: {
    content: {
      width: "80%",
      margin: "auto",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  },
  textEndContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: "#dc3545",
    padding: 8,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  cardImgModal: {
    height: 200,
    width: "100%",
  },
  mb5Mt3: {
    marginBottom: 5,
    marginTop: 3,
  },
  fwSemibold: {
    fontWeight: "bold",
  },
});
