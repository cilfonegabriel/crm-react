import { getClient } from "../data/clients"

export async function loader({params}) {

    const client = await getClient(params.clientId)

    if(Object.values(client).length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Client Inexistence'
        })
    }
    return client
}

const EditClient = () => {
  return (
    <div>
      Editar clientes
    </div>
  )
}

export default EditClient
