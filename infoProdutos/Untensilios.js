import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';




export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Image style={styles.img}
          source={require('./assets/planta.png')} />

        <Image style={styles.imgSeta}
          source={require('./assets/seta.png')} />

        <Text style={styles.frete}>Enviar para SP, 08673-270...</Text>

        <Image style={styles.imgLocaliza}
          source={require('./assets/localiza.png')} />

        <Text style={styles.titulo}>UTENSÍLIOS</Text>


        <Image style={styles.imgProduto}
          source={require('./assets/copoDobravel.png')} />
        <Text style={styles.tituloProduto}>Copo Dobravél</Text>
        <Text style={styles.textoProduto}>R$12,00</Text>
        <TouchableOpacity >
          <Text style={styles.compreAgora}>COMPRE AGORA</Text>
        </TouchableOpacity>
        

        <Image style={styles.imgProduto}
          source={require('./assets/canudoMetal.png')} />
        <Text style={styles.tituloProduto}>kit Canudo Metal</Text>
        <Text style={styles.textoProduto}>R$22,00</Text>
        <TouchableOpacity>
          <Text style={styles.compreAgora}>COMPRE AGORA</Text>
        </TouchableOpacity>


        <Image style={styles.imgProduto}
          source={require('./assets/hashiInox.png')} />
        <Text style={styles.tituloProduto}>Hashi Inox</Text>
        <Text style={styles.textoProduto}>R$15,00</Text>
        <TouchableOpacity>
          <Text style={styles.compreAgora}>COMPRE AGORA</Text>
        </TouchableOpacity>


        <Image style={styles.imgProduto}
          source={require('./assets/garrafaInox.png')} />
        <Text style={styles.tituloProduto}>Garrafa Inox</Text>
        <Text style={styles.textoProduto}>R$35,00</Text>
        <TouchableOpacity>
          <Text style={styles.compreAgora}>COMPRE AGORA</Text>
        </TouchableOpacity>

        

        <StatusBar style="auto" />
      </View>
    </ScrollView>


  );
}

const styles = StyleSheet.create({
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
  frete: {
    backgroundColor: '#6BBD4E',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: 9,
    width: '100%',
    color: 'white',
  },
  imgSeta: {
    marginTop: -60,
    marginBottom: 40,
    marginLeft: -350,
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
  compreAgora: {
    paddingVertical: 5,
    paddingHorizontal: 30,
    textAlign: 'center',
    backgroundColor: '#6BBD4E',
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 40,
    borderRadius: 1.76,
  },
});
