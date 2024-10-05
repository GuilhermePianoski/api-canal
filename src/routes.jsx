import React from 'react';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Cadastrar from './pages/cadastrar';
import Consultar from './pages/consultar';


  
    export default function Navegacao() { 
        return( 
            <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}  />
              <Route path='/cadastrar' element={<Cadastrar />} />
              <Route path='/consultar' element={<Consultar />} />
              
            </Routes>
          </BrowserRouter>  
        )
    }