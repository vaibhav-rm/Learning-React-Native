import React from 'react';
import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ActionCard = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card,styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in javascript 21  - ES12
                    </Text>
                </View>
                <Image
                source={{
                    uri: 'https://exbsoft.com/Content/Images/Technologies/js.jpg'
                }}
                style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={4}>
                         "ES12" most commonly refers to ECMAScript 2021, 
                         the twelfth major edition of the ECMAScript language standard,
                          which introduced new JavaScript features like replaceAll(), Promise.any(), and private class members. However, 
                         "ES12" can also refer to a specific Pulz cinema speaker system, 
                         a Polk Audio home theater subwoofer, a soap dispenser from Euronics Industries, 
                         or a software version within platforms like ServiceNow. 
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                    onPress={() => openWebsite('https://vaibhav-rm.github.io')}
                    >
                        <Text style={styles.socialLinks}>Read more...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => openWebsite('https://github.com/vaibhav-rm')}
                    >
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 330,
        height: 380,
        borderRadius: 8,
        marginVertical: 12,
        marginHorizontal: 15
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    headingContainer:{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 200,
        width: 330
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks:{
        fontSize: 16,
        backgroundColor: '#fffff',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
    }
})

export default ActionCard;
