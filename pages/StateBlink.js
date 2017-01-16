import React, {Component} from 'react';
import {AppRegistry, Text ,View} from 'react-native';

class StateBlink extends Component {
    constructor(porps) {
        super(porps);
        this.state = {showText: true};

        //toggle the state every second
        setInterval(() =>{
            this.setState({showText: !this.state.showText});
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : '';

        return (<Text> {display}</Text>);
    }
}

class BlinkApp extends Component {
    render() {
        return (
            <View>
                <StateBlink text='I am test state blink 1.'/>
                <StateBlink text='I am test state blink 2.'/>
                <StateBlink text='I am test state blink 3.'/>
                <StateBlink text='I am test state blink 4.'/>
            </View>
        );
    }
}

AppRegistry.registerComponent('BlinkApp', () => BlinkApp);