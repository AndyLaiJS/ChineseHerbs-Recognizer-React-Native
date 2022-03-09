import React, {useState, useEffect} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {TouchableOpacity} from 'react-native';

const FileButton = props => {
  const [fileUri, setFileUri] = useState(null);

  const lCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        // console.log(source);
        // console.log('response', JSON.stringify(response));
        // console.log(response.assets[0].uri);
        setFileUri(response.assets[0].uri);
      }
    });
  };

  useEffect(() => {
    // Slap it back to App.js only if fileUri is not empty
    if (fileUri) {
      props.onFile(fileUri);
    }
  }, [fileUri]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={lCamera} style={styles.pad}>
        <Image source={require('../MHW2102-H.png')} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -150,
  },
  pad: {
    borderRadius: 1000 / 2,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    borderWidth: 25,
    padding: 50,
  },
  logo: {
    width: 200,
    height: 200,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 1000 / 2,
  },
  text: {
    color: 'black',
  },
});

export default FileButton;
