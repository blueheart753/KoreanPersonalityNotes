import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

const AllNotesButton = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const handleBack = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.AllNotesButtonView}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Icon
          name="chevron-back"
          size={20}
          color="#000"
          style={styles.backText}
        />
        <Text style={styles.backText}>All Notes</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  AllNotesButtonView: {
    width: '100%',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBlockColor: '#2D2D2D',
    paddingTop: 10,
  },
  backButton: {
    width: '32%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 20,
    color: '#fff',
  },
})

export default AllNotesButton
