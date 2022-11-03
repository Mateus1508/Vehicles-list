import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { DefaultInput } from '../../components/Input/styles';
import Navigate from '../../components/Navigate';
import { DefaultBtn } from '../../components/Button/styles';
import { FormBox, FormContainer, CarsGrid } from './styles';
import { Title } from '../../components/Title/styles';

const AddVehicle = () => {
    const [newListCars, setNewListCars] = useState([]);
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
      let newList = [];
      newList.push(data);
      setNewListCars(newList);
      localStorage.setItem('newListCars', JSON.stringify(newList));
    };
    
    useEffect(() => {
        const List = localStorage.getItem('newListCars');
        setNewListCars(JSON.parse(List));
    }, []);
    
    return ( 
        <FormContainer>
            <Navigate />
            <Title>Registre um novo Veículo</Title>
            <div>
                <FormBox onSubmit={handleSubmit(onSubmit)} >
                    <DefaultInput name="id" type="hidden" value={uuidv4()} {...register('id')} />

                    <label htmlFor="marca_nome">Marca</label>
                    <DefaultInput name="marca_nome" type="text" {...register('marca_nome')} />

                    <label htmlFor="nome_modelo">Modelo</label>
                    <DefaultInput name="nome_modelo" type="text" {...register('nome_modelo')} />
                    
                    <label htmlFor="ano">Ano de fabricação</label>
                    <DefaultInput name="ano" type="text" {...register('ano')} />
                    
                    <label htmlFor="combustivel">Combustível</label>
                    <DefaultInput name="combustivel" type="text" {...register('combustivel')} />
                    
                    <label htmlFor="num_portas">Quantidade de portas</label>
                    <DefaultInput name="num_portas" type="text" {...register('num_portas')} />
                    
                    <label htmlFor="valor_fipe">Valor na tabela FIPE</label>
                    <DefaultInput name="valor_fipe" type="number" {...register('valor_fipe')} />
                    
                    <label htmlFor="cor">Cor</label>
                    <DefaultInput name="cor" type="text" {...register('cor')} /> 

                    <DefaultInput name="timestamp_cadastro" type="hidden" {...register('timestamp_cadastro')} value={Date.now()} /> 

                    <DefaultBtn type='submit'>Enviar</DefaultBtn>
                </FormBox>
                {newListCars != null ? <CarsGrid>
                    <h2>Novos veículos</h2>
                    {newListCars.map((item,index) => (
                            <ul key={item.id}>
                                <h4>Veículo {index + 1}</h4>
                                <li>Modelo: {item.nome_modelo}</li>
                                <li>Marca: {item.marca_nome}</li>
                                <li>Ano: {item.ano}</li>
                                <li>Combustível: {item.combustivel}</li>
                                <li>Quantidade de portas: {item.num_portas}</li>
                                <li>Valor Fipe: {item.valor_fipe}</li>
                                <li>Cor: {item.cor}</li>
                            </ul>
                    ))}
                </CarsGrid>
                :
                <></>
                }
            </div>
        </FormContainer>
     );
}
 
export default AddVehicle;