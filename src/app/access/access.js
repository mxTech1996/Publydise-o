'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/organisms/Navbar';

// Array de usuarios como lo solicitaste.
const allowedUsers = [
  { user: 'julio', password: 'passwordJulio', products: '3,4' },
  { user: 'ana', password: 'passwordAna', products: '1,2' },
  { user: 'luis', password: 'passwordLuis', products: '5,6' },
  { user: 'maria', password: 'passwordMaria', products: '7,8' },
  { user: 'carlos', password: 'passwordCarlos', products: '3,7' },
  {
    user: 'sofia',
    password: 'passwordSofia',
    products: null,
    withAdditionals: true,
  },
  {
    user: 'pedro',
    password: 'passwordPedro',
    products: null,
    withAdditionals: true,
  },
  {
    user: 'JamesKelley',
    password: 'passwordJames',
  },
  {
    user: 'RichardLewis',
    password: 'passwordRichard',
    products: null,
    withAdditionals: true,
  },
  {
    user: 'CarlosAlonso',
    password: 'passwordCarlos',
    products: null,
    withAdditionals: true,
  },
  {
    user: 'julioCesar',
    password: 'passwordJulio',
  },
];

const LoginPage = () => {
  // 1. Hooks para manejar el estado y la navegación
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 2. Lógica para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Busca si el usuario existe en el array
    const foundUser = allowedUsers.find((u) => u.user === username);

    // Valida si el usuario fue encontrado y si la contraseña es correcta
    if (foundUser && foundUser.password === password) {
      // Credenciales correctas
      setError(''); // Limpia cualquier error previo

      router.push('/products');
    } else {
      // Credenciales incorrectas
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <>
      <Navbar withAll={false} textBlack={true} />
      <main className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg'>
          {/* Header Section */}
          <div className='text-center'>
            <h1 className='text-3xl font-bold text-gray-800'>Welcome Back</h1>
            <p className='mt-2 text-gray-500'>
              Please sign in to access your account
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
            {/* Email Input */}
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-700'
              >
                Username
              </label>
              <input
                id='username'
                name='username'
                type='text'
                autoComplete='username'
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F253B]'
                placeholder='you@example.com'
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F253B]'
                placeholder='••••••••'
              />
            </div>

            {/* Error Message */}
            {error && <div className='text-sm text-red-600'>{error}</div>}

            {/* Submit Button */}
            <div>
              <button
                type='submit'
                className='w-full px-4 py-3 font-semibold text-white bg-[#262B57] rounded-lg hover:bg-[#1F253B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F253B] transition-colors duration-300'
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
