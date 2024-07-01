import { View, StyleSheet, ScrollView } from 'react-native'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import NotesList from '@/components/NotesList'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'

export default function HomeScreen() {
  const [item, setItem] = useState<string>('')

  const getItem = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      const result = await AsyncStorage.multiGet(keys)
      result.forEach(([key, value]) => {
        if (value) {
          setItem(JSON.parse(value))
        }
      })
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error)
    }
    // AsyncStorage.clear();
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <Header />
        <SearchBar />
        <ScrollView style={styles.notesContainer}>{item[0][1]}</ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerBox: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    backgroundColor: '#050513',
    padding: 25,
  },
  notesContainer: {
    width: '100%',
    marginTop: 10,
  },
})
