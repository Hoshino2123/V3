import { TouchableOpacity, StyleSheet, Text, Button } from 'react-native'

import React from "react";
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: "column",
    backgroundColor: "cornflowerblue",
    padding: 10,
    paddingLeft: 110,
    paddingRight: 110,
    borderRadius: 60,
    
  },
  buttontext: {
    textAlign: "center",
    justifyContent: "center",
    shadowOpacity: 5,
    letterSpacing: 1,

    
  },
});

const Botao = ({ title, handlePress, containerStyles, isLoading }) => {
  return (
    <TouchableOpacity
      style={styles.button}

      onPress={handlePress}
      activeOpacity={1}
    >
      <Text className="whit font-bold text-5lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default Botao;