/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
const PropTypes = require('prop-types');
export default class CommTitleView extends Component {

    constructor(props){
        super(props)
    }

    static defaultProps={
        leftIcon:'',
        titleName:'',
        rightIcon:'',
        shwoLeft:false,
        shwoRight:false,
        navigator:null,
        leftClickFunc:null,
        rightClickFunc:null,

        leftImageLeftMargn:16,
        rightImageRightMargn:16,
        titleFontSize:20,
        titleTextColor:'black',
        navigatorBackGroundColor:'#0001',
        navigatorHeight:44,

    };

    static propTypes={
        titleName:PropTypes.string.isRequired,
        shwoLeft:PropTypes.bool.isRequired,
        shwoRight:PropTypes.bool.isRequired,
        navigator:PropTypes.any.isRequired,
        leftIcon:PropTypes.string,
        rightIcon:PropTypes.string,
        leftClickFunc:PropTypes.func,
        rightClickFunc:PropTypes.func,
        leftImageLeftMargn:PropTypes.number,
        rightImageRightMargn:PropTypes.number,
        titleFontSize:PropTypes.number,
        navigatorHeight:PropTypes.number,
        titleTextColor:PropTypes.string,
        navigatorBackGroundColor:PropTypes.string,
    };

    render() {
        return (
            <View style={[styles.navigtorBarStyle, {
                    backgroundColor: this.props.navigatorBackGroundColor,
                    height:this.props.navigatorHeight
                }]}>
                {/*左边的back*/}
                {this._shwoLeftView()}
                {/*中间的title*/}
                {this._showTitleView()}
                {/*右边的menu*/}
                {this._showRightView()}
            </View>
        );
    }

    _shwoLeftView(){
        if(this.props.shwoLeft){
            return (
                <TouchableOpacity
                    style={{position: 'absolute', left: this.props.leftImageLeftMargn,}}
                    onPress={() => {
                        if (this.props.leftClickFunc==null){
                            console.log('leftClickFunc is null');
                            return;
                        }
                        this.props.leftClickFunc();
                    }}>
                    <Image source={{uri: this.props.leftIcon}} style={styles.backImageStyle}/>
                </TouchableOpacity>
            )
        }else{
            return null;
        }
    }

    _showTitleView(){
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    //alert(click title);
                }}>
                <View>
                    <Text style={{
                        fontSize:this.props.titleFontSize,
                        color:this.props.titleTextColor,
                    }}>{this.props.titleName}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    _showRightView(){
        if (this.props.shwoRight){
            return (
                <TouchableOpacity
                    style={{position: 'absolute', right: this.props.rightImageRightMargn,}}
                    onPress={() => {
                        if (this.props.rightClickFunc==null){
                            console.log('leftClickFunc is null');
                            return;
                        }
                        this.props.rightClickFunc()
                    }}>
                    <Image source={{uri: this.props.rightIcon}} style={styles.menuImageStyle}/>
                </TouchableOpacity>
            )
        }else{
            return null;
        }
    }
}

const styles = StyleSheet.create({
    navigtorBarStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuImageStyle: {
        width: 18,
        height: 18
    },
    backImageStyle: {
        width: 18,
        height: 18
    },
});
