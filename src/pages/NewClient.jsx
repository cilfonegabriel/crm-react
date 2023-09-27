import { useNavigate, Form, useActionData, redirect} from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from "../components/Error"
import { addClients } from "../data/clients"

export async function action({request}) {
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const email = formData.get('email')

    const errors = []
    if(Object.values(datos).includes('')) {
        errors.push('All fields are required')
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!regex.test(email)) {
        errors.push('The email is not validated.')
    }


    if(Object.keys(errors).length){
        return errors
    }

    await addClients(datos)

    return redirect('/')
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
                noValidate
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
