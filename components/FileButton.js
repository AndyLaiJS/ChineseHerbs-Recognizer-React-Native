import React, {useState} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {TouchableOpacity} from 'react-native';

const FileButton = () => {
  const [filePath, setFilePath] = useState(null);
  const [fileData, setFileData] = useState(null);
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
        console.log(source);
        // console.log('response', JSON.stringify(response));
        console.log(response.assets[0].uri);
        setFilePath(response.assets[0]);
        setFileData(response.assets[0].data);
        setFileUri(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={lCamera}>
        {fileUri ? (
          <Image source={{uri: fileUri}} style={styles.logo} />
        ) : (
          <Image source={require('../MHW2102.png')} style={styles.logo} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 1000 / 2,
  },
  text: {
    color: 'black',
  },
});

export default FileButton;
