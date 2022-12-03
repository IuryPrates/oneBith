import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContext:{
        width: "100%",
        height: "100%",
        justifyContent: "space-around",
        bottom: 0,
        backgroundColor: "#ffffff",
        alignItems: 'center',
        marginTop: 20,
        paddingTop: 15,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    form:{
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel:{
        color: 'black',
        fontSize: 18,
        paddingLeft: 20,
    },
    formInput:{
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    textFormButton:{
        fontSize: 20,
        color: "#ffffff",
    },
    formButton:{
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    errorMessage:{
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    }
})

export default styles;