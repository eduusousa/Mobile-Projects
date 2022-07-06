import React from 'react';
import style from './style/MainStyle.js';

{/* -------| IMPORTANDO COMPONENTES |------- */}
import Altura from './components/Altura.js';
import Peso from './components/Peso.js';
import Imc from './components/Imc.js'
import Avaliacao from './components/Classification.js';
{/* -------| ====================== |------- */}  

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';

export default function app(){

  let altura = 1.70
  let peso = 60.5
  let status
  let corStatus


  let imc = peso / (altura * altura)

  if(imc == 18.4 || imc < 18.4){
    status = "Abaixo do Peso"
    corStatus = '#FF9234'

  } else if(imc >= 18.5 && imc <= 24.9){
    status = "Peso normal"
    corStatus = '#35D0BA'

  } else if(imc >= 25.0 && imc <= 29.9){
    status = "Sobrepeso"
    corStatus = '#E87307'

  } else if(imc >= 30.0 && imc <= 34.9){
    status = "Obesidade Grau 1"
    corStatus = '#D92027'

  } else if(imc >= 35.0 && imc <= 39.9){
    status = "Obesidade Grau 2"
    corStatus = '#AB0F13'

  } else{
    status = "Obesidade Grau 3"
    corStatus = '#850003'

  }

  return(
    <SafeAreaView>
      <ScrollView>

        <View style={style.containerHeader}>

        {/* -------| TÍTULO |------- */}
          <View style={style.header}>
            <Text style={style.textHeader}> Calculadora de IMC </Text>
          </View>
        {/* -------| ====== |------- */}  

        {/* -------| CAIXAS COM INFO |------- */}
          <View style={style.boxInfo}>

            <Altura />
            <Peso />
            <Imc />

          </View>
        {/* -------| ====== |------- */}  

        {/* -------| AVALIAÇÃO |------- */}
          <Avaliacao />
        {/* -------| ====== |------- */}  

        </View>

        <View style={style.containerBody}>
          <View style={style.bodyText}>
            <Image source={require('./images/duvida.png')} style={style.foto}/>
            <Text style={style.titleInformation}> O que é IMC? </Text>
            <View style={style.textFormat}>
              <Text style={style.textInformation}>  
                IMC é a sigla para Índice de Massa Corporal,que é um cálculo que serve para avaliar se a pessoa está dentro do seu peso ideal em relação à altura. 
                Assim, de acordo com o valor do resultado de IMC, a pessoa pode saber se está dentro do peso ideal, acima ou abaixo do peso desejado.
              </Text>
            </View>
          </View>

        </View>




      </ScrollView>
    </SafeAreaView>
  )
}