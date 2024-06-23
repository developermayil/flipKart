import  type    { AppProps } from 'next/app';
import { Component } from 'react';
 {Component}
export default function Myapp({Component,pageProps}:AppProps){
    return<Component{...pageProps}/>
}