import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import NotesList from '@/components/NotesList';

export default function HomeScreen() {
  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const today = `${year}.${month}.${day}`;

  const notesData = [
    { personality: '긍정적인', notesStatus: true, create_at: today },
    { personality: '긍정적인', notesStatus: false, create_at: today },
    { personality: '긍정적인', notesStatus: true, create_at: today },
    { personality: '긍정적인', notesStatus: true, create_at: today },
    { personality: '긍정적인', notesStatus: false, create_at: today },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <Header />
        <SearchBar />
        <ScrollView style={styles.notesContainer}>
          {notesData.map((note, index) => (
            <NotesList
              key={index}
              personality={note.personality}
              notesStatus={note.notesStatus}
              create_at={note.create_at}
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
