import { StyleSheet, View, TextInput, Text } from 'react-native'
import { useState } from 'react'

interface Props {
  personality: string
  isRandom: boolean
  onSaveNote: (personality: string, description: string) => void
}

const WriteNote = ({ personality, isRandom, onSaveNote }: Props) => {
  const [personalityName, setPersonalityName] = useState<string>(personality)
  const [descriptionInfo, setDescriptionInfo] = useState<string>('')
  const date = new Date()
  const year = date.getFullYear()
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)
  const today = `${year}.${month}.${day}`

  const handleSave = () => {
    onSaveNote(personality, descriptionInfo)
  }

  return (
    <View>
      <View style={styles.personalityContainer}>
        <View style={styles.personalityText}>
          {isRandom ? (
            <TextInput
              style={styles.personality}
              editable={false}
              value={personality}
            />
          ) : (
            <TextInput
              style={styles.personality}
              placeholder="키워드를 입력해주세요"
              placeholderTextColor={'#AAA'}
              autoFocus={true}
              value={personalityName}
              onChangeText={setPersonalityName}
            />
          )}
          <Text style={styles.today}>{today}</Text>
        </View>
        <View style={styles.personalityBorderBottom} />
      </View>
      <View>
        <View style={styles.WriteDescriptionContainer}>
          <TextInput
            style={styles.descriptionInput}
            placeholder="키워드에 맞게 자신의 이야기를 적어주세요!"
            placeholderTextColor={'#AAA'}
            textAlignVertical="top"
            onChangeText={description => {
              setDescriptionInfo(description)
            }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  personalityContainer: {
    marginTop: 20,
  },
  personalityText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  today: {
    color: '#aaa',
    fontSize: 12,
  },
  personality: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  personalityBorderBottom: {
    width: '32%',
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBlockColor: '#2D2D2D',
    paddingTop: 10,
  },
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
})

export default WriteNote
