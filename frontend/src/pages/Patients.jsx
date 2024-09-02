import { useState } from "react";
import TableForm from "../components/TableForm";
import TablePatient from "../components/TablePatient";

export default function Patients(){
    const [open, setOpen] = useState(false)
    const [idPacient, setIdPacient] = useState(null)
    return(
        <>
        <TableForm open={open} setOpen={setOpen} idPacient={idPacient} setIdPacient={setIdPacient}/>
        <TablePatient idPacient={idPacient} setIdPacient={setIdPacient} setOpen={setOpen}/>
        <div className="flex justify-center mt-4">
        <button onClick={()=>setOpen(true)} className="px-4 py-2 rounded-lg font-bold bg-[#67FF88]">Registrar Paciente</button>
        </div>
        </>
    )
}