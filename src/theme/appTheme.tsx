import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo:{
        flex: 1,
        backgroundColor:'black',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    resultado:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        marginBottom:10
    },
    resultadoPequeno:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right'
    },
    calculadoraContainer:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10
    },
    boton:{
        height:80,
        width:80,
        backgroundColor:'#2D2D2D',
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10
    },
    botonText:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:'white',
        fontWeight:'bold'
    }
})