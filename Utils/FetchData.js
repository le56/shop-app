const baseURL = process.env.BASE_URL
export const GetData= async (url, token )=>{
    const res = await fetch(`${baseURL}/api/${url}`,{
        method: 'GET',
        headers:{
            'Authorization': token
        }
    })
    const data = res.json()
    return data;
}
export const PostData= async (url, post ,token )=>{
    const res = await fetch(`http://localhost:3000/api/${url}`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })
    const data = res.json()
    return data;
}   
export const PutsData= async (url, post ,token )=>{
    const res = await fetch(`${baseURL}/api/${url}`,{
        method: 'PUST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })
    const data = res.json()
    return data;
}
export const PatchData= async (url, post ,token )=>{
    const res = await fetch(`${baseURL}/api/${url}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })
    const data = res.json()
    return data;
}
export const DeleteData= async (url,token )=>{
    const res = await fetch(`${baseURL}/api/${url}`,{
        method: 'DELETE ',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': token
        },
    })
    const data = res.json()
    return data;
}