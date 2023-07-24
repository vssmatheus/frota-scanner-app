import React from 'react';
import { View, Text, Button } from 'react-native';

const Inicio = ({navigation }) => {
  return (
    <View>
      <Text>Boas Vindas</Text>
      <Button
        title="Ir para Scanner"
        onPress={() => navigation.navigate('Scanner')}
      />
    </View>
  );
};

export default Inicio;
