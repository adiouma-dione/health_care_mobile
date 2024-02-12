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

const MesFacturesPage = ({ navigation, route }) => {
  const { idPatient } = route.params;

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [visibleFactures, setvisibleFactures] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://192.168.82.216:9090/api/facture/list?idDossier=${idPatient}&page=${currentPage}&size=${pageSize}`
      )
      .then((response) => {
        setvisibleFactures(response.data.content);
        console.log("======= AllFactures : ", response.data.content);
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
      <ScrollView style={styles.container}>
        <View style={styles.formContainer}>
          {visibleFactures?.map((facture, index) => (
            <TouchableOpacity key={index}>
              <View style={styles.listItem}>
                <Text style={styles.txtFactureItem}>
                  <Text>
                    <Text style={styles.txtFactureKey}>Designation: </Text>
                    <Text style={styles.txtFactureValue}>
                      {facture.designation}
                    </Text>
                  </Text>
                  {"\n"}
                  <Text style={styles.txtFactureKey}>Date: </Text>
                  <Text style={styles.txtFactureValue}>
                    {transformDate(facture.dateFacture)}
                  </Text>
                  {"\n"}
                  <Text style={styles.txtFactureKey}>Montant: </Text>
                  <Text style={styles.txtFactureValue}>{facture.montant}</Text>
                  <Text style={styles.txtFactureKey}> TDN</Text>
                  {"\n"}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
  },
  arrowIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  containerHome: {
    flex: 1,
    alignItems: "center",
  },
  formContainer: {
    marginTop: "10%",
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(5px)",
    padding: 30,
    borderRadius: 10,
    maxWidth: "80%",
    margin: "10%",
    boxShadow: "#5e5e5e 0px 0px 25px",
  },
  listItem: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  txtFactureItem: {
    // textAlign: "center",
    fontSize: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "90%",
    // backgroundColor: "red",
    margin: 5,
    lineHeight: 25,
  },
  txtFactureValue: {
    fontWeight: "bold",
    fontSize: 18,
  },
  txtFactureKey: {
    fontSize: 14,
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

export default MesFacturesPage;
