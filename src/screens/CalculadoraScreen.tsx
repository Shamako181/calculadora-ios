import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import { BottonCalc } from '../componets/BottonCalc'
import { useCalculadora } from '../hooks/useCalculadora'



export const CalculadoraScreen = () => {

  const {
    numero, 
    numeroAnterior,
    limpiar,
    btnDelete,
    positivoNegativo,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
        {
          (numeroAnterior !== '0' ) && (
            <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
          )
        }
        <Text style={styles.resultado} 
              numberOfLines={1} 
              adjustsFontSizeToFit={true}
        >
          {numero}
        </Text>

        {/* Fila de botones */}
        <View style={styles.fila}>
          <BottonCalc texto="C" accion={limpiar}/>
          <BottonCalc texto="+/-" accion={positivoNegativo}/>
          <BottonCalc texto="del" accion={btnDelete} />
          <BottonCalc texto="/" color="#FF9427" accion={btnDividir}/>
        </View>

        <View style={styles.fila}>
          <BottonCalc texto="7" accion={armarNumero}/>
          <BottonCalc texto="8" accion={armarNumero}/>
          <BottonCalc texto="9" accion={armarNumero}/>
          <BottonCalc texto="X" color="#FF9427" accion={btnMultiplicar}/>
        </View>

        <View style={styles.fila}>
          <BottonCalc texto="4" accion={armarNumero}/>
          <BottonCalc texto="5" accion={armarNumero}/>
          <BottonCalc texto="6" accion={armarNumero}/>
          <BottonCalc texto="-" color="#FF9427" accion={btnRestar}/>
        </View>

        <View style={styles.fila}>
          <BottonCalc texto="1" accion={armarNumero}/>
          <BottonCalc texto="2" accion={armarNumero}/>
          <BottonCalc texto="3" accion={armarNumero}/>
          <BottonCalc texto="+" color="#FF9427" accion={btnSumar}/>
        </View>

        <View style={styles.fila}>
          <BottonCalc texto="0" ancho accion={armarNumero}/>
          <BottonCalc texto="." accion={armarNumero}/>
          <BottonCalc texto="=" color="#FF9427" accion={calcular}/>
        </View>

    </View>
  )
}
