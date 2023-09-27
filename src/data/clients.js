export async function getClients() {
    const resp = await fetch(import.meta.env.VITE_API_URL)
    const result = await resp.json()
    return result
}

export async function getClient(id) {
    const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const result = await resp.json()
    return result
}

export async function addClients(datos) {
    
    try {
        const resp = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos), 
            headers: {
                'Content-Type': 'application/json'  
            }
        })
        await resp.json()
    } catch (err) {
        console.error(err)
    }
}

export async function updateClient(id, datos){
    try {
        const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos), 
            headers: {
                'Content-Type': 'application/json'  
            }
        })
        await resp.json()
    } catch (err) {
        console.error(err)
    }
}

export async function deleteClient(id){
    try {
        const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        })
        await resp.json()
    } catch (err) {
        console.error(err)
    }
}