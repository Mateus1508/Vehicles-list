import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-items: center;
    div {
        display: flex;
        flex-wrap: wrap;
    }
    `
export const CarsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 60vw;
    justify-content: space-around;
    height: 80vh;
    border: 1px solid #fff;
    overflow-Y: auto;
    h2{
        width: 100%;
        display: flex;
        text-align: center;
        align-items: center;
        height: max-content;
        justify-content: center;
        padding: 5px 0;
        margin: 0;
        border-bottom: 1px solid #fff;
    }
    li {
        color: #ffff;
        list-style: none;
        border: 1px solid #ffff;
        width: 300px;
        padding: 5px;
    }
`

export const FormBox = styled.form`
    display: flex;
    margin: 0 20px;
    padding: 1rem 3rem;
    border-radius: 8px;
    flex-direction: column;
    background-color: #2b2d42;
    width: max-content;
    height: max-content;
    label {
        margin: 5px 0;
        font-style: bold;
        font-weight: 600;
    }
`