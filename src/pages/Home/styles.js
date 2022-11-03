import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
  padding: 20px;
  section {
    margin: 10px;
  }
`

export const Nav = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`

export const GridVehicles = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 70vh;
  width: 30vw;
  border: 1px solid #fff;
  overflow-y: auto;
  li {
        color: #ffff;
        list-style: none;
        border: 1px solid #ffff;
        width: 300px;
        padding: 5px;
    }
`