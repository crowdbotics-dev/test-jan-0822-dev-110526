import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const OriginalScreenPathname = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.IBhJnKxt}></View><View style={styles.bzOulMto}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  IBhJnKxt: {
    height: 60,
    width: 140,
    backgroundColor: "#cd0707",
    borderRadius: 0,
    color: "#777777"
  },
  bzOulMto: {
    height: 60,
    width: 140,
    backgroundColor: "#021eb1",
    borderRadius: 0,
    color: "#777777"
  }
});
export default OriginalScreenPathname;