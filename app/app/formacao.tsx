import {View, Text, Button} from 'react-native';

import { useRouter } from 'expo-router';

export default function formacaoscreen(){
    const router = useRouter();

    return(

        <View style={{}}>

            <Text style={{color:'black', fontWeight:'bold',fontSize:25, marginLeft:10}}>Cursos:</Text>
            <View>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Nome: Técnico em Desenvolvimento de Sistemas.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Instituição: Senac.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Ano de conclusão: Em Desenvolvimento.</Text>
            </View>
            <View style={{marginTop:10}}>
                <Text style={{color:'#FF36B4'}}>-----------------//-----------------//----------------</Text>
                <Text style={{color:'black', fontSize:17, marginLeft:10}}>Nome: Programming Essentials in Python.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Instituição: Cisco.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Ano de conclusão: 15 de Julho de 2024.</Text>
            </View>
            <View style={{marginTop:10}}>
                <Text style={{color:'#FF36B4'}}>-----------------//-----------------//----------------</Text>
                <Text style={{color:'black', fontSize:17, marginLeft:10}}>Nome: JavaScript Essentials 1.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Instituição: Cisco.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Ano de conclusão: 05 de Novembro de 2024.</Text>
            </View>
            <View style={{marginTop:10}}>
                <Text style={{color:'#FF36B4'}}>-----------------//-----------------//----------------</Text>
                <Text style={{color:'black', fontSize:17, marginLeft:10}}>Nome: Introduction to Cybersecurity.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Instituição: Cisco.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Ano de conclusão: 04 de Dezembro de 2024.</Text>
            </View>
            <View style={{marginTop:10}}>
                <Text style={{color:'#FF36B4'}}>-----------------//-----------------//----------------</Text>
                <Text style={{color:'black', fontSize:17, marginLeft:10}}>Nome: Python Essentials 1.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Instituição: Cisco.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Ano de conclusão: 05 de Dezembro de 2024.</Text>
            </View>
            <View style={{marginTop:10}}>
                <Text style={{color:'#FF36B4'}}>-----------------//-----------------//----------------</Text>
                <Text style={{color:'black', fontSize:17, marginLeft:10}}>Nome: Introduction to IoT and Digital Transformation.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Instituição: Cisco.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Ano de conclusão: 08 de Dezembro de 2024.</Text>
            </View>
            <View style={{marginTop:10}}>
                <Text style={{color:'#FF36B4'}}>-----------------//-----------------//----------------</Text>
                <Text style={{color:'black', fontSize:17, marginLeft:10}}>Nome: AI Fundamentals with IBM SkillsBuild.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Instituição: Cisco.</Text>
                <Text style={{color:'black', fontSize:15, marginLeft:10}}>Ano de conclusão: 08 de Dezembro de 2024.</Text>
            </View>
            
            <View style={{alignItems:'center', marginTop:20}}>
                <Button title="Voltar" onPress={() => router.back()}/>
            </View>

        </View>


    );
}