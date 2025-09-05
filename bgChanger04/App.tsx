import { useState } from "react";
import { 
    StatusBar, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


const App = () => {
  const [randomBackground,setRandomBackground] = useState("#ffffff");

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)] 
    }
    setRandomBackground(color);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex:1 }}>
        <StatusBar backgroundColor={'#000000'} />
        <View style={[styles.container, {backgroundColor: randomBackground} ]}>
          <TouchableOpacity onPress={generateColor}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnTxt}>
                Press me
              </Text>
            </View>
          </TouchableOpacity>
          <Text selectable={true} style={styles.colorCode}>{randomBackground}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase'
  },
  colorCode: {
    fontSize: 30,
    color: '#ffffff'
  }
});

export default App;
