import React, { Component, useState } from "react";
import { View, Text ,TextInput , Button, StyleSheet, Image   } from 'react-native';


export default function Pesquisa({navigation}: {navigation: any}){

    return(
        
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <Text style={{ color:'#02026b'}}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Título"
          // Adicione os handlers e estados necessários
        />
        <Text style={{ color:'#02026b'}}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Descrição"
          multiline={true}
          // Adicione os handlers e estados necessários
        />
      </View>
      <View style={styles.row}>
        <Button title="Excluir"  />
        <Button title="Editar" />
        <Text style={styles.centeredText}>Pesquisa 1</Text>
        
      </View>
      <View style={styles.row}>
        <Button title="Excluir"  />
        <Button title="Editar" />
        <Text style={styles.centeredText}>Pesquisa 1</Text>
        
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Nova questão"
          onPress={() => {
            // Adicione a lógica do botão 1
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Salvar"
          onPress={() => {
            // Adicione a lógica do botão 1
          }}
        />
        <Button
          title="Pubicar"
          onPress={() => {
            // Adicione a lógica do botão 2
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    paddingStart:10,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding:10,
  },
  centeredText: {
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop:10,
    marginBottom:10,
    height:40,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});


