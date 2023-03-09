import React from "react";
import { View, Image, Text, TextInput, Button, StyleSheet } from "react-native";
import girl from './assets/girl.jpg';


const App = () => {
  return <View style={styles.container}>
    <Image source={girl} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.label}>Name</Text>
      <Text style={[styles.label, styles.name]}>Anet Mayo</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.label} >Email</Text>
      <Text style={[styles.label, styles.name]}>www.anet@gmail.com</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.label}>Gender</Text>
      <Text style={[styles.label, styles.name]}>Female</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "1.5rem",
    paddingVertical: "1rem",
    backgroundColor: "#16191d",
  },

  image: {
    width: 150,
    height: 150,
    marginBottom: '1rem',
    alignSelf: 'center',
    borderRadius: 75,
  },

  info: {
    flexDirection: 'row',

  },

  label: {
    borderWidth: 1.5,
    borderColor: '#6f7379',
    borderRadius: '.5rem',
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    fontSize: '1rem',
    flex: 2.5,
    marginVertical: '1rem',
    paddingHorizontal: '1rem',
    paddingVertical: '.5rem',
    color: '#fff',
    fontWeight: 500,
    fontSize: '1.2rem',
  },

  name: {
    flex: 7.5,
    paddingHorizontal: '1rem',
    paddingVertical: '.5rem',
    color: '#fff',
    fontWeight: 500,
    fontSize: '1.2rem',
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',

  }
})

export default App