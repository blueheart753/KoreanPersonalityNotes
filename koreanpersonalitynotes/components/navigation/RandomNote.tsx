import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { useEffect, useState } from 'react'
import AllNotesButton from '../HomeButton'
import WriteNote from '../WriteNote'
import RandomKoreanPersonality from '@/api/KoreanPersonalityAPI'

const RandomNote = () => {
  const [randomPersonality, setRandomPersonality] = useState<string>('')

  useEffect(() => {
    const fatchData = async () => {
      const data = await RandomKoreanPersonality()
      if (data) {
        setRandomPersonality(data)
      }
    }
    fatchData()
  }, [])

  return (
    <View style={styles.RandomKeywordNoteWrap}>
      <AllNotesButton />
      <View>
        <WriteNote personality={randomPersonality} isRandom={true} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  RandomKeywordNoteWrap: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 40,
    backgroundColor: '#050513',
  },
})

export default RandomNote
