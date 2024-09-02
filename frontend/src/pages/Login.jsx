import axios from "axios";
import { useContext, useState } from "react";
import Alert from "../components/Alert";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const handleValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}users/login`,
        form
      );
      if (response.status == 200) {
        localStorage.setItem('token', response.data.token)
        setUser(response.data.userLogin)
        navigate('/')
      }
    } catch (error) {
        setMessage(error.response.data.msg || "Error Inesperado")
        setTimeout(()=>{
            setMessage('')
        },3000)
      console.log(error);
    }
  };
  return (
    <>
      {message && <Alert setMessage={setMessage} message={message} success={false} />}
      <div className="min-h-screen flex items-center justify-center bg-slate-200">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center mb-8">
            <h1 className="text-4xl font-bold text-cyan-500">MediLab</h1>
          </div>
          <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
            Iniciar sesión
          </h1>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-600"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                onChange={handleValue}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm text-gray-600"
              >
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                onChange={handleValue}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
            >
              Ingresar
            </button>
          </form>
          <p className="text-xs text-gray-600 text-center mt-10">
            &copy; 2023 MediLab Examen
          </p>
        </div>
      </div>
    </>
  );
}
