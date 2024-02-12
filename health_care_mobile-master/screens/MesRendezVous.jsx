import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MesRendezVous({ navigation, route }) {
  const { idPatient } = route.params;
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [visibleRendezVous, setVisibleRendezVous] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://192.168.82.216:9090/api/rendezVous/patient?idPatient=${idPatient}&page=${currentPage}&size=${pageSize}`
      )
      .then((response) => {
        setTotalPages(response.data.totalPages);
        setVisibleRendezVous(response.data.content);
        // console.log(response.data);
        console.log("======= Mes Rendez-vous : ", response.data.totalPages);
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
      <View style={styles.btnTakeRv}>
        <Button
          title="Prendre Rendez-vous"
          color="#007bff"
          onPress={() =>
            navigation.navigate("Prendre Rendez-vous", { idPatient })
          }
        />
      </View>
      <View style={styles.container}>
        <View style={styles.listGroupCostume2}>
          {visibleRendezVous.map((rendezVous, index) => (
            <View style={styles.listGroupItemCostume2} key={index}>
              <Text>
                <Text style={styles.valueRV}>{rendezVous.objet} </Text>
                <Text>( {rendezVous.medecin.specialite} )</Text>
              </Text>
              <Text>
                <Text>Chez : </Text>
                <Text style={styles.valueRV}>
                  Dr {rendezVous.medecin.prenom} {rendezVous.medecin.nom}
                </Text>
              </Text>
              <Text>
                <Text>Le </Text>
                <Text style={styles.valueRV}>
                  {transformDate(rendezVous.dateRendezVous)}
                </Text>
                <Text> à </Text>
                <Text style={styles.valueRV}>{rendezVous.heureRendezVous}</Text>
              </Text>
              <Text>
                <Text>Statut : </Text>
                {rendezVous.isConfirmed ? (
                  <Text style={styles.confirmed}>Confirmé</Text>
                ) : (
                  <Text style={styles.notConfirmed}>Non Confirmé</Text>
                )}
              </Text>
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
    maxWidth: "80%",
    margin: "10%",
    boxShadow: "#5e5e5e 0px 0px 25px",
  },
  btnTakeRv: {
    color: "#007bff",
    maxWidth: "80%",
    marginLeft: "10%",
    marginTop: "5%",
  },
  listGroupCostume2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },

  listGroupItemCostume2: {
    width: "100%",
    marginBottom: "5%",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    boxShadow: "0px 0px 25px #5e5e5e",
  },
  notConfirmed: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
  },
  confirmed: {
    color: "green",
    fontWeight: "bold",
    fontSize: 16,
  },
  valueRV: {
    fontWeight: "bold",
    fontSize: 16,
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
});
