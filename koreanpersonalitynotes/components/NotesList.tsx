import { StyleSheet, TouchableOpacity, Text, Image, View } from 'react-native'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Props {
  personality: string
  notesStatus: string
  description: string
  create_at: string
}

const NotesList = ({
  create_at,
  notesStatus,
  personality,
  description,
}: Props) => {
  const isCompleted = notesStatus
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const SendData = () => {
    navigation.navigate('LearnMoreView', {
      personality,
      description,
      create_at,
    })
    // AsyncStorage.clear()
  }

  return (
    <TouchableOpacity
      style={
        isCompleted == 'true'
          ? styles.CompleteNoteListContainer
          : styles.NotCompleteNoteListContainer
      }
      onPress={SendData}
    >
      <View style={styles.NoteListBox}>
        <Text style={styles.Personality}>{personality}</Text>
        <Text style={styles.create_at}>{create_at}</Text>
      </View>
      <View style={styles.NoteBox}>
        <Text style={styles.NotesStatus}>
          {isCompleted == 'true' ? '작성완료' : '작성중...'}
        </Text>
        <Image
          style={styles.NoteImage}
          source={
            isCompleted == 'true'
              ? require('@/assets/images/completeImage.png')
              : require('@/assets/images/WritingImage.png')
          }
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  CompleteNoteListContainer: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#2D68FF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 9,
    marginTop: 16,
  },
  NotCompleteNoteListContainer: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#FF8B21',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 9,
    marginTop: 16,
  },
  NoteListBox: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  Personality: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  create_at: {
    fontSize: 12,
    color: '#fff',
  },
  NotesStatus: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  NoteBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  NoteImage: {
    width: 14,
    height: 14,
  },
})

export default NotesList
