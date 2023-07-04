import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Button } from "react-native";

export const BombaFinal = () => {
  const navigation = useNavigation();

    const goToPlacaScanner = () => {
      navigation.navigate('Resultados');
    };

  return (
    <View>
      <Button title="Ver Resultados" onPress={goToPlacaScanner} />
    </View>
  );
};
