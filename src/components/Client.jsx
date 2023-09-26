
function Client({client}) {

    const { nombre, empresa, email, telefono, id } = client;

    return (
        <tr>
            <td className="p-6">
                {nombre}
            </td>
        </tr>
    )
}

export default Client
