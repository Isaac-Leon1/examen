import { Link, Outlet } from "react-router-dom";

export default function Header(){
    return(
        <>
        <nav className="w-full grid grid-cols-3 justify-between items-center px-4 py-4 bg-[#F0F0F0]">
            <ul className="flex gap-4 font-mono font-bold text-xl">
                <li className="">
                    <Link to={'/'}>Pacientes</Link>
                </li>
                <li className="">
                    <Link to="/especialidades">Especialidades</Link>
                </li>
                <li className="">
                    <Link to="/citas">Citas</Link>
                </li>
            </ul>
            <h1 className="text-2xl font-extrabold text-[#49AAA5] text-center">MediLab</h1>
            <div className="text-end">
            <button onClick={()=>localStorage.removeItem('token')} className="font-bold px-2 py-2 rounded bg-cyan-400 text-slate-100">
                Cerrar Sesión
            </button>
            </div>
        </nav>
        <Outlet />
        </>
    )
} 