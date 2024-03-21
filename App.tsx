import React, { Component } from "react";
import { View, Text , Button, StyleSheet, Image   } from 'react-native';


class App extends Component{

  chamaLogin(){

}


  render(): React.ReactNode {
    return(
      <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Button title="Login" onPress={this.chamaLogin} />
      </View>
      <View style={styles.centeredContainer}>
        <Text style={{fontSize:40, color:'#02026b'}}>PesqApp</Text>
        <LogoImage></LogoImage>
      </View>
      <View style={styles.centeredContainer}>
        <Button color="#0000FF" title="Pesquisa de opnião  1" onPress={() => console.log('Botão 1 pressionado')} />
        <View style={styles.space} />
        <Button color="#2855db" title="Pesquisa de opnião  2" onPress={() => console.log('Botão 2 pressionado')} />
        <View style={styles.space} />
        <Button color="#517de6" title="Pesquisa de opnião  3" onPress={() => console.log('Botão 3 pressionado')} />
      
      </View>
    </View>
    );
  }
}

export default App;

class LogoImage extends Component{
  render(): React.ReactNode {

    let logo = 'https://www.questionpro.com/blog/wp-content/uploads/2018/08/qp-market-research-e1598542900924-450x276.png';
    return(
      <Image source={{uri:logo}}
        style={{width:300, height:300, top:1}}></Image>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  space: {
    height: 20, // Altere essa altura conforme necessário para o espaço vertical desejado
  },
});

