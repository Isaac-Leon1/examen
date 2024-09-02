import axios from "axios";
import { useEffect, useState } from "react";

export default function TablePatient({setOpen, idPacient, setIdPacient}) {
  const [patients, setPatients] = useState([]);
  const getPatients = async() => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}patients`,{
        headers:{
        Authorization: `Bearer ${token}`
      }});
      if (response.status == 200) {
        setPatients(response.data)
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPatients();
    console.log(patients) 
  }, []);
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="overflow-x-auto max-h-[70vh] aspect-video">
          <table className="min-w-full  bg-white shadow-md rounded-xl">
            <thead>
              <tr className="bg-blue-gray-100 text-gray-700">
                <th className="py-3 px-4 text-left">Nombre</th>
                <th className="py-3 px-4 text-left text-wrap">Fecha de Nacimiento</th>
                <th className="py-3 px-4 text-left">Género</th>
                <th className="py-3 px-4 text-left">Ciudad</th>
                <th className="py-3 px-4 text-left">Dirección</th>
                <th className="py-3 px-4 text-left">Teléfono</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-center">Opciones</th>
              </tr>
            </thead>
            <tbody className="text-blue-gray-900">
              {patients.length > 0 ? (
                patients.map((patient) => (
                  <tr
                    className="border-b border-blue-gray-200"
                    key={patient._id}
                  >
                    <td className="py-3 px-4">{`${patient.name} ${patient.lastName}`}</td>
                    <td className="py-3 px-4">{patient.birthdate}</td>
                    <td className="py-3 px-4">{patient.genre}</td>
                    <td className="py-3 px-4">{patient.city}</td>
                    <td className="py-3 px-4">{patient.address}</td>
                    <td className="py-3 px-4">{patient.phone}</td>
                    <td className="py-3 px-4">{patient.email}</td>
                    <td className="py-3 px-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:text-blue-800 mr-2"
                        onClick={()=>{setOpen(true); setIdPacient(patient._id)}}
                      >
                        Editar
                      </a>
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        Eliminar
                      </a>
                    </td>
                  </tr>)
                )
              ) : (
                <tr>
                    <td colSpan={8} className="py-3 px-4 text-center">No existen pacientes registrados</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
