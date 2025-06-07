import {View, Text, Button} from 'react-native';

import { useRouter } from 'expo-router';

export default function projetoscreen(){
    const router = useRouter();

    return(

        <View style={{}}>

            <Text style={{color:'black', fontWeight:'bold',fontSize:25, marginLeft:10}}>Projetos:</Text>
            <View>
                <Text style={{color:'black', fontSize:15, marginLeft:10, marginTop:10}}>Nome: Portifólio.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Descrição: Um Portifólio feito de Html e Css que contem minhas habilidades, cursos e currículo.</Text>
            </View>
            <View style={{marginTop:10}}>
                <Text style={{color:'#FF36B4'}}>-----------------//-----------------//----------------</Text>
                <Text style={{color:'black', fontSize:17, marginLeft:10}}>Nome: Agro Plants Now.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Descrição: Gerenciamento de sistemas Agro, utilizando PHP, Html, Css e Javascript.</Text>
            </View>
            <View style={{marginTop:10}}>
                <Text style={{color:'#FF36B4'}}>-----------------//-----------------//----------------</Text>
                <Text style={{color:'black', fontSize:17, marginLeft:10}}>Nome: Jogo da Memória.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Descrição: Jogo da Memória feito com QT Designer e Python.</Text>
            </View>
            <View style={{marginTop:10}}>
                <Text style={{color:'#FF36B4'}}>-----------------//-----------------//----------------</Text>
                <Text style={{color:'black', fontSize:17, marginLeft:10}}>Nome: Bloco de Notas.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Descrição: Bloco de Notas funcional, feito com QT Designer e Python.</Text>
            </View>
            
            <View style={{alignItems:'center', marginTop:50}}>
                <Button title="Voltar" onPress={() => router.back()}/>
            </View>

        </View>


    );
}