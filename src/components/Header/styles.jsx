import styled from 'styled-components'

export const DivPai = styled.div`
    width: 100vw;
    max-width: 100vw;
    background: #efefef;
    box-shadow: 0 1px 3px 1px grey;
    height: 60px;

    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: space-between;
  
    @media screen and (max-width: 770px){
        justify-content: space-between;
    }
`