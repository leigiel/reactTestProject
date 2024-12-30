const getDataFromLocalStorage=()=>{
    const storedData= localStorage.getItem('application-details')
    if(storedData){
        return JSON.parse(storedData)
    }
    return [];
}
const setDataToLocalStorage=(id)=>{
    const data = getDataFromLocalStorage()
    const exists = data.find(da=>da === id)
    if(!exists){
        data.push(id)
        localStorage.setItem('application-details',JSON.stringify(data))
    }
}

export {getDataFromLocalStorage,setDataToLocalStorage}