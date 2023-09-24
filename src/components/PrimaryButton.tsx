import React from 'react';
import { TouchableHighlight, Image, Text, View, StyleSheet } from 'react-native';

type ViewIngredientsButtonProps = {
  onPress: () => void;
};

export default function ViewIngredientsButton ({onPress}: ViewIngredientsButtonProps) {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>View Ingredients</Text>
        </View>
      </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    width: 270,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100,
    borderColor: '#2cd18a',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: '#2cd18a'
  },
  text: {
    fontSize: 14,
    color: '#2cd18a'
  }
});