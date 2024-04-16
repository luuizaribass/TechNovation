import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.imgProduto} source={product.image} />
      <Text style={styles.tituloProduto}>{product.name}</Text>
      <Text style={styles.textoProduto}>{product.price}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.compreAgora}>COMPRE AGORA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgProduto: {
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

export default ProductDetailsScreen;
