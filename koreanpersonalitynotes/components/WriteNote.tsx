import { StyleSheet, View, TextInput } from 'react-native';
import WriteDescription from './WriteDescription';
import SaveButton from './SaveButton';

interface Props {
  personality: string;
  isRandom: boolean;
}

const WriteNote = ({ personality, isRandom }: Props) => {
  return (
    <View>
      <View style={styles.personalityContainer}>
        {isRandom ? (
          <TextInput style={styles.personality} readOnly>
            {personality}
          </TextInput>
        ) : (
          <TextInput
            style={styles.personality}
            placeholder="키워드를 입력해주세요"
            placeholderTextColor={'#fff'}
          >
            {personality}
          </TextInput>
        )}
        <View style={styles.personalityBorderBottom} />
      </View>
      <View>
        <WriteDescription />
      </View>
      <View>
        <SaveButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  personalityContainer: {
    marginTop: 20,
  },
  personality: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  personalityBorderBottom: {
    width: 60,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBlockColor: '#2D2D2D',
    paddingTop: 10,
  },
});

export default WriteNote;
