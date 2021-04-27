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
    width: "70%",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    color: '#FF0000',
    textAlign: "center"
  },
  containerInput: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    height: 40,
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  textInput: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
  containerButton: {
      marginTop: 10,
      width: "60%",
      height: 50,
      backgroundColor: "#FF0000",
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
  },
  textButton: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#fff",
  },
  textError:{
    color: "red",
    marginTop: -5,
    marginBottom: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
  containerImg: {
    paddingBottom: 20,
    alignItems: 'center'
  },
});
