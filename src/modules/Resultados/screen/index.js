import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Button } from "react-native";

export const Resultados = () => {
  const navigation = useNavigation();

    const goToPlacaScanner = () => {
      navigation.navigate('Boas Vindas');
    };

  return (
    <View>
      <Button title="Finalizar" onPress={goToPlacaScanner} />
    </View>
  );
};
