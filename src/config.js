const dev = {
    BACKEND_API: 'http://localhost:8000/api/v1'
}

const prod = {
    BACKEND_API: 'http://54.233.192.91:8000/api/v1'
}
console.log(process.env.NODE_ENV)
const config = process.env.NODE_ENV === 'development'  ?
                    dev :
                    prod
                    
export default {...config}
    