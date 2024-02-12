import { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { styles } from "./App.css";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/Home";
import MesFactures from "./screens/MesFactures";
import MesTraitements from "./screens/MesTraitements";
import MesRendezVous from "./screens/MesRendezVous";
import axios from "axios";
import { userData } from "./userData";
import PrendreRendezVous from "./screens/PrendreRendezVous";
import ProfilMedecin from "./screens/ProfilMedecin";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.containerBodyCostume}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Page de Connexion"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#cdcdcd",
              minHeight: "10%",
              shadowColor: "#5e5e5e",
              shadowOpacity: 0.8,
            },
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="Page de Connexion" component={Login} />
          <Stack.Screen name="Accueil" component={Home} />
          <Stack.Screen name="Mes Traitements" component={MesTraitements} />
          <Stack.Screen name="Mes Rendez-vous" component={MesRendezVous} />
          <Stack.Screen
            name="Prendre Rendez-vous"
            component={PrendreRendezVous}
          />
          <Stack.Screen name="Profil Medecin" component={ProfilMedecin} />
          <Stack.Screen name="Mes Factures" component={MesFactures} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

// Comment faire passer des donnees par exemple le username et le password d'une page login vers une page home où les donnees seront traiitees dans une application react native ?
