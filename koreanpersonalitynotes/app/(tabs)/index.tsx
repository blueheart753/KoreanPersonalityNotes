import { View, StyleSheet } from 'react-native'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#050513',
    padding: 50,
  },
})
