export async function getClients() {
    const resp = await fetch(import.meta.env.VITE_API_URL)
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