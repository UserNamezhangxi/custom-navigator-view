
## 使用Navigator自定义导航栏 ##
### React-native-custom-navigator-view ###
### 1、导入 ###
	

	npm i facebookarchive/react-native-custom-components
	import { Navigator } from 'react-native-deprecated-custom-components'

> 不是清楚的可以参考之前的 [Navigator基础参考](https://github.com/UserNamezhangxi/NavigatorBarJump "https://github.com/UserNamezhangxi/NavigatorBarJump")

### 2、使用 `CommTitleView`  ###
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

这里主要讲一下自定义的`CommTitleView`

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
**分为左边的 `back` 中间的 `title` 右边的 `menu` 菜单**
> 左边的`backView`

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

> 中间的`title`
	
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
> 右边的`menuView`
 
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
### Notes: ###
1.	如果需要显示左边View,则传递`props.shwoLeft={true}` 
2.	右侧同理,则传递`props.shwoRight={true}`
3.	如果需要使其有点击事件，则传递 `props.leftClickFunc`
4.	右侧同理，则传递 `props.rightClickFunc`
5.	如果不需要点击事件则对应的参数传递`null`
6.	需要什么图标，则传递图标的名字(前提需要放在对应的图片文件夹下) `props.leftIcon`
7.	标题显示：则需要传递`props.titleName`
8.	注意这些属性参数必须传递
	
		titleName:PropTypes.string.isRequired,
	    shwoLeft:PropTypes.bool.isRequired,
	    shwoRight:PropTypes.bool.isRequired,
	    navigator:PropTypes.any.isRequired,
	


### 3、Properties ###

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| leftIcon | '' | `string` | 左侧图标的Icon对应的图片名称. |
| titleName | '' | `string` | 设置中间title的名称. |
| rightIcon | '' | `string` | 右侧图标的Icon对应的图片名称. |
| shwoLeft | `false` | `bool` | 设置为 `true` 控制左边Icon View visible. |
| shwoRight | `false` | `bool` | 设置为 `true` 控制右边Icon View visible. |
| navigator | null | `any` | 进行导航跳转所必须由上一个界面传递过来的导航器，如果设置为null 则无法进行导航跳转 |
| leftClickFunc | () => null | `func` | 调用者传递过来的左侧View的点击事件，不需要点击事件则传递`null`或者不传值 |
| rightClickFunc | () => null | `func` | 调用者传递过来的右侧View的点击事件，不需要点击事件则传递`null`或者不传值 |
| leftImageLeftMargn | `16` | `number` | 定义左侧图标距离屏幕的间距 |
| rightImageRightMargn | `16` | `number` | 定义左侧图标距离屏幕的间距 |
| titleFontSize | `20` | `number` | 定义title文字大小 |
| titleTextColor | `black` | `string` | 定义title文字颜色 |
| navigatorBackGroundColor | `#0001` | `string` | 定义导航栏背景颜色 |
| navigatorHeight | `44`| `number` | 定义导航栏背高度  |


    