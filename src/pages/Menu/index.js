import React,{useEffect,useState} from 'react'
import './style.css'
import API from '../../servicos/EstudanteAPI'
import Items from './items'

export default (props)=>{
   
    const [menu,setMenu]=useState([])

    useEffect(()=>{
      async function dados(){

          const ret = await API.showMenus(sessionStorage.getItem('token'))
          if(ret.status==200){
            setMenu(ret.data)
          }
         
              
          
         
      }
    

      dados()
    },[])
    return(
    <div className="container--menu">
        <header className="container--menu--header">
            <h2>Estudante Online</h2>
            <div className="container--menu--dados">
                <div>
                    <p>
                    Francisco Piloto Roque
                    </p>
                    <p>franproque@gmail.com</p>
                </div>
            <button onClick={()=>{
             window.location.href=`/`
             sessionStorage.setItem('token',"")
            }}>Sair</button>
            </div>
            
        </header>
        <div className="container--menu--itens">
        {menu.map((t,key)=>(
            <Items title={t.title} link={t.link} key={key} icone={t.icone}/>
        ))}
        
        </div>
    </div>
    
    )
}