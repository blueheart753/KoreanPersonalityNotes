import 'react-native-get-random-values';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  descriptionInfo: string;
  personalityInfo: string;
  createAtInfo: string;
}

const SaveButton = ({
  descriptionInfo,
  personalityInfo,
  createAtInfo,
}: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const saveStorage = async (
    personality: string,
    description: string,
    createAt: string,
    saveOrDrafts: string,
  ) => {
    try {
      const id = uuidv4();
      const data = {
        personality,
        description,
        createAt,
        saveOrDrafts,
      };
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(id, jsonValue);
      console.log('데이터 저장완료');
    } catch (error) {
      console.error('AsyncStorage에 데이터 저장 중 오류 발생:', error);
    }
  };

  const handleSave = async (
    descriptionInfo: string,
    personalityInfo: string,
    createAtInfo: string,
    saveOrDrafts: string,
  ) => {
    console.log(
      `${personalityInfo} ${descriptionInfo} ${createAtInfo} ${saveOrDrafts}`,
    );
    await saveStorage(
      personalityInfo,
      descriptionInfo,
      createAtInfo,
      saveOrDrafts,
    );
    // navigation.navigate('Home')
  };

  return (
    <View style={styles.saveContainer}>
      <TouchableOpacity
        style={styles.draftsButton}
        onPress={() => {
          handleSave(descriptionInfo, personalityInfo, createAtInfo, 'false');
        }}
      >
        <Text style={styles.draftsText}>임시저장</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => {
          handleSave(descriptionInfo, personalityInfo, createAtInfo, 'true');
        }}
      >
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
