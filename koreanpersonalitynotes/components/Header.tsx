import { StyleSheet, Text, View, Switch } from 'react-native'
import { useState } from 'react'

const Header = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const darkModeToggle = () => setIsEnabled(previousState => !previousState)
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Notes</Text>
      <Switch
        trackColor={{ false: '#2e2e2e', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={darkModeToggle}
        value={isEnabled}
        style={styles.darkModeToggle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    marginTop: 40,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'semibold',
  },
  darkModeToggle: {
    marginTop: 4,
  },
})

export default Header
