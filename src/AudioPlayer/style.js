import { StyleSheet } from "react-native"
import { windowWidth, h1_Size, h2_Size } from "../Constants/Units"
import { color1 } from "../Constants/Colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    
      },
      timeContainer : {
        display : 'flex',
        alignItems : 'center',
        flexDirection : 'row-reverse',
        justifyContent : 'space-between',
        marginRight : 10,
        marginLeft : 20,
        position : 'absolute',
        width : windowWidth - 40,
        paddingBottom : 60,
      },
      controlBtns : {
        position : 'absolute',
        width : windowWidth,
        height : 300,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-around',
        flexDirection : 'row',
        paddingBottom : 110,
      },
      controlBtnsWithSlider : {
        backgroundColor : '#80808078',
        position : 'absolute',
        width : windowWidth,
        height : 350,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        flexDirection : 'column-reverse',
        paddingBottom : 80,
      },
      controlBtnsWithSlider2 : {
        position : 'absolute',
        width : windowWidth,
        height : 350,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        flexDirection : 'column-reverse',
        paddingBottom : 80,
      },
      AudioContainer : {
    
      },
      audioImg : {
        width : windowWidth,
        height : 330,
      },
      play : {
        backgroundColor : color1,
        width : 80,
        height : 80,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 70,
      },
      playTxt : {
        color : '#ffff',
        fontSize : 20
      },
      cutPicLeft1 : {
        width : 60,
        height : 60,
        backgroundColor : '#ffffff00',
        position : 'absolute',
        top : 300,
      },
      cutPicLeft2 : {
        width : 60,
        height : 60,
        borderTopLeftRadius : 80,
        backgroundColor : '#ffff',
      },
      previous : {
        color : color1,
        transform : [
          {rotateY : '180deg'}
        ]
      },
      next : {
        color : color1
      },
      cutPicRight1 : {
        width : 60,
        height : 60,
        backgroundColor : '#ffffff00',
        position : 'absolute',
        top : 300,
        right : 0,
      },
      cutPicRight2 : {
        width : 60,
        height : 60,
        borderTopRightRadius : 80,
        backgroundColor : '#ffff',
      },
      imgBottomCover : {
        width : windowWidth ,
        height : 50,
        backgroundColor : '#ffff',
        position : 'absolute',
        top : 300,
        borderTopLeftRadius : 60,
        borderTopRightRadius : 60,
      },
      title : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
      },
      mainTitle : {
        fontWeight : 'bold',
        fontSize : h1_Size,
        marginBottom : 5,
      },
      youMayAlsopLike : {
        fontWeight : 'bold',
        fontSize : h2_Size,
        marginTop : 40,
        textAlign : 'center'
      },
      slider : {
        width: windowWidth-30,
        height: 30,
        margin : 'auto',

    },
    SliderContainer : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    }
})