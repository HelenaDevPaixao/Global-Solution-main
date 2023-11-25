'use client'
import React from 'react';
import Login from '../app/login/page';
import Cadastro from '../app/cadastro/page';
import Inicio from './inicio/page';
import Formulario from './formulario/page';
import Button from 'react'
import Link from 'next/link';
import { useState } from 'react';
import axios from "axios";

const LoginPage = () => {
  return (
    <div>
      
      <Login />
    </div>
  );
};

export default LoginPage;
