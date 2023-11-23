'use client'
import { useState } from "react";
import Link from "next/link";


const Login = () => {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Nome:', username, 'Senha:', password);
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-6 bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Nome:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Senha:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-6">
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            <Link href="/inicio">
            Login
          </Link>
          </button>
        </div>
        <div>
          <button type="button" className="w-full bg-gray-300 text-gray-700 p-2 rounded">
            <Link href="/cadastro">
            Cadastre-se
          </Link>
         
          </button>
        </div>
      </form>
     
    </main>
  );
};


export default Login;