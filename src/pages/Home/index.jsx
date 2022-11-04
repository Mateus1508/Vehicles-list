import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import {Container, GridVehicles, Nav} from './styles';
import Navigate from '../../components/Navigate';

const Home = () => {
    const [cars, setCars] = useState([]);

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

    const oldVehicles = cars.filter(item => item.ano < 2005);

    const cheapVehicles = cars.sort((a,b) => {
      if(a.valor_fipe < b.valor_fipe) {
        return -1;
      } else {
        return true;
      }
    });
    const resultCheapVehicles = cheapVehicles.slice(0,3);

    const newVehicles = cars.sort((a,b) => {
      if(a.timestamp_cadastro > b.timestamp_cadastro) {
        return -1;
      } else {
        return true;
      }
    });
    const resultNewVehicles = newVehicles.slice(0,5);

    return ( 
      <Container>
          <Nav>
            <Navigate />
          </Nav>
            <section>
                <h2>Novos carros</h2>
                <GridVehicles>
                  {resultNewVehicles.map((item, index) => (
                    <ul key={index}>
                    <h4>Veículo {index + 1}</h4>
                    <li>Marca: {item.marca_nome}</li>
                    <li>Modelo: {item.nome_modelo}</li>
                    <li>Ano: {item.ano}</li>
                    <li>Combustível: {item.combustivel}</li>
                    <li>Quantidade de portas: {item.num_portas}</li>
                    <li>Valor Fipe: {item.valor_fipe}</li>
                    <li>Cor: {item.cor}</li>
                    <li>Timestamp do cadastro: {item.timestamp_cadastro} </li>
                  </ul>
                  ))}
                </GridVehicles>
            </section>
            <section>
                <h2>Carros antigos</h2>
                <GridVehicles>
                  {oldVehicles.map((item, index) => (
                    <ul key={index}>
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
                </GridVehicles>
            </section>
            <section>
                <h2>Carros em promoção</h2>
                <GridVehicles>
                  {resultCheapVehicles.map((item, index) => (
                    <ul key={index}>
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
                </GridVehicles>
            </section>
            
        </Container>
     );
}
 
export default Home;
