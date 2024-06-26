import { StyleSheet, View, Text, Image } from 'react-native'

interface Props {
  personality: string
  notesStatus: boolean
  create_at: string
}

const Notes = ({ create_at, notesStatus, personality }: Props) => {
  return (
    <View>
      <Text>엄준식</Text>
    </View>
  )
}

export default Notes
