import { useNavigate } from "react-router-dom"

function NewClient() {

    const navigate = useNavigate()

    return (
        <>
        <h1 className="font-black text-4xl text-blue-900">New Client</h1>
        <p className="mt-3">Complete all fields to register a new client.</p>

        <div className="flex justify-end">
            <button
                className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                onClick={() => navigate('/')}
            >
                Return
            </button>

        </div>

        <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
            <p>Form here</p>
        </div>
        </>
    )
}

export default NewClient
