import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Button } from "react-native";

export const OdometroScanner = () => {
  const navigation = useNavigation();

    const goToPlacaScanner = () => {
      navigation.navigate('Bomba Final');
    };

  return (
    <View>
      <Button title="Abrir Bomba Final" onPress={goToPlacaScanner} />
    </View>
  );
};
