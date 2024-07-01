import { StyleSheet, TouchableOpacity, Text, Image, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'

interface Props {
  personality: string
  notesStatus: boolean // 'true' for completed, 'false' for in-progress
  create_at: string
}

const NotesList = ({ create_at, notesStatus, personality }: Props) => {
  const isCompleted = notesStatus

  return (
    <TouchableOpacity
      style={
        isCompleted
          ? styles.CompleteNoteListContainer
          : styles.NotCompleteNoteListContainer
      }
    >
      <View style={styles.NoteListBox}>
        <Text style={styles.Personality}>{personality}</Text>
        <Text style={styles.create_at}>{create_at}</Text>
      </View>
      <View style={styles.NoteBox}>
        <Text style={styles.NotesStatus}>
          {isCompleted ? '작성완료' : '작성중...'}
        </Text>
        <Image
          style={styles.NoteImage}
          source={
            isCompleted
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
    width: 24,
    height: 24,
  },
})

export default NotesList
