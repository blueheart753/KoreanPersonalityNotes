import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useEffect, useState } from 'react';
import WriteDescription from './WriteDescription';
import SaveButton from './SaveButton';

interface Props {
  personality: string;
  isRandom: boolean;
}

const WriteNote = ({ personality, isRandom }: Props) => {
  const [personalityName, setPersonalityName] = useState<string>(personality);
  const [writePersonalityName, setWritePersonalityName] = useState<string>('');
  const [descriptionInfo, setDescriptionInfo] = useState<string>('');
  const [createAt, setCreateAt] = useState<string>('');

  const handleDescription = (description: string) => {
    setDescriptionInfo(description);
  };

  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const today = `${year}.${month}.${day}`;

  useEffect(() => {
    setCreateAt(today);
  }, [today]);

  return (
    <View>
      <View style={styles.personalityContainer}>
        <View style={styles.personalityText}>
          {isRandom ? (
            <TextInput
              style={styles.personality}
              editable={false}
              value={personality}
            />
          ) : (
            <TextInput
              style={styles.personality}
              placeholder="키워드를 입력해주세요"
              placeholderTextColor={'#AAA'}
              autoFocus={true}
              value={writePersonalityName}
              onChangeText={text => setWritePersonalityName(text)}
            />
          )}
          <Text style={styles.today}>{today}</Text>
        </View>
        <View style={styles.personalityBorderBottom} />
      </View>
      <View>
        <WriteDescription handleDescription={handleDescription} />
      </View>
      <View>
        <SaveButton
          createAtInfo={createAt}
          personalityInfo={isRandom ? personality : writePersonalityName}
          descriptionInfo={descriptionInfo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  personalityContainer: {
    marginTop: 20,
  },
  personalityText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  today: {
    color: '#aaa',
    fontSize: 12,
  },
  personality: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  personalityBorderBottom: {
    width: '32%',
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBlockColor: '#2D2D2D',
    paddingTop: 10,
  },
});

export default WriteNote;
