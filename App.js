import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function App() {

  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> setCount(count+1)}>
        <View style={styles.nestedContainer}>
          <Text style={styles.textStyle}>+1</Text>
        </View>
      </TouchableOpacity>
      <Text style={{marginTop: 50, fontSize: 20}}>current Number: {count}</Text>
    </View>
  )
}

const area = 200

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'coral',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nestedContainer: {
    width: area,
    height: area,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ffff',
    borderRadius: 20
  },
  textStyle: {
    fontSize: 50,
    fontWeight: 800
  }
})
