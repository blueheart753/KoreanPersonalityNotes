import { StyleSheet, View, Text } from 'react-native'
import AllNotesButton from '../HomeButton'

const LearnMoreView = () => {
  return (
    <View style={styles.learnMoreViewContainer}>
      <AllNotesButton />
      <View style={styles.titleWrap}>
        <Text style={styles.title}>personality</Text>
        <Text style={styles.createAt}>createAt</Text>
      </View>
      <View>
        <Text style={styles.description}>description</Text>
      </View>
    </View>
  )
}

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
  },
})

export default LearnMoreView
