/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {

} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import FirstPage from './FirstPage'

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Navigator
                initialRoute={{
                    title: '第一页',
                    name: 'FirstPage',    // 名称
                    component: FirstPage,  // 要跳转的板块
                    passProps: {
                        name: 'React native'
                    }
                }}
                configureScene={() => Navigator.SceneConfigs.FloatFromRight} //配置页面的出现方式，默认是FloatFromRight，从右侧出现
                renderScene={(route, navigator) => {    // 将板块生成具体的组件
                    let Component = route.component;    // 获取路由内的板块
                    return <Component {...route.passProps} navigator={navigator}
                    />
                }}
            />
        );
    }
}

