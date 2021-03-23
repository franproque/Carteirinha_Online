import React,{useEffect} from 'react'
import './style.css'

import API from '../../servicos/EstudanteAPI'
import {useToken} from '../../Contexts'

export default ()=>{
    
const {token,setToken}=useToken()
useEffect(()=>{
},[token])
return(

<div className="container">
    <h1 className="container--titulo">Estudante Online</h1>
    
  <div className='container--inicial'>
    <button className="container--inicial--button--ja" onClick={()=>{
        document.querySelector('.container--inicial').style.display="none"
        document.querySelector('.container--login').style.display="flex"

   }}>Já sou cadastrado</button>
    <button className="container--inicial--button--cad" onClick={()=>{
        document.querySelector('.container--inicial').style.display="none"
        document.querySelector('.container--cadastro').style.display="flex"}}>Cadastrar agora</button>
  </div>

  <div className="container--login">
    
    <input type="email" placeholder="exemplo@exemplo.com" className="container--login--email"/>
    <input type="password" placeholder="password" className="container--login--password"/>
    <div className="container--login--div">
        <button className="container--login--button--volta" onClick={
            ()=>{
                document.querySelector('.container--login').style.display="none"
                document.querySelector('.container--inicial').style.display="flex"
                document.querySelector('.container--login--password').value=""
                document.querySelector('.container--login--email').value=""

            }
        }>Volta</button>
        <button className="container--login--button--entra" onClick={
           async ()=>{
                var dadosUser = {
                    "email":document.querySelector('.container--login--email').value,
                    "password":document.querySelector('.container--login--password').value
                }

                var ret = await API.login(dadosUser)
                if(ret.status==200){
                    setToken(ret.data.token)
                    sessionStorage.setItem('token',ret.data.token );
                    window.location.href=`/menu`
                }else{
                    ret.data.forEach(element => {
                        alert(element.message)
                    });
                }

                             
            }
        }>Entrar</button></div>
  </div>

  <div className="container--cadastro">
    <h2 className="container--cadastro--titulo">Novo Usuário</h2>
    <input type="email" className="container--cadastro--email" placeholder="exemplo@exemplo.com"/>
    <input type="password" className="container--cadastro--password password--1" placeholder="Digite sua Senha"/>
    <input type="password" className="container--cadastro--password  password--2" placeholder="Novemante a Senha"/>
    <div className="container--button--centro">
        <button className="container--cadastro--button container--cadastro--button--volta" onClick={()=>{
            
        }} onClick={()=>{
            document.querySelector('.container--cadastro').style.display="none"
            document.querySelector('.container--inicial').style.display="flex"

        }}>Volta</button>
        <button className="container--cadastro--button container--cadastro--button--confirma" onClick={async()=>{
             if(document.querySelector('.password--1').value!=document.querySelector('.password--2').value){
                alert('As senhas não coincides!!!')
             }else{
                 
                const ret =await API.criaUsuario({
                        email:document.querySelector('.container--cadastro--email').value,
                        password:document.querySelector('.password--1').value
                        
                    })
                   if(ret.status==200){
                        alert(ret.data.retorno)
                        document.querySelector('.password--1').value=""
                        document.querySelector('.password--2').value=""
                        document.querySelector('.container--cadastro--email').value=""
                        document.querySelector('.container--cadastro').style.display="none"
                        document.querySelector('.container--login').style.display="flex";

                    }else if(ret.status ==201){
                        ret.data.forEach(element => {
                            alert(element['message'])
                        });
                       //alert('Verifique o email')
                    }
             }
                

        }}>Confirma</button>
    </div>
  </div>
</div>


)


}