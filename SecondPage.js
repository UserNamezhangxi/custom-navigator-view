/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import CommTitleView from "./CommTitleView";

export default class SecondPage extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <CommTitleView
                    leftIcon='back'
                    titleName='设置'
                    rightIcon='setting'
                    shwoLeft={true}
                    shwoRight={true}
                    navigator={this.props.navigator}
                    leftClickFunc={()=>{this.backToPrePage()}}
                    rightClickFunc={()=>{alert('you click second page right button')}}
                />
                <Text style={{fontSize:30,justifyContent:'center',alignItems:'center'}}>{this.props.name}</Text>
            </View>
        );
    }

    backToPrePage(){
        this.props.navigator.pop();
    }
}
