import React from "react"
import { 
    View,
    Text,
    TouchableOpacity,
    Share 
} from 'react-native'
import styles from "./style"

export default function ResultImc(props){

    const onShare = async () => {
        const result = await Share.share({
            message:"Meu imc é: " + props.resultImc,
        })
    }

    return( 
        <View style={styles.resultImc}> 
            <Text style={styles.informationImc}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            <View style={styles.boxShareButton}>
                <TouchableOpacity 
                style={styles.shared}
                onPress={onShare}
                >
                <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}