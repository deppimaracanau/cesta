import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width

export default function Cesta(){
    return <>
        <Image source={topo} Style={estilos.topo}/> 
        <Text style={estilos.titulo}>Detalhes da cesta</Text>

        <view style={estilos.cesta}>
            <Text stylo={estilos.nome}>Cesta de legumes </Text>
            <view style={estilos.fazenda}>
            <Text style={estilos.nomeFazenda}>Fazenda do chico doido</Text>
            </view>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Text style={estilos.descrição}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </view>
        </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
        
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,

    },
    cesta: {
        paddingHorizontal: 8,
        paddingHorizontal: 16,
    },
    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        fontFamily: "MotserratBold",
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda:{
        width: 32,
        height: 32,
        marginLeft: 12,
    },
    nomeFazenda:{
     fontSize: 16,
     lineHeight: 26, 
     fontFamily: "MotserratRegular", 

    },
    descrição:{
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
});