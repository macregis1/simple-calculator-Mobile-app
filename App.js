import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [input,setInput]= useState('')
  const [result,setResult] = useState('')
  const onButtonPress = (value) =>{
    if(value === '='){
      try{
        setResult(eval(input));
      } catch(error){
        setResult('error')
      }
    }else if(value === 'C') {
      setInput('');
      setResult('')
    }else if(value === '⌫') {
      setInput(input.slice(0, -1))
    }else {
      setInput(input + value)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          {result}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.inputText}
        value={input}
        onChangeText={setInput}
        keyboardType='numeric'
        />
      </View>
      <View style={styles.buttonContainer}>
        {['C','%','⌫','/','7','8','9','*','4','5','6','-','1','2','3','+','00','0','.','='].map(
          (item,index) =>(
            <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => onButtonPress(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b2b2b2"
  }, resultContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }, resultText: {
    fontSize: 40,
  }, inputContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }, inputText: {
    fontSize: 30
  }, buttonContainer: {
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  }, button: {
    width: "21%",
    // // height: "15%",
    // width: 80,
    height: 69,
    borderRadius: 15,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor:"#ccc",
  }, buttonText: {
    fontSize: 24,
    color: "#000"
  }
});
