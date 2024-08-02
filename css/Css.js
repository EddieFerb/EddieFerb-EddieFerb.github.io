// import {StyleSheet} from "react-native";

// const css = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     container2: {
//         flex: 1,
//         backgroundColor: '#D9B837',
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'row',
//     },
//     container3: {
//         flex: 1,
//         backgroundColor: '#C0C0BD',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     button__home: {
//         marginRight: 40,
//     },
//     darkbg:{
//         backgroundColor: '#D9B837'
//     },
//     login__logomarca:{
//         marginBottom: 10
//     },
//     login__msg:(text='none')=>({
//         fontWeight: 'bold',
//         fontSize: 22,
//         color: 'red',
//         marginTop: 5,
//         marginBottom: 15,
//         display: text
//     }),
//     login__form:{
//         width: '80%'
//     },
//     login__input:{
//         backgroundColor: '#fff',
//         fontSize: 19,
//         padding: 7,
//         marginBottom: 15
//     },
//     login__button:{
//         padding: 12,
//         backgroundColor: '#D9B837',
//         alignSelf: 'center',
//         borderRadius: 5
//     },
//     login__buttonText:{
//         fontWeight: 'bold',
//         fontSize: 22,
//         color: '#333'
//     },
//     textPage:{
//         backgroundColor:323232,
//         padding: 20
//     }
// });
// export {css};

import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    containerTop: {
        flex: 0.15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    containerMiddle: {
        flex: 0.70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerBottom: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button__home: {
        marginRight: 40,
    },
    darkbg: {
        backgroundColor: '#D9B837'
    },
    login__logomarca: {
        marginBottom: 10
    },
    login__msg: (text = 'none') => ({
        fontWeight: 'bold',
        fontSize: 22,
        color: 'red',
        marginTop: 5,
        marginBottom: 15,
        display: text
    }),
    login__form: {
        width: '80%'
    },
    login__input: {
        backgroundColor: '#fff',
        fontSize: 19,
        padding: 7,
        marginBottom: 15
    },
    login__button: {
        padding: 12,
        backgroundColor: '#D9B837',
        alignSelf: 'center',
        borderRadius: 5
    },
    login__buttonText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#333'
    },
    textPage: {
        backgroundColor: 323232,
        padding: 20
    }
});
export {css};
