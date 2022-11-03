import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigateBtn } from '../Button/styles';


const Navigate = () => {
  const navigate = useNavigate();

  return ( 
    <nav>
    <NavigateBtn onClick={() => navigate('/')}>Início</NavigateBtn>
    <NavigateBtn onClick={() => navigate('/addnew')}>Novo Veículo</NavigateBtn>
    <NavigateBtn onClick={() => navigate('/list')}>Lista de Veículos</NavigateBtn>
    </nav>
   );
}
 
export default Navigate;