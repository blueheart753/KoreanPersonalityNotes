import { StyleSheet, Text } from 'react-native';

const Header = () => {
  return (
    <Text style={styles.titleBox}>
      <Text style={styles.title}>Notes</Text>;
    </Text>
  );
};

const styles = StyleSheet.create({
  titleBox: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    color: '#fff',
    fontSize: 30,
  },
});

export default Header;
