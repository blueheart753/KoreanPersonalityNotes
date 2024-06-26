import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import Notes from '@/components/Notes';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const today = `${year}.${month}.${day}`;

  const handleAddNote = () => {
    navigation.navigate('SelectMethod');
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <Header />
        <SearchBar />
        <View style={styles.notesContainer}>
          <Notes
            personality={'긍정적인'}
            notesStatus={true}
            create_at={today}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddNote}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBox: {
    width: '100%',
    height: '90%',
    display: 'flex',
  },
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    backgroundColor: '#050513',
    padding: 25,
  },
  notesContainer: {
    width: '100%',
    marginTop: 50,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#141467', // 버튼 배경 색상
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 24 },
});
