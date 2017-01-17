'use strict';

import ReactNative, {
    StyleSheet,
} from 'react-native';

var MAX_VALUE = 200;

import type {StyleObj } from 'StyleSheetTypes';

function getStyleFromScore(score: number): StyleObj {
    if (score < 0) {
        return styles.noScore;
    }

    var normalizedScore = Math.round((score / 100) * MAX_VALUE);

    return {
        color: 'rgb(' +
        (MAX_VALUE - normalizedScore) + ', ' +
        normalizedScore + ', ' +
        0 +
        ')'
    };
}

var styles = StyleSheet.create(
    {
        noScore: {
            color: '#999999',
        },
    }
);
