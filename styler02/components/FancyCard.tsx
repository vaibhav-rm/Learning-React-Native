import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card,styles.cardElevated]}>
                <Image 
                source={{
                    uri: 'https://static.toiimg.com/thumb/msid-92003975,width-748,height-499,resizemode=4,imgsize-1897455/.jpg'
                }}
                style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Taj Mahal</Text>
                    <Text style={styles.cardLabel}>Agra Delhi</Text>
                    <Text style={styles.cardDescription}>Taj Mahal is an indo-persian architecture built by shah jahan.</Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
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
        width: 340,
        height: 350,
        borderRadius: 8,
        marginVertical: 12,
        marginHorizontal: 11
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        fontSize: 16,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 14,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {

    }

})

export default FancyCard;
