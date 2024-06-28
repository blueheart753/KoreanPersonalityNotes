import { StyleSheet, View, Text } from 'react-native';
import AllNotesButton from '../AllNoteButton';
import WriteNote from '../WriteNote';
import { useEffect, useState } from 'react';
import RandomKoreanPersonality from '@/api/KoreanPersonalityAPI';

const RandomNote = () => {
  const [personality, setPersonality] = useState<string>('');

  useEffect(() => {
    const fatchData = async () => {
      const data = await RandomKoreanPersonality();
      if (data) {
        setPersonality(data);
      }
    };
    fatchData();
  }, []);
  return (
    <View style={styles.RandomKeywordNoteWrap}>
      <AllNotesButton />
      <View>
        <WriteNote personality={personality} isRandom={true} />
      </View>
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
