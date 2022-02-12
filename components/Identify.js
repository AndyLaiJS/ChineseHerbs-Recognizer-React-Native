import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';

const Identify = props => {
  return (
    <View style={styles.container}>
      <View style={styles.pad}>
        <Image source={{uri: props.fileUri}} style={styles.img} />
      </View>
      <Text style={styles.text}>YEET</Text>
      <Text style={styles.content}>
        REEEEEEEEREEEEEEEEREEEEEEEEREEEEEEEEREEEEEEEE
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
  },
  pad: {
    borderRadius: 1000 / 2,
    borderColor: 'rgba(255, 255, 255, 0.55)',
    borderWidth: 25,
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 1000 / 2,
  },
  text: {
    color: 'black',
    padding: 10,
    fontSize: 30,
  },
  content: {
    color: 'black',
    fontSize: 15,
    width: 325,
  },
});

export default Identify;
