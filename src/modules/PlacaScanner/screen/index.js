import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Button } from "react-native";

export const PlacaScanner = () => {
    const navigation = useNavigation();

    const goToOdometroScanner = () => {
      navigation.navigate('Odometro Scanner');
    };
  
    return (
      <View>
        <Button
          title="Abrir Odometro Scanner"
          onPress={goToOdometroScanner}
        />
      </View>
    );
  };
