import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Overlay, Text } from 'react-native-elements';


export default function OverlayNote() {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (

        <View>

            <Button buttonStyle={[styles.codeHighlightContainer]} title="Tap for important notice..." titleStyle={styles.codeHighlightText} onPress={toggleOverlay} />

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <Text style={styles.overlayBoxArea}  >NOTE: All dates are for Vrndavana, India. For your local dates tap "Resources" below and tap "Pure Bhakti Calendar." Configure your local time on purebhatki.com.</Text>
            </Overlay>

        </View>
    );

}





const styles = StyleSheet.create({

    overlayBoxArea: {
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 19,
    },

    overlayBoxAreaForEkadasiText: {
        marginTop: 50,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 19,
    },


    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },

});