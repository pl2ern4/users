export const getUser = () =>{
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .catch(error=>{
        throw error;
    })
    .then(res=>res)
    .catch(error=>{
        throw error;
    });
}