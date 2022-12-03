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
            <View style={styles.boxShareButton}>
                {props.resultImc != null ?
                //botão de compartilhar só será exibido se tiver setado 
                //um valor de resultado do cálculo.
                <TouchableOpacity style={styles.shared}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
                : //caso contrário exibe uma View vazia
                <View/>
                }
            </View>
            <Text style={styles.informationImc}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    )
}