import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';

type ViewIngredientsButtonProps = {
  onPress: () => void;
};

export default function ViewIngredientsButton ({onPress}: ViewIngredientsButtonProps) {
    return (
      <TouchableHighlight className="h-26 w-48 text-center rounded-full opacity-50 py-2" underlayColor='rgba(73,182,77,0.9)' onPress={onPress}>
        <View className='h-full w-full rounded-full border border-green-500 py-2'>
          <Text className='text-center text-green-500'>View Ingredients</Text>
        </View>
      </TouchableHighlight>
    );
}