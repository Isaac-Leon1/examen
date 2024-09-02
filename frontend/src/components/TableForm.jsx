import axios from "axios";
import { useEffect, useState } from "react";
import Alert from "./Alert";

export default function TableForm({open, setOpen, idPacient, setIdPacient}) {
  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    name:'',
    lastName: '',
    birthdate: '',
    genre: '',
    city: '',
    address: '',
    phone: '',
    email: '',
  })

  const handleValue = (e)=>{
    setForm({...form,
      [e.target.name]:e.target.value,
    })
  }

  const getPatient = async (id) => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}patients/${id}`,{
        headers:{
          Authorization: `Bearer ${token}`
      }})
      console.log(response)
      if(response.status == 200){
        console.log(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const registerPatient = async() =>{
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}patients`,form,{
        headers:{
          "Content-Type":"application/json",
          Authorization: `Bearer ${token}`
      }})
      if(response.status == 200){
        setOpen(false)
        console.log(response.data)
      }
    } catch (error) {
      if(error.response.data.errors.length>0){
        const msgs = error.response.data.errors.map((error)=>{
          return error.message
        })
        setMessage(msgs.join('\n'))
        setTimeout(()=>{
          setMessage('')
        },3000)

      }
      console.log(error.response.data.errors)
    }
  }
  useEffect(()=>{
    if(idPacient){
      getPatient(idPacient)
      setEditMode(true)
    }else{
      setEditMode(false)
    }
  },[idPacient])
  return (
    <>
    {message && <Alert message={message} success={false} setMessage={setMessage} />}
      <div
        className={`fixed font-sans bg-gray-500 bg-opacity-60 w-full min-h-screen flex justify-center items-center h-full top-0 backdrop-filter backdrop-blur-lg ${!open && 'hidden'}`}
      >
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <div
          className="px-6 p-2 bg-white justify-center items-center w-1/2 m-auto h-1/3 sm:h-1/3 md:w-1/3 md:h-1/3 lg:w-3/5 lg:mx-5 lg:h-5/6 rounded-3xl filter drop-shadow-2xl"
        >
          <div className="flex p-1 sm:mt-4 border-black items-center justify-between"></div>
          <div className="">
            <h1 className="text-center text-gray-600 tracking-wider text-sm sm:text-md font-black">
              Registrar Paciente
            </h1>
          </div>
          <div className="mt-1 sm:mt-8">
            <form className="flex-col flex">
              <div className="flex gap-4">
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="text-gray-700 text-xs sm:text-md"
                  >
                    Nombre
                  </label>
                  <input
                    name="name"
                    type="text"
                    onChange={handleValue}
                    className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="lastname"
                    className="text-gray-700 text-xs sm:text-md"
                  >
                    Apellido
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    onChange={handleValue}
                    className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-full">
                  <label
                    htmlFor="birthdate"
                    className="text-gray-700 text-xs sm:text-md"
                  >
                    Fecha de Nacimiento
                  </label>
                  <input
                    name="birthdate"
                    type="date"
                    onChange={handleValue}
                    className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="genre"
                    className="text-gray-700 text-xs sm:text-md"
                  >
                    Género
                  </label>
                  <select 
                  name="genre"
                  onChange={handleValue}
                  className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"
                  >
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                  </select>
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="city"
                  className="text-gray-700 text-xs sm:text-md"
                >
                  Ciudad
                </label>
                <input
                  name="city"
                  type="text"
                  onChange={handleValue}
                  className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="address"
                  className="text-gray-700 text-xs sm:text-md"
                >
                  Dirección
                </label>
                <input
                  name="address"
                  type="text"
                  onChange={handleValue}
                  className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="text-gray-700 text-xs sm:text-md"
                >
                  Teléfono
                </label>
                <input
                  name="phone"
                  type="number"
                  onChange={handleValue}
                  className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="text-gray-700 text-xs sm:text-md"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  onChange={handleValue}
                  className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"
                />
              </div>
            </form>
          </div>
          <div className="justify-center flex-col items-center mt-2 sm:mt-8 flex">
            {editMode ?
              <button
                className="bg-blue-600 text-gray-100 rounded-md mb-2 h-8 sm:h-auto sm:rounded-lg w-20 sm:w-52 p-1 text-xs sm:text-md sm:p-3"
              >
                Editar
              </button>
            :
              <button
              onClick={()=>registerPatient()}
                className="bg-blue-600 text-gray-100 rounded-md mb-2 h-8 sm:h-auto sm:rounded-lg w-20 sm:w-52 p-1 text-xs sm:text-md sm:p-3"
              >
                Registrar
              </button>
            }
            <button
            onClick={()=>setOpen(false)}
              className="
                        bg-slate-400
                        text-gray-100
                        rounded-md
                        h-8
                        sm:h-auto
                        sm:rounded-lg
                        w-20
                        sm:w-52
                        p-1
                        text-xs
                        sm:text-md
                        sm:p-3
                    "
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
