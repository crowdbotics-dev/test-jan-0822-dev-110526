import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const FIRSTPATHNAME = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.IsEoCLqr}></View><View style={styles.GzUaCXUs}></View><View style={styles.uisdEKtY}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  IsEoCLqr: {
    height: 60,
    width: 140,
    backgroundColor: "#00c337",
    borderRadius: 0,
    color: "#777777"
  },
  GzUaCXUs: {
    height: 60,
    width: 140,
    backgroundColor: "#ff18ed",
    borderRadius: 0,
    color: "#777777"
  },
  uisdEKtY: {
    height: 60,
    width: 140,
    backgroundColor: "#d1bb16",
    borderRadius: 0,
    color: "#777777"
  }
});
export default FIRSTPATHNAME;