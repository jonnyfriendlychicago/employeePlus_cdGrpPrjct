const defaultConfig = {
}
//if were to use python i will change it to 5000 
const dev = {
    API_URL: "http://localhost:8080"
}

const prod = {
    API_URL: "http://localhost:8080"
}

const test = {
    API_URL: "http://localhost:8080"
}

export const config = process.env.NODE_ENV === 'development' ? {...dev, ...defaultConfig} : process.env.NODE_ENV === 'test' ? {...test, ...defaultConfig}  : {...prod, ...defaultConfig} ;