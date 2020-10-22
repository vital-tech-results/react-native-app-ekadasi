import React from 'react';
// import PropTypes from 'prop-types';
import {
    View,
} from 'react-native';

const MyView = (props) => {
    const { children, hide, style } = props;
    if (hide) {
        return null;
    }
    return (
        <View {...this.props} style={style}>
            { children}
        </View>
    );
};

export default MyView;