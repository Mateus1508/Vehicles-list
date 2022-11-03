import React, { useEffect, useState } from 'react';
import { DefaultInput } from './../Input/styles';
import { Container, ListBox } from './styles';
import api from '../../services/api';

const ListVehicles = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

    useEffect(() => {
      api
          .get("")
          .then((item) => {
            setCars(item.data);
          })
          .catch((err) => {
            console.error("ops! ocorreu o erro " + err);
          })
    },[]);

    const filteredList = cars
      .filter((item) => 
      item.marca_nome.includes(search.toUpperCase()) 
      || item.nome_modelo.includes(search.toUpperCase())
    );

    return ( 
        <Container>
           <section>
              <label htmlFor="">Selecione por marca ou modelo o veículo que deseja</label>
              <DefaultInput type="text" onChange={e => setSearch(e.target.value)} placeholder="Ex: Fiat" />
           </section>
           <ListBox>
            {filteredList.map((item,index) => (
                <ul>
                  <h4>Veículo {index + 1}</h4>
                  <li>Marca: {item.marca_nome}</li>
                  <li>Modelo: {item.nome_modelo}</li>
                  <li>Ano: {item.ano}</li>
                  <li>Combustível: {item.combustivel}</li>
                  <li>Quantidade de portas: {item.num_portas}</li>
                  <li>Valor Fipe: {item.valor_fipe}</li>
                  <li>Cor: {item.cor}</li>
                </ul>
              ))}
           </ListBox>
        </Container>
     );
}
 
export default ListVehicles;