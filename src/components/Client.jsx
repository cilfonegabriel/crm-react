import { useNavigate } from "react-router-dom";

function Client({client}) {

    const navigate = useNavigate()

    const { nombre, empresa, email, telefono, id } = client;

    return (
        <tr className="border-b">
            <td className="p-6 space-y-2">
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p>{empresa}</p>
            </td>

            <td className="p-6">
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bolt">Email: </span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bolt">Tel: </span>{telefono}</p>
            </td>

            <td className="p-6 flex gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clients/${id}/edit`) }
                >
                    Edit
                </button>

                <button
                    type="button"
                    className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default Client
