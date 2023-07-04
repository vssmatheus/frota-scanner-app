import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Button } from "react-native";

export const BombaInicial = () => {
  const navigation = useNavigation();

    const goToPlacaScanner = () => {
      navigation.navigate('Placa Scanner');
    };

  return (
    <View>
      <Button title="Abrir Placa Scanner" onPress={goToPlacaScanner} />
    </View>
  );
};
