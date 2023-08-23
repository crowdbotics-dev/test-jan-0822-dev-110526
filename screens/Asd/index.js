import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const asd = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.GtAqtsdx}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  GtAqtsdx: {
    height: 60,
    width: 140,
    backgroundColor: "#ea0000",
    borderRadius: 0,
    color: "#777777"
  }
});
export default asd;