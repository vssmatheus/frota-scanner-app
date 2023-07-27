// ImageInfoScreen.js (ou sua nova tela/modal)
import React from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ImageInfoModal = ({ visible, data, onClose }) => {
    return (
        <Modal visible={visible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <FlatList
                data={Object.values(data)} // Aqui, pegamos os valores do objeto data para exibir na lista
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                <View style={styles.listItem}>
                    <Text style={styles.listItemText}>{item.text}</Text>
                </View>
                )}
            />
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
            </View>
        </View>
        </Modal>
      );
    };
    
    const styles = StyleSheet.create({
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '90%',
        maxHeight: '80%',
      },
      listItem: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 8,
      },
      listItemText: {
        fontSize: 16,
      },
      closeButton: {
        marginTop: 16,
        padding: 12,
        backgroundColor: '#2196F3',
        borderRadius: 8,
        alignItems: 'center',
      },
      closeButtonText: {
        color: 'white',
        fontSize: 16,
      },
    });

export default ImageInfoModal;
