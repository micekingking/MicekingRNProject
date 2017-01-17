'use strict';

import React, {
    Component,
} from 'react';
import ReactNative, {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import getImageSource from './getImageSource.js';
import getStyleFromScore from './getStyleFromScore.js';
import getTextFromScore from './getTextFromScore.js';

class MovieScreen extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.mainSection}>
                    <Image
                        source={getImageSource(this.props.movie, 'det')}
                        style={styles.detailsImage} />

                    <View style={styles.rightPane}>
                        <Text style={styles.movieTitle}>{this.props.movie.title}</Text>

                        <Text>{this.props.movie.year}</Text>

                        <View style={styles.mpaaWrapper}>
                            <Text style={styles.mpaaText}>
                                {this.props.movie.mpaarating}
                            </Text>
                        </View>
                        <Ratings ratings={this.props.movie.ratings} />
                    </View>
                </View>

                <View style={styles.separator} />

                <Cast actors={this.props.movie.abridged_cast} />
            </ScrollView>
        );
    }
}

/**
 * 投票
 */
class Ratings extends Component {
    render() {
        var criticsScore = this.props.ratings.critics_score;
        var audienceScore = this.props.ratings.audience_score;

        return (
            <View>
                <View style={styles.rating}>
                    <Text style={styles.ratingTitle}>Critics:</Text>
                    <Text style={[styles.ratingValue, getStyleFromScore(criticsScore)]}>
                        {getTextFromScore(criticsScore)}
                    </Text>
                </View>

                <View style={styles.rating}>
                    <Text style={styles.ratingValue}>Audiences:</Text>
                    <Text style={[styles.ratingValue, getStyleFromScore(audienceScore)]}>
                        {getTextFromScore(audienceScore)}
                    </Text>
                </View>
            </View>
        );
    }
}

class Cast extends Component {
    render() {
        if (!this.props.actors) {
            return null;
        }

        return (
            <View>
                <Text>Actors</Text>
                {this.props.actors.map(actor =>
                    <Text key={actor.name}>{actor.name}</Text>
                )}
            </View>
        );
    }
}

//定义样式表
var styles = StyleSheet.create({
    contentContainer: {
        padding: 10,
    },

});