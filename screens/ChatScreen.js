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
        name: 'Kind person',
        avatar: 'https://placeimg.com/140/140/any'
    }
}

export default function ChatScreen() {
    const [messages, setMessages] = useState([])
    useEffect (() => {
        setMessages([demoMessage])
    }, [])

    function sendMessages(newMessages) {
        console.log(newMessages);
        setMessages([...messages, ...newMessages]);
    }

    return (
    <GiftedChat
    messages={messages}
    onSend={(newMessages) => sendMessages(newMessages)}
    renderUsernameOnMessage={true}
    listViewProps={{
        style: {
          backgroundColor: "#666",
        },
    }}
    user={{
        _id: 1,}}
/>
    );
    }

const styles = StyleSheet.create({})