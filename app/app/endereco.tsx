import {View, Text, Button} from 'react-native';

import { useRouter } from 'expo-router';

export default function enderecoscreen(){
    const router = useRouter();

    return(

        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>

                <Text style={{color:'black', fontWeight:'bold',fontSize:30, marginRight:120}}>Endereço:</Text>
                <View>
                    <Text style={{color:'black', fontSize:20, marginTop:5}}>Rua: Av. Joana D'arc</Text>
                    <Text style={{color:'black', fontSize:20, marginTop:10}}>Número: (67) 98104-6710</Text>
                    <Text style={{color:'black', fontSize:20, marginTop:10}}>Bairro: Pioneiros.</Text>
                    <Text style={{color:'black', fontSize:20, marginTop:10}}>Cidade: Campo Grande.</Text>
                    <Text style={{color:'black', fontSize:20, marginTop:10}}>Estado: Mato Grosso do Sul.</Text>
                    <Text style={{color:'black', fontSize:20, marginTop:10}}>CEP: 79070-170</Text>
                </View>
                
                
                <View style={{alignItems:'center', marginTop:20}}>
                    <Button title="Voltar" onPress={() => router.back()}/>
                </View>

            </View>


    );
}