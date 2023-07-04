import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, ButtonText, CardContainer, Container, Title } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const BoasVindas = () => {
  const navigation = useNavigation();

  const goToPlacaScanner = () => {
    navigation.navigate("Bomba Inicial");
  };

  return (
    <Container>
      <Title style={styles.title}>Scanner da Frota</Title>
      <CardContainer>
        <Text style={styles.text}>
          Este é um Scanner para identificar e controlar os veículos da empresa,
          isto será feito através da placa, odômetro e informacões da bomba.
        </Text>
        <Image
          style={styles.image}
          source={require("../../../../assets/illustrations.png")}
        />
        <Text style={styles.text}>
          Fotografe estes itens e clique em iniciar, para identificar o veículo.
        </Text>
      </CardContainer>
      <Button onPress={goToPlacaScanner}>
        <MaterialCommunityIcons
          name="camera-metering-center"
          size={32}
          color="#ffffff"
        />
        <ButtonText style={styles.button}>Iniciar Scanner</ButtonText>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    fontSize: 24,
  },
  image: {
    resizeMode: "contain",
    margin: 24,
    width: 240,
    alignItems: "center",
    justifyContent: "center",
  },
});
