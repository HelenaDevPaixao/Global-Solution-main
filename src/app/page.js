'use client'
import React from 'react';
import Login from '../app/login/page';
import Cadastro from '../app/cadastro/page';
import Inicio from './inicio/page';
import Formulario from './formulario/page';
import Button from 'react'
import Link from 'next/link';
import { useState } from 'react';

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login />
    </div>
  );
};

export default LoginPage;
