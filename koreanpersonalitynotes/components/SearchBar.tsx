import { StyleSheet, View, TextInput } from 'react-native'

const SearchBar = () => {
  return (
    <View style={styles.searchInputBox}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Notes"
        placeholderTextColor="white"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchInputBox: {
    width: '100%',
  },
  searchInput: {
    width: '100%',
    backgroundColor: '#9A9A9A',
    color: 'white',
    borderRadius: 28,
    fontSize: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontWeight: 'medium',
  },
})

export default SearchBar
