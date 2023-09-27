import { useNavigate, Form, useActionData} from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from "../components/Error"

export async function action({request}) {
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)

    const errors = []
    if(Object.values(datos).includes('')) {
        errors.push('All fields are required')
    }

    if(Object.keys(errors).length){
        return errors
    }

}

function NewClient() {

    const errors = useActionData()
    const navigate = useNavigate()

    console.log(errors)

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

        <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

            {errors?.length && errors.map( ( error, i ) => <Error key={i}>{error}</Error> )}

            <Form
                method="post"
            >
                <Formulario />

                <input
                    type="submit"
                    className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                    value = "Register Client"
                />
            </Form>
        </div>
        </>
    )
}

export default NewClient
