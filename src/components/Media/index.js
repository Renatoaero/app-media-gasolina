import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import Style from "./style";

export default Media = ({ route: { params: { LitrosConsumidos, KMPercorridos } }}) => {
    const media = (KMPercorridos/LitrosConsumidos).toFixed(2);
    const rank = (value) => {
      let result = '';
      switch (true) {
        case value > 12:
          result = 'A'
          break;
        case value > 10:
          result = 'B'
          break;
        case value > 8:
          result = 'C'
          break;
        case value > 4:
          result = 'D'
          break;
        default:
          result = 'E'
          break;
      }
      return result
    };
    return (
      <SafeAreaView style={Style.backgroundScreen}>
      <View style={Style.containerScreen}>
        <Text style={Style.textTitle}>Quilometragem: {KMPercorridos}</Text>
        <Text style={Style.textTitle}>Litros: {LitrosConsumidos}</Text>
        <Text style={Style.textTitle}>Média: {media} Km/L</Text>
        <Text style={[Style.textTitle, { marginTop: '10%' }]}>Tabela de Consumo</Text>
        <View style={Style.containerTable}>
          <View style={Style.containerTableRow}>
            <Text
              style={[Style.text1TableRow, {backgroundColor: "#02933D"}]}
            >
              Mais de 12 Km/l
            </Text>
            <Text
              style={[Style.text2TableRow, {backgroundColor: "#02933D"}]}
            >
              A
            </Text>
          </View>
          <View style={Style.containerTableRow}>
            <Text
              style={[Style.text1TableRow, {backgroundColor: "#C7D401"}]}
            >
              Até 12 Km/l
            </Text>
            <Text
              style={[Style.text2TableRow, {backgroundColor: "#C7D401"}]}
            >
              B
            </Text>
          </View>
          <View style={Style.containerTableRow}>
            <Text
              style={[Style.text1TableRow, {backgroundColor: "#FFEF02"}]}
            >
              Até 10 Km/l
            </Text>
            <Text
              style={[Style.text2TableRow, {backgroundColor: "#FFEF02"}]}
            >
              C
            </Text>
          </View>
          <View style={Style.containerTableRow}>
            <Text
              style={[Style.text1TableRow, {backgroundColor: "#F9BD02"}]}
            >
              Até 8 Km/l
            </Text>
            <Text
              style={[Style.text2TableRow, {backgroundColor: "#F9BD02"}]}
            >
              D
            </Text>
          </View>
          <View style={Style.containerTableRow}>
              <Text
                style={[Style.text1TableRow, {backgroundColor: "#E97601"}]}
              >
                Até 4 Km/l
              </Text>
              <Text
                style={[Style.text2TableRow, {backgroundColor: "#E97601"}]}
              >
                E
              </Text>
          </View>
        </View>
        <Text style={Style.textTitle}>Seu Rank de Consumo é {rank(media)}</Text>
      </View>
    </SafeAreaView>
    );
  };