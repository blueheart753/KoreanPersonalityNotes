import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Props {
  descriptionInfo: string
  personalityInfo: string
  createAtInfo: string
}

const SaveButton = ({
  descriptionInfo,
  personalityInfo,
  createAtInfo,
}: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const [personality, setPersonality] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [createAt, setCreateAt] = useState<string>('')
  const [saveOrDrafts, setSaveOrDrafts] = useState<string>('')

  const IsSaveOrDrafts = (isSaveOrDrafts: boolean) => {
    setSaveOrDrafts(isSaveOrDrafts ? 'true' : 'false')
  }

  const SaveStorage = async (
    personality: string,
    description: string,
    createAt: string,
    saveOrDrafts: string
  ) => {
    try {
      await AsyncStorage.setItem('personality', personality)
      console.log('성격유형 저장완료')
      await AsyncStorage.setItem('description', description)
      console.log('내용 저장완료')
      await AsyncStorage.setItem('createAt', createAt)
      console.log('날짜 저장완료')
      await AsyncStorage.setItem('saveOrDrafts', saveOrDrafts)
      console.log('저장여부 저장완료')
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error)
    }
  }

  const handleSave = async (
    descriptionInfo: string,
    personalityInfo: string,
    createAtInfo: string
  ) => {
    console.log(`${personality} ${description} ${createAt} ${saveOrDrafts}`)
    setPersonality(personalityInfo)
    setDescription(descriptionInfo)
    setCreateAt(createAtInfo)
    SaveStorage(personality, description, createAt, saveOrDrafts)
    // navigation.navigate('Home')
  }

  return (
    <View style={styles.saveContainer}>
      <TouchableOpacity
        style={styles.draftsButton}
        onPress={() => {
          IsSaveOrDrafts(false)
          handleSave(descriptionInfo, personalityInfo, createAtInfo)
        }}
      >
        <Text style={styles.draftsText}>임시저장</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => {
          IsSaveOrDrafts(true)
          handleSave(descriptionInfo, personalityInfo, createAtInfo)
        }}
      >
        <Text style={styles.saveText}>저장하기</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  saveContainer: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  draftsButton: {
    backgroundColor: '#7A7A7A',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 6,
  },
  saveButton: {
    backgroundColor: '#47D644',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 6,
  },
  draftsText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  saveText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default SaveButton
