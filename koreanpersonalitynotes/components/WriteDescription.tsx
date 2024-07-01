import { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

interface Props {
  handleDescription: (description: string) => void;
}

const WriteDescription = ({ handleDescription }: Props) => {
  const [description, setDescription] = useState<string>('');

  const handleInputChange = (text: string) => {
    setDescription(text);
    handleDescription(text);
  };

  return (
    <View style={styles.WriteDescriptionContainer}>
      <TextInput
        style={styles.descriptionInput}
        placeholder="키워드에 맞게 자신의 이야기를 적어주세요!"
        placeholderTextColor={'#AAA'}
        textAlignVertical="top"
        multiline={true}
        onChangeText={handleInputChange}
        returnKeyType="done"
        blurOnSubmit={true}
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
    height: '100%',
    color: '#fff',
  },
});

export default WriteDescription;
