import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    li {
        color: #ffff;
        list-style: none;
        border: 1px solid #ffff;
        width: 300px;
        padding: 5px;
    }
    label {
        margin: 0 5px;
    }
    input {
        padding: 10px;
        width: 300px;
        font-size: 14px;
    }
    section {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;
    }
`

export const ListBox = styled.div`
        margin: 10px 0;
        height: max-content;
        color: #ffff;
        border: 1px solid #fff;
        display: flex;
        width: 90vw;
        height: 70vh;
        justify-content: center;
        flex-wrap: wrap;
        overflow-y: auto !important;
`