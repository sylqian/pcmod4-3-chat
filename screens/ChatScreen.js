// rnfs
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from "../database/firebaseDB";

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

const db = firebase.firestore().collection("messages");

export default function ChatScreen() {
    const [messages, setMessages] = useState([])
    useEffect (() => {
        const unsubscribe = db
        .orderBy("createdAt", "desc")
        .onSnapshot((collectionSnapshot) => {
          const messages = collectionSnapshot.docs.map((doc) => {
            const date = doc.data().createdAt.toDate();
            const newDoc = { ...doc.data(), createdAt: date };
            return newDoc;
          });
          setMessages(messages);
        });
      return unsubscribe;
    }, []);
  

    function sendMessages(newMessages) {
        console.log(newMessages);
        db.add(newMessages[0]);
    }

    return (
    <GiftedChat
    messages={messages}
    onSend={sendMessages}
    renderUsernameOnMessage={true}
    listViewProps={{
        style: {
          backgroundColor: "#666",
        },
    }}
    user={{
        _id: 1, name: "Bob" }}
/>
    );
    }

const styles = StyleSheet.create({})