import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFD700",
  },
  containerScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  containerTable: {
    borderWidth: 0, 
    marginBottom: '10%',
    padding: '5%',
  },
  containerTableRow: {
    flexDirection: "row"
  },
  text2TableRow: {
    fontWeight: "bold",
    marginBottom: '1.5%',
    padding: '1%',
    fontSize: 18,
    width: '40%',
    borderWidth:  3,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: '0.5%',
    paddingLeft: '1.5%',
    borderColor: 'black'
  },
  text1TableRow: {
    fontWeight: "bold",
    marginBottom: '1.5%',
    padding: '1%',
    fontSize: 18,
    width: '60%',
    borderWidth:  3,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
      fontWeight: "bold",
      fontSize: 25,
      marginBottom: 10,
      color: '#FF0000',
      textAlign: 'center'
  },
});