import { StyleSheet, View, Text } from 'react-native';
import AllNotesButton from '../HomeButton';
import Choise from '../Choise';
const SelectMethod = () => {
  return (
    <View style={styles.SelectMethodContainer}>
      <AllNotesButton />
      <View>
        <Text style={styles.SelectText}>선택해주세요</Text>
      </View>
      <View>
        <Choise
          keywordTitle="랜덤으로 키워드 받기"
          keywordDescrtion1="랜덤으로 키워드를 받습니다."
          keywordDescrtion2="키워드에 맞게 자신의 성격유형에 대한 이야기를 작성합니다."
          isRandom={true}
        />
        <Choise
          keywordTitle="키워드를 직접 작성하기"
          keywordDescrtion1="키워드를 자신이 직접 작성합니다."
          keywordDescrtion2="키워드에 맞게 자신의 성격유형에 대한 이야기를 작성합니다."
          isRandom={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SelectMethodContainer: {
    height: '100%',
    backgroundColor: '#050513',
    paddingVertical: 35,
    paddingHorizontal: 25,
    display: 'flex',
  },

  SelectText: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 24,
  },
});

export default SelectMethod;
