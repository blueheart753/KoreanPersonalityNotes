import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import WriteDescription from './WriteDescription'
import SaveButton from './SaveButton'

interface Props {
  personality: string
}

const InsertNote = ({ personality }: Props) => {
  return (
    <View>
      <View style={styles.personalityContainer}>
        <Text style={styles.personality}>{personality}</Text>
        <View style={styles.personalityBorderBottom} />
      </View>
      <View>
        <WriteDescription />
      </View>
      <View>
        <SaveButton />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  personalityContainer: {
    marginTop: 20,
  },
  personality: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  personalityBorderBottom: {
    width: 60,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBlockColor: '#2D2D2D',
    paddingTop: 10,
  },
})

export default InsertNote
