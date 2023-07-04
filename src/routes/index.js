import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlacaScanner } from "../modules/PlacaScanner/screen";
import { OdometroScanner } from "../modules/OdometroScanner/screen";
import { BoasVindas } from "../modules/BoasVindas/screen";
import { Resultados } from "../modules/Resultados/screen";
import { BombaInicial } from "../modules/BombaInicial/screen";
import { BombaFinal } from "../modules/BombaFinal/screen";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Boas Vindas" component={BoasVindas} />
      <Stack.Screen name="Bomba Inicial" component={BombaInicial} />
      <Stack.Screen name="Placa Scanner" component={PlacaScanner} />
      <Stack.Screen name="Odometro Scanner" component={OdometroScanner} />
      <Stack.Screen name="Bomba Final" component={BombaFinal} />
      <Stack.Screen name="Resultados" component={Resultados} />
    </Stack.Navigator>
  );
};
