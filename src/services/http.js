import config from "../config";
const BACKEND_API = config.BACKEND_API

const send = ({url,method,data = null}) => {
    return new Promise((resolve,reject)=>{
    
        fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(res => {
            
            if(res.ok){
                return res.json().then(res => resolve(res))
            }else{
                return res.json().then( e => reject(e.error) )
            }
        })
        
    })
}

class Http {
    constructor(url) {
        this.url = url
    }
    
    get = url => fetch(`${this.url}/${url}`).then(response => response.json());

    post = (url, data) => send({url: `${this.url}/${url}`,method: 'POST',data})

    put = (url,data) => send({url: `${this.url}/${url}`,method: 'PUT',data})
}

const backendApi = new Http(BACKEND_API)

export {
    backendApi
}