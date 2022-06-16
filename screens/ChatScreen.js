// rnfs
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

const demoMessage =	{
    _id: 1,
    text: 'Hello there!',
    createdAt: new Date(),
    user: {
        _id: 2,
        name: 'Demo person',
        avatar: 'https://placeimg.com/140/140/any'
    }
}

export default function ChatScreen() {
    useState [messages, setMessages] = useState([])
    useEffect (() => {
        setMessages([demoMessage])
    }, [])

  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})