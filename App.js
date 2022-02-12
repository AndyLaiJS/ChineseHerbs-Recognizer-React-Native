import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';
import FileButton from './components/FileButton';
import Identify from './components/Identify';

const App = () => {
  const [fileUri, setFileUri] = useState(null);

  const fileHandler = stuff => {
    setFileUri(stuff);
  };
  return (
    <View style={styles.container}>
      <Header />
      {fileUri ? (
        <Identify fileUri={fileUri} />
      ) : (
        <FileButton onFile={fileHandler} />
      )}
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
});

export default App;
