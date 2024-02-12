import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MesTraitements({ route }) {
  const { idPatient } = route.params;
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [visibleTraitements, setvisibleTraitements] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://192.168.82.216:9090/api/traitement/list?idDossier=${idPatient}&page=${currentPage}&size=${pageSize}`
      )
      .then((response) => {
        setTotalPages(response.data.totalPages);
        setvisibleTraitements(response.data.content);
        // console.log(response.data);
        console.log("======= Mes Rendez-vous : ", response.data.content);
      })
      .catch((error) => {
        console.error(`Erreur lors de la récupération :`, error);
      });
  }, [idPatient, currentPage, pageSize]);

  const transformDate = (date) => {
    let splitDate = date.split("-");
    const newDate = splitDate[2] + "/" + splitDate[1] + "/" + splitDate[0];
    return newDate;
  };

  return (
    <ImageBackground
      source={require("../assets/medicineBottle.png")}
      style={styles.backgroundImage}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.listGroupCostume2}>
            <ScrollView>
              {visibleTraitements.map((traitement, index) => (
                <View style={styles.listGroupItemCostume2} key={index}>
                  <View style={styles.listItem}>
                    <View>
                      <Text style={styles.nomMedicament}>
                        {traitement.nomMedicament}
                      </Text>
                    </View>
                    <Text>
                      <Text style={styles.txtTraitementKey}>Dosage: </Text>
                      <Text style={styles.txtTraitementValue}>
                        {traitement.dosage}
                        {traitement.unite} {" - "}
                        {traitement.frequence} fois/jour
                      </Text>
                    </Text>
                    <Text>
                      <Text style={styles.txtTraitementKey}>
                        {`Du ${transformDate(traitement.dateDebut)} au ${
                          traitement.dateFin === ""
                            ? "Indefini"
                            : transformDate(traitement.dateFin)
                        }`}
                      </Text>
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
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
                onPress={() => {
                  setCurrentPage(index);
                  console.log("===== index : ", index);
                }}
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
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(5px)",
    padding: 30,
    borderRadius: 10,
    maxWidth: "90%",
    margin: "10%",
    boxShadow: "#5e5e5e 0px 0px 25px",
  },
  listGroupCostume2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  listGroupItemCostume2: {
    minWidth: "100%",
    marginBottom: "10%",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    paddingBottom: 20,
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
  txtTraitementValue: {
    fontWeight: "bold",
    fontSize: 18,
  },
  txtTraitementKey: {
    fontSize: 14,
    lineHeight: 25,
  },
  nomMedicament: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    width: "100%",
    borderColor: "red",
    marginBottom: 10,
  },
});
