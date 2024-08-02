import React, { forwardRef } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  personality: string;
  notesStatus: string;
  description: string;
  createAt: string;
}

const NotesList = forwardRef<any, Props>(
  ({ createAt, notesStatus, personality, description }, ref) => {
    const isCompleted = notesStatus;
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    const SendData = () => {
      navigation.navigate('LearnMoreView', {
        personality,
        description,
        createAt,
      });
    };

    const renderIcon =
      isCompleted === 'true' ? (
        <Icon name="check-circle" size={17} color="#20d63b" />
      ) : (
        <Icon name="pencil" size={17} color="#fff" />
      );

    return (
      <TouchableOpacity
        ref={ref}
        style={
          isCompleted === 'true'
            ? styles.CompleteNoteListContainer
            : styles.NotCompleteNoteListContainer
        }
        onPress={SendData}
      >
        <View style={styles.NoteListBox}>
          <Text style={styles.Personality}>{personality}</Text>
          <Text style={styles.create_at}>{createAt}</Text>
        </View>
        <View style={styles.NoteBox}>
          <Text style={styles.NotesStatus}>
            {isCompleted === 'true' ? '작성완료' : '작성중...'}
          </Text>
          {renderIcon}
        </View>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  CompleteNoteListContainer: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#2D68FF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 9,
    marginTop: 16,
  },
  NotCompleteNoteListContainer: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#FF8B21',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 9,
    marginTop: 16,
  },
  NoteListBox: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  Personality: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  create_at: {
    fontSize: 12,
    color: '#fff',
  },
  NotesStatus: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  NoteBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
});

export default NotesList;
