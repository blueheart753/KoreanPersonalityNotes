import { StyleSheet, View, Text } from 'react-native';
import AllNotesButton from '../AllNoteButton';

const RandomNote = () => {
  return (
    <View style={styles.RandomKeywordNoteWrap}>
      <AllNotesButton />
    </View>
  );
};

const styles = StyleSheet.create({
  RandomKeywordNoteWrap: {
    width: '100%',
    flex: 1,
    backgroundColor: '#050513',
    paddingHorizontal: 25,
    paddingVertical: 35,
  },
});

export default RandomNote;