import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';

const Identify = props => {
  const resetHandler = () => {
    props.onReset();
  };

  return (
    <View style={styles.container}>
      <View style={styles.pad}>
        <Image source={{uri: props.fileUri}} style={styles.img} />
      </View>
      <Text style={styles.label}>
        {props.content.label}/{props.content.cnlabel}
      </Text>
      <Text style={styles.content}>{props.content.data}</Text>
      <TouchableOpacity
        style={[styles.button, styles.blackShadow]}
        onPress={resetHandler}>
        <Text style={styles.text}>Identify Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: -100,
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
  label: {
    color: 'black',
    padding: 10,
    fontSize: 30,
  },
  content: {
    color: 'black',
    fontSize: 15,
    width: 325,
  },
  button: {
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#ffe4f3',
  },
  blackShadow: {
    shadowColor: 'rgb(255, 61, 169)',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },

  text: {
    color: '#FF4689',
    fontWeight: '500',
  },
});

export default Identify;
