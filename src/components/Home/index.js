import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image } from "react-native";

import Style from "./style"

export default Home = ({ navigation }) => {
  const [KMPercorridos, setKMPercorridos] = useState('');
  const [LitrosConsumidos, setLitrosConsumidos] = useState('');
  const [errorKM, setErrorKM] = useState('');
  const [errorLitros, setErrorLitros] = useState('');
  const regex = /[0-9]+(\.[0-9][0-9]?)?/;

    const navigatePage = () => {
      const errKM = KMPercorridos.match(regex);
      const errLitros = LitrosConsumidos.match(regex);
      setErrorKM(errKM ? null : "Campo só pode conter valores numéricos");
      setErrorLitros(errLitros ? null : "Campo só pode conter valores numéricos");
      if (errKM && errLitros) {
          navigation.navigate("Media", {
              KMPercorridos,
              LitrosConsumidos
          });
        }
    };

    return (
      <SafeAreaView style={Style.backgroundScreen}>
        <View style={Style.containerScreen}>
          <View style={Style.containerImg}>
            <Image source={require('../../../assets/shell-icon.png')}/>
          </View>
          <Text style={Style.titleText}>App de Consumo Médio de Gasolina</Text>
          <View style={Style.containerInput}>
            <TextInput placeholder={"Km"} style={Style.textInput} value={KMPercorridos} onChangeText={setKMPercorridos} keyboardType="numeric"/>
          </View>
          {errorKM ? <Text style={Style.textError}>{errorKM}</Text> : null}
          <View style={Style.containerInput}>
            <TextInput placeholder={"Litros"} style={Style.textInput} value={LitrosConsumidos} onChangeText={setLitrosConsumidos} keyboardType="numeric"/>
          </View>
          {errorLitros ? <Text style={Style.textError}>{errorLitros}</Text> : null}
          <TouchableOpacity style={Style.containerButton}>
            <Text style={Style.textButton} onPress={() => navigatePage()}>Média</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };