import { StyleSheet } from "react-native";

const primaryColor = "#2e5fd2";
const secondaryColor = "#eee";

export const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    // resizeMode: "contain",
  },
  containerBodyCostume: {
    minHeight: "100%",
  },
  containerHome: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1, // Ajoutez cela si nécessaire pour occuper tout l'espace disponible
  },
  containerRV: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1, // Ajoutez cela si nécessaire pour occuper tout l'espace disponible
  },
  h2: {
    fontWeight: "600",
  },
  infosPatientContainer: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    padding: 30,
    borderRadius: 10,
    margin: "0 auto",
    minHeight: "60vh",
    shadowColor: "#5e5e5e",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 25,
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    padding: 30,
    borderRadius: 10,
    margin: "0 auto",
    minHeight: "60vh",
    shadowColor: "#5e5e5e",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 25,
  },
  formContainerLogin: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  formContainerLoginForm: {
    display: "block",
    marginTop: "10vh",
    minHeight: "60vh",
  },
  formFloating: {
    marginBottom: "5vh",
  },
  imgConsulterAll: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  listGroupCostume1: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  listGroupItemCostume1: {
    width: "100%",
    marginBottom: "15%",
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    shadowColor: "#5e5e5e",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 25,
  },
  listGroupItemCostume1A: {
    textDecoration: "none",
    color: "inherit",
    textAlign: "center",
    display: "block",
    fontWeight: "700",
  },
  biHome: {
    fontSize: 50,
    width: "100%",
  },
  biHeader: {
    fontSize: 20,
  },
  header: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    minHeight: "10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    shadowColor: "#5e5e5e",
    // shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    paddingTop: "5%",
    // paddingBottom: "0%",
    // paddingEnd: "5%",
    // paddingLeft: "5%",
    // marginBottom: "5%",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  headerH2: {
    display: "inline-block",
    width: "100%",
    margin: 0,
    textAlign: "center",
  },
  drFrofilContainer: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
  },
  drFrofil: {
    width: "100%",
    borderWidth: 1,
    marginBottom: "15%",
    shadowColor: "#5e5e5e",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  cardImgModal: {
    minHeight: "22vh",
  },
  cardImg: {
    minHeight: "9vh",
    width: "50%",
    margin: "5% auto",
    borderRadius: 100,
    borderWidth: 1,
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
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    shadowColor: "#5e5e5e",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 25,
  },
  listGroupItemCostume2A: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
  },
  imgRvItem: {
    minWidth: "20%",
    borderRadius: 5,
    borderWidth: 1,
  },
  btnRvTake: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "5vh",
    marginRight: "5%",
    marginBottom: "5vh",
  },
  txtRvItem: {
    display: "flex",
    justifyContent: "stretch",
    alignItems: "start",
    flexDirection: "column",
    margin: 0,
    marginLeft: "5%",
  },
  txtFactureItem: {
    display: "flex",
    justifyContent: "stretch",
    alignItems: "start",
    flexDirection: "column",
    width: "100%",
    margin: 0,
  },
  txtRvItemMedecin: {
    fontWeight: "700",
  },
  txtFactureDesignation: {},
  cardImgModal: {
    minHeight: "18vh",
  },
  // });

  // export default styles;

  // import { StyleSheet } from "react-native";

  // const primaryColor = "#2e5fd2";
  // const secondaryColor = "#eee";

  // export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    minHeight: "10%",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 25,
    backgroundColor: primaryColor,
  },
  txtHeader: {
    fontSize: 20,
    color: "#fff",
  },
  home: {
    minHeight: "60%",
    width: "100%",
    paddingHorizontal: 20,
  },
  txtLogin: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "900",
    marginVertical: 30,
  },
  txtLabel: {
    color: "gray",
    marginBottom: 5,
  },
  inputContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    minHeight: 40,
    backgroundColor: secondaryColor,
    paddingLeft: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  input: {
    minHeight: 50,
    width: "95%",
    paddingLeft: 10,
  },
  imgInput: {
    width: 20,
    height: 20,
  },
  imgGoBack: {
    padding: 15,
  },
  btnLogin: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: primaryColor,
    minHeight: 50,
    borderRadius: 5,
    width: "100%",
  },
  btnAddAp: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: primaryColor,
    minHeight: 50,
    borderRadius: 5,
    width: "40%",
  },
  btnAddApContent: {
    marginBottom: 100,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  txtBtnLogin: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
  },
  flatListContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  apItemContainer: {
    backgroundColor: secondaryColor,
    width: "95%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    flexDirection: "row",
    marginHorizontal: "2.5%",
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 10,
    // borderBlockColor: "#000"
  },
  apItemRight: {
    // paddingLeft: 20,
    width: "60%",
    // backgroundColor: "red"
  },
  apItemRightTitle: {
    fontWeight: 800,
    fontSize: 20,
  },
  apItemRightContent: {
    fontWeight: 500,
    fontSize: 13,
  },
  apItemLeft: {
    // paddingRight: 20,
    width: "20%",
    alignItems: "flex-end",
    // backgroundColor: "red"
  },
  imgApItem: {
    width: 20,
    height: 20,
  },
  updateAndDelete: {
    display: "flex",
    width: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    // alignItems: "center",
  },
});
