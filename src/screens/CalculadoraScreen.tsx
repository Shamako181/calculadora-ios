import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { styles } from '../theme/appTheme'
import { BottonCalc } from '../componets/BottonCalc'

export const CalculadoraScreen = () => {

  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = () => {
    setNumero('0');
  }

  const armarNumero = (numeroTexto :string) => {

    //Verificamos so existe un numero decimal
    if(numero.includes('.') && numeroTexto === '.') return;

    if(numero.startsWith('0') || numero.startsWith('-0')){
      
      //Verifacamos si el primer decimal
      if(numeroTexto === '.'){

        setNumero(numero + numeroTexto);

        //Evaluamos si es otro 0 y hay un .
      }else if( numeroTexto === '0' && numero.includes('.')){

        setNumero(numero + numeroTexto);

        //Evaluamos si el numero es diferente de 0 y no hay punto
      }else if(numeroTexto !== '0' && !numero.includes('.')){

        setNumero(numeroTexto);

        //Evitamos 000.0
      }else if(numeroTexto === '0' && !numero.includes('.')){

        setNumero(numero)

      }else{
        setNumero(numero + numeroTexto);
      }

    }else{
      setNumero(numero + numeroTexto);
    }

  }

  const positivoNegativo = () => {
    if (numero.includes('-')){
      setNumero(numero.replace('-',''))
    }else{
      setNumero('-'+numero)
    }
  }

  const btnDelete = () => {
    let negativo = '';
    let numeroTemporal = numero;

    if(numero.includes('-')){
      negativo = '-';
      numeroTemporal = numero.substring(1);
    }

    if(numero.length > 1){
      setNumero(negativo + numeroTemporal.slice(0,-1));
    }else{
      setNumero('0');
    }

  }

  const cambiarNumeroAnterior = () => {
    if(numero.endsWith('.')){
      setNumeroAnterior(numero.slice(0,-1))
    }else{
      setNumeroAnterior(numero);
    }
    setNumero('0');
  }

  return (
    <View style={styles.calculadoraContainer}>
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
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
          <BottonCalc texto="/" color="#FF9427" accion={cambiarNumeroAnterior}/>
        </View>

        <View style={styles.fila}>
          <BottonCalc texto="7" accion={armarNumero}/>
          <BottonCalc texto="8" accion={armarNumero}/>
          <BottonCalc texto="9" accion={armarNumero}/>
          <BottonCalc texto="X" color="#FF9427" accion={limpiar}/>
        </View>

        <View style={styles.fila}>
          <BottonCalc texto="4" accion={armarNumero}/>
          <BottonCalc texto="5" accion={armarNumero}/>
          <BottonCalc texto="6" accion={armarNumero}/>
          <BottonCalc texto="-" color="#FF9427" accion={limpiar}/>
        </View>

        <View style={styles.fila}>
          <BottonCalc texto="1" accion={armarNumero}/>
          <BottonCalc texto="2" accion={armarNumero}/>
          <BottonCalc texto="3" accion={armarNumero}/>
          <BottonCalc texto="+" color="#FF9427" accion={limpiar}/>
        </View>

        <View style={styles.fila}>
          <BottonCalc texto="0" ancho accion={armarNumero}/>
          <BottonCalc texto="." accion={armarNumero}/>
          <BottonCalc texto="=" color="#FF9427" accion={limpiar}/>
        </View>

    </View>
  )
}
