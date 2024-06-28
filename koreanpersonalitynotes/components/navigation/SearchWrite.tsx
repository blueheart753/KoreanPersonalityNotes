import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AllNotesButton from '../AllNoteButton';
import WriteNote from '../WriteNote';

const SearchWrite = () => {
  const [personality, setPersonality] = useState<string>('');

  return (
    <View style={styles.SearchKeywordNoteWrap}>
      <AllNotesButton />
      <View>
        <WriteNote personality={''} isRandom={false} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchKeywordNoteWrap: {
    width: '100%',
    flex: 1,
    backgroundColor: '#050513',
    paddingHorizontal: 25,
    paddingVertical: 35,
  },
});

export default SearchWrite;
