import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as S from "./Scanner.styles";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import ImageInfoModal from "../ImageInfoModal";

const Scanner = () => {
  const [plateImage, setPlateImage] = useState(null);
  const [odometerImage, setOdometerImage] = useState(null);
  const [fuelPumpImage, setFuelPumpImage] = useState(null);
  const [fuelPumpImage2, setFuelPumpImage2] = useState(null);
  const [selectedImageInfo, setSelectedImageInfo] = useState(null);
  const [currentButtonIndex, setCurrentButtonIndex] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);

  const openImageInfo = (imageInfo) => {
    setSelectedImageInfo(imageInfo);
    resetState();
  };

  const areAllImagesSelected = () => {
    return (
      selectedImages.length === 4 &&
      selectedImages.every((img) => img.image !== null)
    );
  };

  const resetState = () => {
    setSelectedImages([]);
    setCurrentButtonIndex(0);
  };

  const images = [
    {
      name: "plateImage",
      text: "Tirar foto da placa",
      func: setPlateImage,
    },
    {
      name: "odometerImage",
      text: "Tirar foto do odômetro",
      func: setOdometerImage,
    },
    {
      name: "fuelPumpImage",
      text: "Tirar foto da Bomba de Combustível",
      func: setFuelPumpImage,
    },
    {
      name: "fuelPumpImage2",
      text: "Tirar outra foto da Bomba de Combustível",
      func: setFuelPumpImage2,
    },
  ];

  const openCamera = async (fieldName, setImage, index) => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Permissão de câmera necessária para tirar fotos!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const newImage = {
        name: fieldName,
        image: result.assets[0],
      };
      setImage(result.assets[0]);
      setCurrentButtonIndex((prevIndex) => prevIndex + 1);
      setSelectedImages((prevImages) => [...prevImages, newImage]);
    }
  };

  const uploadImages = async () => {
    const formData = new FormData();
    formData.append("plateImage", {
      uri: plateImage.uri,
      type: "image/jpg",
      name: "plateImage.jpg",
    });
    formData.append("odometerImage", {
      uri: odometerImage.uri,
      type: "image/jpg",
      name: "odometerImage.jpg",
    });
    formData.append("fuelPumpImage", {
      uri: fuelPumpImage.uri,
      type: "image/jpg",
      name: "fuelPumpImage.jpg",
    });
    formData.append("fuelPumpImage2", {
      uri: fuelPumpImage2.uri,
      type: "image/jpg",
      name: "fuelPumpImage2.jpg",
    });

    try {
      const response = await axios.post(
        "https://191d-138-36-29-130.ngrok.io/analyze-photos",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      openImageInfo(response.data);
    } catch (error) {
      console.error("Erro ao enviar as imagens:", error);
    }
  };

  return (
    <S.Container>
      {!selectedImages.length && (
        <View elevation={5} style={styles.inicialMessageContainer}>
          <Text style={styles.inicialMessage}>
            Siga os protocolos de analise exigidos pela empresa para que seja
            feita a analise veicular.
          </Text>
          <Text style={styles.inicialMessage}>
            Para iniciar, Fotografe os itens solicitados!
          </Text>
        </View>
      )}

      <S.ImagesContainer>
        {selectedImages.map((img, index) => (
          <View key={index}>
            <S.ImageTaked source={{ uri: img.image.uri }} />
          </View>
        ))}
      </S.ImagesContainer>

      {selectedImageInfo && (
        <ImageInfoModal
          visible={true}
          data={selectedImageInfo}
          onClose={() => setSelectedImageInfo(null)}
        />
      )}
      <S.FooterContainer>
        {images[currentButtonIndex] ? (
          <S.TakePhotobutton
            onPress={() =>
              openCamera(
                images[currentButtonIndex].name,
                images[currentButtonIndex]?.func
              )
            }
            disabled={images[currentButtonIndex].func === null}>
            <Text style={styles.textButton}>
              {images[currentButtonIndex].text}
            </Text>
          </S.TakePhotobutton>
        ) : (
          <Text style={styles.text}>
            Imagens Capturadas com suceso, agora basta clicar no botão abaixo
            para que possamos analizar o veículo da frota!
          </Text>
        )}

        {areAllImagesSelected() && (
          <S.SendButton onPress={() => uploadImages()}>
            <Text style={styles.textButton}>Enviar Imagens</Text>
          </S.SendButton>
        )}

        {selectedImages.length > 0 && (
          <TouchableOpacity onPress={resetState}>
            <Text style={styles.reset}>Reiniciar</Text>
          </TouchableOpacity>
        )}
      </S.FooterContainer>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#4b4b4b",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  inicialMessageContainer: {
    flex: 3,
    justifyContent: "flex-end",
  },
  inicialMessage: {
    color: "#30568f",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",

    backgroundColor: "#ffffff",
    shadowColor: "#6e6e6e",
    borderRadius: 8,
    padding: 24,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  textButton: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  reset: {
    color: "#eb7474",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 70,
  },
});

export default Scanner;
