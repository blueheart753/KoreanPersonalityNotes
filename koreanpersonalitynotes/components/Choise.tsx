import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

interface Props {
  keywordTitle: string;
  keywordDescrtion1: string;
  keywordDescrtion2: string;
  isRandom: boolean;
}

const Choise = ({
  keywordTitle,
  keywordDescrtion1,
  keywordDescrtion2,
  isRandom,
}: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const handleRandomNote = () => {
    navigation.navigate('RandomNote');
  };
  const handleSearchNote = () => {
    navigation.navigate('Home');
  };
  return (
    <TouchableOpacity
      style={isRandom ? styles.RandomKeywordWrap : styles.SearchKeywordWrap}
      onPress={isRandom ? handleRandomNote : handleSearchNote}
    >
      <Text style={styles.RandomKeywordTitle}>{keywordTitle}</Text>
      <View>
        <Text style={styles.Description}>• {keywordDescrtion1}</Text>
        <Text style={styles.Description}>• {keywordDescrtion2}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  RandomKeywordTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  Description: {
    color: '#fff',
    fontSize: 13,
  },
  RandomKeywordWrap: {
    width: '100%',
    height: 110,
    backgroundColor: '#FF8B21',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 9,
    display: 'flex',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  SearchKeywordWrap: {
    width: '100%',
    height: 110,
    backgroundColor: '#2D68FF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 9,
    display: 'flex',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});

export default Choise;
