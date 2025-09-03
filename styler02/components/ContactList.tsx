import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const ContactList = () => {
const contacts = [
  {
    uid: 1,
    name: "Hitesh Choudhary",
    status: "Just an extra ordinary teacher",
    imageUrl: "https://avatars.githubusercontent.com/u/11613311?v=4"
  },
  {
    uid: 2,
    name: "Anuj Kumar",
    status: "Loves coding and open-source",
    imageUrl: "https://avatars.githubusercontent.com/u/5246065?v=4"
  },
  {
    uid: 3,
    name: "Kunal Kushwaha",
    status: "Community builder & DevOps enthusiast",
    imageUrl: "https://avatars.githubusercontent.com/u/42698533?v=4"
  },
  {
    uid: 4,
    name: "Akshay Saini",
    status: "Teaching JavaScript with love ❤️",
    imageUrl: "https://avatars.githubusercontent.com/u/55895538?v=4"
  },
  {
    uid: 5,
    name: "Tanay Pratap",
    status: "Helping students build careers",
    imageUrl: "https://avatars.githubusercontent.com/u/15886737?v=4"
  },
  {
    uid: 6,
    name: "Vaibhav Rathod",
    status: "Full-stack developer in the making 🚀",
    imageUrl: "https://avatars.githubusercontent.com/u/73635325?v=4"
  }
];

    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView
            style={styles.container}
            scrollEnabled={false}
            >
                {contacts.map(({uid, name, status, imageUrl}) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                        source={{
                            uri: imageUrl
                        }}
                        style={styles.userImage}
                        />
                    <View>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userStatus}>{status}</Text>
                    </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600'
    },
    userStatus: {
      color: '#FFFFFF',
      fontSize: 12
    }
})

export default ContactList;
