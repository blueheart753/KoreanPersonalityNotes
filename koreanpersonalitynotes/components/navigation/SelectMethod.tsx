import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import AllNotesButton from '../AllNoteButton';
const SelectMethod = () => {
  return (
    <View style={styles.SelectMethodContainer}>
      <AllNotesButton />
      <View>
        <Text style={styles.SelectText}>선택해주세요</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.RandomKeywordWrap}>
          <Text style={styles.RandomKeywordTitle}>랜덤으로 키워드 받기</Text>
          <View>
            <Text style={styles.Description}>
              • 랜덤으로 키워드를 받습니다.
            </Text>
            <Text style={styles.Description}>
              • 키워드에 맞게 자신의 성격유형에 대한 이야기를 작성합니다.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SearchKeywordWrap}>
          <Text style={styles.RandomKeywordTitle}>
            키워드를 검색하여 작성하기
          </Text>
          <View>
            <Text style={styles.Description}>
              • 키워드를 검색해 해당 키워드를 찾습니다.
            </Text>
            <Text style={styles.Description}>
              • 키워드에 맞게 자신의 성격유형에 대한 이야기를 작성합니다.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SelectMethodContainer: {
    height: '100%',
    backgroundColor: '#050513',
    padding: 35,
    display: 'flex',
  },

  SelectText: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 24,
  },
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

export default SelectMethod;
