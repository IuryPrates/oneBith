import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 20,
        paddingTop: 15,
        borderRadius: 50,
        alignItems: 'center',
        width: "100%",
    },
    numberImc:{
        fontSize: 48,
        color: '#ff0043',
        fontWeight: 'bold',
    },
    informationImc:{
        fontSize: 18,
        color: '#ff0043',
        fontWeight: 'bold',
    },
    boxSharedButton:{
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },
    shared:{
        backgroundColor: "#4EE70B",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
    },
    sharedText:{
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    },
})

export default styles;