// ProductsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProductsScreen({ route }) {
  const { productId } = route.params;

  // Lista de produtos com base no id para obter os detalhes do produto
  const products = {
    1: { name: 'Trinca Vidro', price: 'R$30,00', image: require('./assets/trincaVidro.png'), description: 'Este é o Trinca Vidro.' },
    2: { name: 'Sacola de Papel Kraft', price: 'R$6,00', image: require('./assets/sacolaKraft.png'), description: 'Esta é a Sacola de Papel Kraft.' },
    3: { name: 'EkoBag', price: 'R$35,00', image: require('./assets/ekobag.png'), description: 'Esta é a EkoBag.' },
    4: { name: 'Lixeira Seletiva Doméstica', price: 'R$40,00', image: require('./assets/lixeiraSeletiva.png'), description: 'Esta é a Lixeira Seletiva Doméstica.' },
    5: { name: 'Kit Filtro de Barro', price: 'R$95,00', image: require('./assets/filtroBarro.png'), description: 'Este é o Kit Filtro de Barro.' },
  };

  const product = products[productId];

  return (
    <View style={styles.container}>
      <Image style={styles.imgProduto} source={product.image} />
      <Text style={styles.tituloProduto}>{product.name}</Text>
      <Text style={styles.textoProduto}>{product.price}</Text>
      <Text style={styles.descricaoProduto}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imgProduto: {
    width: 330,
    height: 250,
    borderRadius: 17,
  },
  tituloProduto: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  textoProduto: {
    marginTop: 10,
    fontSize: 18,
  },
  descricaoProduto: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});
