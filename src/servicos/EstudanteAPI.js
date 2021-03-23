const axios = require('axios')

const api = axios.create({
    baseURL:'http://127.0.0.1:3333'
})


export default {
    login:async(dados)=>{

        let ret =  await api.post('/user/login',dados)
      
            return ret
        
       
        
        
    },
    criaUsuario:async(dados)=>{
        let ret = await api.post('/user',dados)
        return ret
        /*  const data=await  fetch('http://127.0.0.1:3333/user', {
        
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      })
      const p =await data.json()
    return p
        
    }*/
},

  showMenus:async(token)=>{
    let ret = await api.get('/menu/show',{
      headers: {'Authorization': 'Bearer '+token}
     })

    return ret
  }
}