import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const OriginalScreenPathname = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.xdlPdWSs}></View><View style={styles.YjpHahbA}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  xdlPdWSs: {
    height: 60,
    width: 140,
    backgroundColor: "#fe0202",
    borderRadius: 0,
    color: "#777777"
  },
  YjpHahbA: {
    height: 60,
    width: 140,
    backgroundColor: "#211717",
    borderRadius: 0,
    color: "#777777"
  }
});
export default OriginalScreenPathname;