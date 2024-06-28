import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const SaveButton = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.saveContainer}>
      <TouchableOpacity style={styles.draftsButton}>
        <Text style={styles.draftsText}>임시저장</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton} onPress={handleHome}>
        <Text style={styles.saveText}>저장하기</Text>
      </TouchableOpacity>
    </View>
  );
};

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
});

export default SaveButton;
