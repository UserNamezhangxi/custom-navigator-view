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
import SecondPage from "./SecondPage";

type Props = {};

export default class FirstPage extends Component<Props> {
    render() {
        return (
            <View style={{flex:1}}>
                <CommTitleView
                    leftIcon='back'
                    titleName='我的'
                    rightIcon='setting'
                    shwoLeft={true}
                    shwoRight={true}
                    navigator={this.props.navigator}
                    leftClickFunc={()=>{this.backToPrePage()}}
                    rightClickFunc={()=>{this.pushtoSecondPage()}}
                />
                <Text style={{fontSize:30,justifyContent:'center',alignItems:'center'}}>{this.props.name}</Text>
            </View>
        );
    }
    backToPrePage(){
        return null;
    }
    /*点击进行导航页面跳转*/
    pushtoSecondPage() {
        this.props.navigator.push({
            component: SecondPage,//跳转页面
            title: '第二页'
        })
    }
}

const styles = StyleSheet.create({
    navigtorBarStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        backgroundColor: 'orange',
        justifyContent: 'center'
    },
    topLeftTextStyle: {
        fontSize: 18,
        color: 'white',
    },
    menuImageStyle: {
        width: 18,
        height: 18
    },
    backImageStyle: {
        width: 18,
        height: 18
    },
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
    },
});
