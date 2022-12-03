import React, { useState } from 'react'
import { 
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList,
} from 'react-native'
import ResultImc from './resultimc'
import styles from './style'

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha a altura e o peso..'); 
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    //adiciona estado para controle de aviso quando o campo está vazio
    const [errorMessage, setErrorMessage] = useState(null) 
    const [imcList, setImcList] = useState([]) //cria lista de imcs calculados
 
    function imcCalcula(){
        let heightFormat = height.replace(",",".")
        let totalImc = (weight/(heightFormat*heightFormat)).toFixed(2);
        //após chamada a função e calcular setar dentro da array de lista de imcs 
        setImcList((arr) => [...arr, {
            id: new Date().getTime(),
            imc:totalImc
        }])
        setImc(totalImc)
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate();
            setErrorMessage("campo obrigatório**")
        }
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalcula();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual:");
            setTextButton("Calcular novamente");
            setErrorMessage(null)
        }
        else{
            verificationImc();
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha a altura e o peso")
        }
    }

    return(
        <View style={styles.formContext}>
            {imc == null ?
            //botão de compartilhar só será exibido se tiver setado 
            //um valor de resultado do cálculo.
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>

                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setHeight}
                value={height}
                placeholder='Ex: 1.72'//placeholder preenche a caixa de texto antes do usuário interagir
                keyboardType='numeric'//chama o teclado para o usuário
                />

                <Text style={styles.formLabel}>Peso</Text>

                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex: 60.6'
                keyboardType='numeric'
                />
                <TouchableOpacity
                style={styles.formButton} 
                onPress={()=> validationImc()} //chamada da função de calcular quando pressionar o botão
                >
                <Text style={styles.textFormButton}>{textButton}</Text>
                </TouchableOpacity>
            </Pressable>
            ://caso contrário exibe uma View vazia
            <View style={styles.exibitionResultImc}>
                <ResultImc 
                messageResultImc={messageImc} //mensagem setada
                resultImc={imc} //resultado calculado
                />
                <TouchableOpacity
                style={styles.formButton} 
                onPress={()=> validationImc()} //chamada da função de calcular quando pressionar o botão
                >
                <Text style={styles.textFormButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            }
            <FlatList 
            style={styles.listImc} 
            data={imcList.reverse()}//reverse inverte a lista, para o ultimo 
            //que foi adicionado aparecer no topo
            renderItem={({item}) => {
                return(
                    <Text style={styles.resultImcItem}>
                        <Text style={styles.textResultItemList}> Resultado IMC = {item.imc}</Text>
                    </Text>
                )
            }}
            keyExtractor={(item) =>{
                item.id
            }}
            />
        </View>
    );
}