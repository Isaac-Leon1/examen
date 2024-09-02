import { useState } from "react";
import TableForm from "../components/TableForm";
import TablePatient from "../components/TablePatient";

export default function Patients(){
    const [open, setOpen] = useState(false)
    return(
        <>
        <TableForm open={open} setOpen={setOpen}/>
        <TablePatient />
        <div className="flex justify-center mt-4">
        <button className="px-4 py-2 rounded-lg font-bold bg-[#67FF88]">Registrar Especialidad</button>
        </div>
        </>
    )
}