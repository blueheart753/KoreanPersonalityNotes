import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import NotesList from '@/components/NotesList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

interface Item {
  personality: string;
  description: string;
  createAt: string;
  saveOrDrafts: string;
}

export default function HomeScreen() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const result = await AsyncStorage.multiGet(keys);
        const parsedItems = result
          .map(([key, value]) => {
            if (value) {
              return JSON.parse(value) as Item;
            }
            return null;
          })
          .filter(item => item !== null) as Item[];
        setItems(parsedItems);
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
      // AsyncStorage.clear();
    };

    fetchData();
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <Header />
        <SearchBar />
        <ScrollView style={styles.notesContainer}>
          {items.map((item, index) => (
            <NotesList
              key={index}
              personality={item.personality}
              create_at={item.createAt}
              notesStatus={item.saveOrDrafts}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
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
});
