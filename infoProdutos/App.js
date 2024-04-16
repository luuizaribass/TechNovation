import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList, TextInput, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Página de Produtos
function ProductsScreen({ route }) {
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

// Página Inicial
function AppScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [products] = useState([
    { id: 1, name: 'Trinca Vidro', price: 'R$30,00', image: require('./assets/trincaVidro.png') },
    { id: 2, name: 'Sacola de Papel Kraft', price: 'R$6,00', image: require('./assets/sacolaKraft.png') },
    { id: 3, name: 'EkoBag', price: 'R$35,00', image: require('./assets/ekobag.png') },
    { id: 4, name: 'Lixeira Seletiva Doméstica', price: 'R$40,00', image: require('./assets/lixeiraSeletiva.png') },
    { id: 5, name: 'Kit Filtro de Barro', price: 'R$95,00', image: require('./assets/filtroBarro.png') },
  ]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = () => {
    console.log('Pesquisando por:', searchText);
  };

  const navigateToProducts = (productId) => {
    navigation.navigate('Products', { productId });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./assets/planta.png')} />
      <TouchableOpacity style={styles.imgSeta}>
          <Image source={require('./assets/seta.png')} />
          </TouchableOpacity>
      
      <View style={styles.header}>
        <View style={styles.Pesquisa}>
          <Image style={styles.imgLupa} source={require('./assets/lupa.png')} />
          <TextInput
            style={styles.inputPesquisa}
            placeholder="Pesquise seu item..."
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
          />
        </View>
        <Text style={styles.frete}>Enviar para SP, 08673-270...</Text>
        <Image style={styles.imgLocaliza} source={require('./assets/localiza.png')} />
        <Text style={styles.titulo}>ECOLOGICAMENTE FALANDO</Text>
      </View>
  
      <View style={styles.listContainer}>
        {filteredProducts.length === 0 ? (
          <Text style={styles.nenhumItem}>Nenhum item encontrado</Text>
        ) : (
          <FlatList
            data={filteredProducts}
            renderItem={({ item }) => (
              <View style={styles.produtoContainer}>
                <Image style={styles.imgProduto} source={item.image} />
                <Text style={styles.tituloProduto}>{item.name}</Text>
                <Text style={styles.textoProduto}>{item.price}</Text>
                <TouchableOpacity 
                  style={styles.button} 
                  onPress={() => navigateToProducts(item.id)}
                >
                  <Text style={styles.compreAgora}>COMPRE AGORA</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ marginTop: 10 }}
          />
        )}
      </View>
    </View>
  );
  
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={AppScreen} />
        <Stack.Screen 
          name="Products" 
          component={ProductsScreen} 
          options={({ route }) => ({ title: `Produto ${route.params.productId}` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  Pesquisa: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#6BBD4E',
    borderRadius: 10,
    padding: 7.5,
    marginTop: -75,
    marginLeft: 30,
    marginBottom: 25,
    width: '80%',
  },
  inputPesquisa: {
    width: 250,
    marginLeft: 10,
  },
  nenhumItem: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6BBD4E',
    alignItems: 'center',
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
    padding: 10,
    // width: '100%',
    width:450,
    color: 'white',
  },
  img: {
    width: '100%',
  },
  titulo: {
    paddingVertical: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 2,
    borderBottomColor: 'red',
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
  header: {
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
});
