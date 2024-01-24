import React, { useState } from 'react';
import {Text, TouchableOpacity, ImageBackground, SafeAreaView, Image, StyleSheet } from 'react-native';
import {WebView} from 'react-native-webview';
import { Dimensions } from 'react-native';

const App = () => {
  const [showWebView, setShowWebView] = useState(false);
  const windowWidth = Dimensions.get('window').width;

  const handleShowWebView = () => {
    setShowWebView(true);
  }
  const handleCloseWebView = () => {
    setShowWebView(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      {showWebView ? (
        <WebView
          source={{ uri: 'https://wscredcredmais.facilinformatica.com.br/facweb/' }}
          style={{ marginTop: 20 }}
          onNavigationStateChange={navState =>
            navState.url !== 'https://wscredcredmais.facilinformatica.com.br/facweb/' && handleShowWebView()
          }
        />
      ) : (
        <ImageBackground
          source={require('./assets/bgapp.png')}
          style={styles.image}
        >
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.text}>Seja bem-vindo (a)</Text>
          <TouchableOpacity
            onPress={handleShowWebView}
            style={styles.button}
            width={windowWidth - 50}
          >
            <Text style={styles.btnText}>Acesse sua conta</Text>
          </TouchableOpacity>
        </ImageBackground>
      )}
    </SafeAreaView>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: 30,
  },
  btnText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#07264F',
    fontSize: 25,
    borderRadius: 10,
    padding: 10,
    width: 300,
    textAlign: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.25,
    elevation: 5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  buttonHover: {
    backgroundColor: '#07264F',
    borderRadius: 10,
    padding: 10,
    width: 300,
    textAlign: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.25,
    elevation: 5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  text: {
    fontSize: 25,
    color: 'white',
    marginBottom: 30,
  },
});

export default App;
