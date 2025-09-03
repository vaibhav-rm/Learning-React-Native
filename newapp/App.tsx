import React from 'react';
import { 
  Text, 
  StyleSheet, 
  View, 
  useColorScheme 
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const isDark = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text style={isDark ? styles.whiteText : styles.darkText}>Hello, World!</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

 const styles = StyleSheet.create({
   container: {
     flex: 1,                
     justifyContent: 'center', 
     alignItems: 'center',     
   },
   whiteText: {
    color: '#ffffff'
   },
   darkText: {
    color: '#000000'
   },
});

export default App;
