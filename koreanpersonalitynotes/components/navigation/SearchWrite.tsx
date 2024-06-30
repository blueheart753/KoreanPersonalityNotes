import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import AllNotesButton from '../HomeButton'
import WriteNote from '../WriteNote'
import SaveButton from '../SaveButton'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SearchWrite = () => {
  const [personality, setPersonality] = useState<string>('')

  const handleSaveNote = (personality: string, description: string) => {
    setPersonality(personality)
  }

  return (
    <View style={styles.SearchKeywordNoteWrap}>
      <AllNotesButton />
      <View>
        <WriteNote
          personality={personality}
          isRandom={false}
          onSaveNote={handleSaveNote}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  SearchKeywordNoteWrap: {
    width: '100%',
    flex: 1,
    backgroundColor: '#050513',
    paddingHorizontal: 25,
    paddingVertical: 35,
  },
})

export default SearchWrite
