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

const HomeScreen = () => {
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
    };

    fetchData();
  });

  return (
    <View style={styles.container}>
      <View style={styles.homeView}>
        <Header />
        <SearchBar />
        <ScrollView style={styles.notesContainer}>
          {items.map((item, index) => (
            <NotesList
              key={index}
              personality={item.personality}
              createAt={item.createAt}
              notesStatus={item.saveOrDrafts}
              description={item.description}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    backgroundColor: '#050513',
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 45,
  },
  homeView: {
    width: '100%',
  },
  notesContainer: {
    width: '100%',
    marginTop: 10,
  },
});
export default HomeScreen;
