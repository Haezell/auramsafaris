export class BrainHttp{
    constructor (){

    }

   
    

    //POST REQUEST
    static post(url,data){
        return new Promise ( ( resolve, reject ) => {
            fetch(url, {
                method:'POST',
                //mode: 'no-cors',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            }).then( (response) => {
                if (!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json()
            }).then( ( data ) => {
                resolve(data)
            }).catch(( err ) => {
                reject(err)
            })
        })
    }

}  

