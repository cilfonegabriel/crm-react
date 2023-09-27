import { useLoaderData } from "react-router-dom";
import Client from "../components/Client";


export function loader() {

    const clientes = [
      {
          id: 1,
          nombre: 'Juan',
          telefono: 102013313,
          email: "juan@juan.com",
          empresa: 'Codigo Con Juan'
      },
      {
          id: 2,
          nombre: 'Karen',
          telefono: 138198313,
          email: "karen@juan.com",
          empresa: 'Codigo Con Juan'
      },
      {
          id: 3,
          nombre: 'Josue',
          telefono: 31983913,
          email: "josue@juan.com",
          empresa: 'Codigo Con Juan'
      },
      {
          id: 4,
          nombre: 'Miguel',
          telefono: 319381983,
          email: "miguel@juan.com",
          empresa: 'Codigo Con Juan'
      },
      {
          id: 5,
          nombre: 'Pedro',
          telefono: 1398198938,
          email: "pedro@juan.com",
          empresa: 'Codigo Con Juan'
      },
  ];

  return clientes;
}


function index() {

  const data = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3">Manage your clients</p>

      {data.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clients</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

            <tbody>
              {data.map(client => (
                <Client
                  client={client}
                  key={client.id}
                />
              ))}
            </tbody>        
        </table>
      ) : (
        <p className="text-center mt-10">There are no clients</p>
      )}
    </>
  )
}

export default index
