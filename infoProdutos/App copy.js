import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native';
import React, { useState } from 'react';



export default function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Pesquisando por:', searchText);
  };

  return (
    <>
      <StatusBar style="auto" />
      
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.img} source={require('./assets/planta.png')} />
          <Image style={styles.imgSeta} source={require('./assets/seta.png')} />
          <TextInput
            style={styles.inputPesquisa}
            placeholder="Pesquisar..."
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
          />
          <Text style={styles.frete}>Enviar para SP, 08673-270...</Text>
          <Image style={styles.imgLocaliza} source={require('./assets/localiza.png')} />
          <Text style={styles.titulo}>UTENSÍLIOS</Text>

          {/* Exemplo de produto */}
          <View style={styles.produtoContainer}>
            <Image style={styles.imgProduto} source={require('./assets/copoDobravel.png')} />
            <Text style={styles.tituloProduto}>Copo Dobrável</Text>
            <Text style={styles.textoProduto}>R$12,00</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.compreAgora}>COMPRE AGORA</Text>
            </TouchableOpacity>
          </View>

          {/* Repita o bloco acima para outros produtos */}
          
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({ 
  inputPesquisa: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#6BBD4E',
    borderRadius: 5,
    padding: 7,
    marginTop: -75,
    marginLeft: 30,
    marginBottom: 25,
    width: '80%',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLocaliza: {
    marginTop: -27,
    marginLeft: -350,
  },
  imgSeta: {
    marginTop: -60,
    marginBottom: 40,
    marginLeft: -350,
  },
  frete: {
    backgroundColor: '#6BBD4E',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: 9,
    width: '100%',
    color: 'white',
  },
  img: {
    width: '100%',
  },
  titulo: {
    padding: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  produtoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imgProduto: {
    margin: 0,
    width: 330,
    height: 250,
    borderRadius: 17,
  },
  tituloProduto: {
    padding: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textoProduto: {
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    marginBottom: 40,
  },
  compreAgora: {
    paddingVertical: 5,
    paddingHorizontal: 30,
    textAlign: 'center',
    backgroundColor: '#6BBD4E',
    color: '#FFFFFF',
    borderRadius: 1.76,
  },
});
