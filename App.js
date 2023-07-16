import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

//View -> container that wrap multiple components together
//Text -> component for display text
//TextInput -> component for input text
//Button -> component for click

export default function App() {

  const [msg, setMsg] = useState([])
  const [input, setInput] = useState("")

  const handleChange = (value) => {
      setInput(value)
  }

  const handleMsg = () => {
    setMsg([...msg, input])
    setInput("")
  }

  const handleClearNote = () => {
    setMsg([])
    setInput("")
  }

  return (
    <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} value={input} onChangeText={handleChange}/>
            <Button color={"#000"} title='Add Note' onPress={handleMsg}/>
          </View>

          <TouchableOpacity onPress={handleClearNote}>
            <View style={{flexDirection: 'row', paddingVertical: 10, borderRadius: 5, justifyContent: 'center', marginTop: 20, backgroundColor: 'red'}}>
               <Text style={{color: 'white'}}>Clear Note</Text>
            </View>
          </TouchableOpacity>

          <View style={{marginTop: 20}}>
              <Text style={{fontSize: 16, marginBottom: 10}}>Note:: </Text>
              {msg?.map((item, index)=>(
                <Text>{index+1}. {item}</Text>
              ))}
          </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    paddingTop: 30,
    paddingHorizontal: 20
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 50
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    flex: 1
  },
  button: {
      backgroundColor: '#000',
      color: '#fff'
  },
  textStyle: {
    fontSize: 50,
    fontWeight: 800
  }
})
