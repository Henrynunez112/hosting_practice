export const getAPI = () =>{
    return window.location.hostname === 'localhost' ? 'http://localhost:3001' : 'https://hnunez-first-app.herokuapp.com'
}