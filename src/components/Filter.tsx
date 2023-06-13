import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {transportsAPI} from '../services/TransportService';

const Filter = ({trigger}: any) => {
  const {t} = useTranslation();

  const [modalVisible, setModalVisible] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const {data: categories} = transportsAPI.useFetchCategoriesQuery();

  const handleFilter = () => {
    setModalVisible(!modalVisible);
    trigger(categoryId);
  };

  const clearAll = () => {
    setModalVisible(!modalVisible);
    setCategoryId(0);
    trigger(0);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose category</Text>
            {categories?.map(category => {
              return (
                <Pressable
                  key={category.id}
                  onPress={() => setCategoryId(category.id)}
                  style={[category.id === categoryId && styles.active]}>
                  <Text style={styles.item}>{category.name}</Text>
                </Pressable>
              );
            })}
            {categories && (
              <View style={styles.buttonContainer}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={clearAll}>
                  <Text style={styles.textStyle}>{t('clear')}</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={handleFilter}>
                  <Text style={styles.textStyle}>{t('save')}</Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      </Modal>
      <View style={styles.filterContainer}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>{t('filter')}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  filterContainer: {
    alignSelf: 'flex-end',
    right: 20,
    top: 0,
    position: 'absolute',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  active: {
    backgroundColor: '#a7d9f4',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    flex: 1,
    height: 40,
    margin: 2,
  },
  buttonOpen: {
    backgroundColor: '#827f83',
  },
  buttonClose: {
    backgroundColor: '#a7d9f4',
  },
  textStyle: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  item: {
    paddingVertical: 10,
  },
});

export default Filter;
