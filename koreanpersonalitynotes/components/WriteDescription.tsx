import { StyleSheet, View, TextInput } from 'react-native';
import { useState } from 'react';

const WriteDescription = () => {
  return (
    <View style={styles.WriteDescriptionContainer}>
      <TextInput
        style={styles.descriptionInput}
        placeholder="키워드에 맞게 자신의 이야기를 적어주세요!"
        placeholderTextColor={'White'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  WriteDescriptionContainer: {
    marginTop: 20,
    height: 550,
    borderBottomWidth: 1,
    borderBlockColor: '#2D2D2D',
  },
  descriptionInput: {
    color: '#fff',
  },
});

export default WriteDescription;
