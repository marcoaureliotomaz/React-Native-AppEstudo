import React, { Component, useState  } from "react";
import { View, Text ,Modal,  TextInput, Button, StyleSheet, Image , TouchableOpacity  } from 'react-native';


import { useNavigation } from "@react-navigation/native";


export default function Admin({navigation}: {navigation: any}){
 
      const [modalVisible, setModalVisible] = useState(false);
      const [mensagem, setModalMessage] = useState("");
    
      const handleModalClose = () => {
        setModalVisible(false);
      };

      const handleModalOpenDelete = () => {
        setModalVisible(true);
        setModalMessage("EXCLUIR");
      };

      const handleModalOpenClose = () => {
        setModalVisible(true);
        setModalMessage("ENCERRAR");
      };


      const handleModalOpenReopen = () => {
        setModalVisible(true);
        setModalMessage("REABRIR");
      };

      const handleCreate = () => {
        
        navigation.navigate("Pesquisa") ;
      };

      const handleEdit = () => {

        navigation.navigate("Pesquisa") ;
      };
    

    return(


      

      <View style={styles.container}>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.questionText}>Deseja realmente {mensagem} a pesquisa?</Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity onPress={handleModalClose} style={styles.modalButton}>
                <Text style={styles.buttonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleModalClose} style={styles.modalButton}>
                <Text style={styles.buttonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.loginContainer}>
        <Button title="Nova Pesquisa" onPress={() => handleCreate()}/>
      </View>

      <View style={styles.row}>
        <Button title="Excluir" onPress={() => handleModalOpenDelete()} />
        <Button title="Editar" onPress={() => handleEdit()}/>
        <Text style={styles.centeredText}>Pesquisa 1</Text>
        <Button title="Encerrar"onPress={() => handleModalOpenClose()} />
      </View>

      <View style={styles.row}>
      <Button title="Excluir" onPress={() => handleModalOpenDelete()} />
      <Button title="Editar" onPress={() => handleEdit()}/>
        <Text style={styles.centeredText}>Pesquisa 2</Text>
        <Button title="Encerrar"onPress={() => handleModalOpenClose()} />
      </View>

      <View style={styles.row}>
      <Button title="Excluir" onPress={() => handleModalOpenDelete()} />
      <Button title="Editar" onPress={() => handleEdit()}/>
        <Text style={styles.centeredText}>Pesquisa 3</Text>
        <Button title="Encerrar"onPress={() => handleModalOpenClose()} />
      </View>
    

      <View style={styles.row2}>
      <Button title="Excluir" />
        <Button title="Editar"  />
        <Text style={styles.centeredText}>Pesquisa 3</Text>
        <Button title="Reabrir" onPress={() => handleModalOpenReopen()} />
      </View>
      
      
    </View>


    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    row: {
      flexDirection: 'row',
      marginTop:10,
      marginBottom:10,
      height:40,
    },
    row2: {
      flexDirection: 'row',
      marginTop:70,
      marginBottom:10,
      height:40,
    },
    button: {
      backgroundColor: '#007AFF',
      padding: 10,
      marginHorizontal: 5,
      borderRadius: 5,
      marginRight:10,
      width:60,
    },
    centeredText: {
      textAlign: 'center',
      marginVertical: 5,
      fontSize: 20,
    },
    centerButton: {
      backgroundColor: '#007AFF',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
    },
    loginContainer: {
      position: 'absolute',
      top: 20,
      right: 20,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      width: '80%',
    },
    questionText: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    modalButton: {
      backgroundColor: '#007AFF',
      padding: 10,
      borderRadius: 5,
      minWidth: 100,
    },
  
  });
  
