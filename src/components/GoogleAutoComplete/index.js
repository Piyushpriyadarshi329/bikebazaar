import React, { memo, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles';
import { constants } from '../../utils/theme';
const GoogleAutoComplete = memo((props) => {

    const onPress = async (data, details) => {

        const urlAddress = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${data.place_id}&fields=geometry&key=${constants.googleKey}`
        console.log(urlAddress)
        const response = await fetch(urlAddress);
        const json = await response.json();
        var location = {
            latitude: Number(json.result.geometry.location.lat),
            longitude: Number(json.result.geometry.location.lng)
        }
        props.googleResult(data,location)

    }
    return (
        <View style={styles.container}>
            <SafeAreaView style={[styles.safeAreaContainer]}>
                <GooglePlacesAutocomplete
                    query={{
                        key: constants.googleKey,
                        language: 'en', // language of the results
                    }}
                    onPress={(data, details = null) =>
                        onPress(data, details)
                    }
                    onFail={(error) => console.error(error)}
                    requestUrl={{
                        url:
                            'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
                        useOnPlatform: 'web',
                    }}
                    placeholder={"Your Current Location"}
                    styles={{
                        textInputContainer: {
                            ...styles.searchTextBackground
                        },
                        textInput: {
                            ...styles.searchTextInput
                        },

                    }}
                    autoFocus={true}
                    renderRightButton={() => <View style={styles.searchTextCancelContainer}><Text style={styles.searchTextCancel} onPress={() => {
                        props.googleCancel()

                    }}>Cancel</Text></View>}
                />
            </SafeAreaView>
        </View>
    );
});

export default GoogleAutoComplete;

