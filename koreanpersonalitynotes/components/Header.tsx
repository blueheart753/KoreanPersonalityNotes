import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const handleSelectNote = () => {
    navigation.navigate('SelectMethod');
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Notes</Text>
      <TouchableOpacity onPress={handleSelectNote}>
        <Icon name="add-circle" color={'#fff'} size={40} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    marginTop: 10,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'semibold',
  },
});

export default Header;
