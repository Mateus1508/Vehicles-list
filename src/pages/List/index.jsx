import React from 'react';
import { Container } from './styles';
import ListVehicles from '../../components/ListVehicle';
import Navigate from '../../components/Navigate';

const List = () => {



    return ( 
        <Container>
            <Navigate />
            <h1>Lista de Veículos</h1>
            <ListVehicles />
        </Container>
     );
}
 
export default List;