import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, SafeAreaView, Button, TouchableOpacity, Alert } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { useFonts } from 'expo-font';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../components/CustomButton';

export default function HomeScreen() {

  return (
    <>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.name}>SPEND</Text>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="qr-code-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={styles.container}>
        <View style={styles.balance}>
          <Text style={styles.title}>Total Balance</Text>
          <Text style={styles.value}>
            R$4.290,22
          </Text>
        </View>
        <View style={{
          margin: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <CustomButton title="Day" onPress={() => { Alert.alert('Day') }} />
          <CustomButton title="Week" onPress={() => { Alert.alert('Week') }} />
          <CustomButton title="Month" onPress={() => { Alert.alert('Month') }} />
          <CustomButton title="Year" onPress={() => { Alert.alert('Year') }} />
        </View>
      </View>
      {/* <EditScreenInfo path="/screens/HomeScreen.tsx" /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  name: {
    fontFamily: 'Montserrat-Bold',
    color: '#4FE3C1',
    fontSize: 25,
    fontWeight: 'bold',
  },
  header: {
    padding: 20,
    backgroundColor: '#232443',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sign: {
    fontSize: 20,
  },
  balance: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Montserrat-Light',
    fontSize: 15,
  },
  value: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 35,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
