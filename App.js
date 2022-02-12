import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';
import FileButton from './components/FileButton';
import Identify from './components/Identify';
import axios from 'axios';

const App = () => {
  const [fileUri, setFileUri] = useState(null);
  const [content, setContent] = useState(null);

  const fileHandler = stuff => {
    console.log(stuff);
    const body = new FormData();
    body.append('file', {
      uri: stuff,
      type: 'image/jpeg',
      name: 'lmao.jpeg',
    });

    // axios
    //   .post('http://127.0.0.1:5000/upload', body)
    //   .then(function (response, data) {
    //     data = response.data;
    //     console.log(data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    fetch('http://127.0.0.1:5000/upload', {
      method: 'POST',
      body,
    })
      .then(response => {
        response.json().then(data => {
          setContent(data);
          setFileUri(stuff);
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const resetHandler = () => {
    setFileUri(null);
  };

  return (
    <View style={styles.container}>
      <Header />
      {fileUri && content ? (
        <Identify fileUri={fileUri} content={content} onReset={resetHandler} />
      ) : (
        <FileButton onFile={fileHandler} />
      )}
      <View style={styles.footer}>
        <Text style={[styles.text, styles.bold]}>A MHW2102 FYP Project</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    flex: 1,
  },
  text: {
    color: 'black',
  },
  bold: {
    fontWeight: '200',
  },
  footer: {
    padding: 15,
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default App;
