import { useQuery } from "react-query"
const fetchApps = async() => {
    const res = await fetch("https://personalblog-39684.firebaseio.com/apps.json")
    return res.json()
}
const useFetch = () => {
    const { data, isLoading, error } = useQuery("fetchApps", fetchApps)
    let dataArray = []
    for (const key in data) {
        dataArray.push({
            id: key,
            description: data[key].description,
            images:data[key].images     
        })
    }
  
   
 
    return {dataArray,isLoading,error}
}

export default useFetch
