import {View,Text,Button, Image} from 'react-native';

import { useRouter } from "expo-router";

export default function HomeScreen(){

    const router = useRouter();

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image
          source={require('../assets/images/Eu.jpg')}
          style={{width:150, height:150, borderRadius:100, borderWidth:3,borderColor:'#B30A73'}}/>
            <Text style={{color:'#FF36B4', fontWeight:'bold', fontSize:20}}>Sabrina Luana de Melo Araujo</Text>
            <Text style={{color:'black', marginBottom:20}}>Tecnica em desenvolvimento de sistemas</Text>
            <Button title="Ir para a formação " onPress={() => router.push('/formacao')}/>
            <View style={{marginTop:20}}>

            </View>
            <Button title="Ir para o endereço" onPress={() => router.push('/endereco')}/>
            <View style={{marginTop:20}}>

            </View>
            <Button title="Ir para os projetos" onPress={() => router.push('/projetos')}/>
            <View style={{marginTop:20}}>

            </View>
            <Button title="Ir para os contatos" onPress={() => router.push('/contatos')}/>
        </View>

        
    );
}