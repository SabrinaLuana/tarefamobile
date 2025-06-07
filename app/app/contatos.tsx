import {View, Text, Button, Linking, TouchableOpacity} from 'react-native';

import { useRouter } from 'expo-router';

export default function contatoscreen(){
    const router = useRouter();

    return(

        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>

                <Text style={{color:'black', fontWeight:'bold',fontSize:30, marginRight:120}}>Contatos:</Text>
                <View>
                    
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/sabrina-ara%C3%BAjo-921475328/')}>
                        <Text style={{color:'black', fontSize:20, marginTop:5}}>LinkedIn: Clique Aqui.</Text>

                    </TouchableOpacity>
                    <Text style={{color:'black', fontSize:20, marginTop:10}}>Número: (67) 98104-6710</Text>
                    <Text style={{color:'black', fontSize:20, marginTop:10}}>E-mail: sabrina3@gmail.com.</Text>
                </View>
                
                
                <View style={{alignItems:'center', marginTop:20}}>
                    <Button title="Voltar" onPress={() => router.back()}/>
                </View>

            </View>


    );
}