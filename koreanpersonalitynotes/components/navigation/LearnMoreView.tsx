import { StyleSheet, View, Text, TextInput } from 'react-native';
import AllNotesButton from '../HomeButton';
import { RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  LearnMoreView: {
    personality: string;
    description: string;
    createAt: string;
  };
};

const LearnMoreView = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'LearnMoreView'>>();
  const { personality, description, createAt } = route.params;
  return (
    <View style={styles.learnMoreViewContainer}>
      <AllNotesButton />
      <View style={styles.titleWrap}>
        <Text style={styles.title}>{personality}</Text>
        <Text style={styles.createAt}>{createAt}</Text>
      </View>
      <View>
        <TextInput
          style={styles.description}
          textAlignVertical="top"
          multiline={true}
          returnKeyType="done"
          blurOnSubmit={true}
        >
          {description}
        </TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  learnMoreViewContainer: {
    height: '100%',
    backgroundColor: '#050513',
    paddingHorizontal: 25,
    paddingVertical: 45,
  },
  titleWrap: {
    paddingVertical: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  title: {
    color: '#fff',
    fontSize: 24,
  },
  createAt: {
    color: '#fff',
    fontSize: 12,
  },
  description: {
    color: '#fff',
    width: '100%',
    height: '100%',
  },
});

export default LearnMoreView;
