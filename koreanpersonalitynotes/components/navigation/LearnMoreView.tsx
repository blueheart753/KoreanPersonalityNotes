import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

const LearnMoreView = () => {
  return (
    <SafeAreaView style={styles.learnMoreViewContainer}>
      <View style={styles.learnMoreViewContainer}>
        <Text style={styles.text}>LearnMoreView</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  learnMoreViewContainer: {
    height: '100%',
    backgroundColor: '#050513',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  text: {
    color: '#fff',
  },
});

export default LearnMoreView;
