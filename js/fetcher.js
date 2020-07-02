const getAPI = async (url)=>{
    let data = await (await fetch(url)
    .then(resp=>resp.json())
    .then(data=>data)
    .catch(err=>err))

    return data
}


export default getAPI;
