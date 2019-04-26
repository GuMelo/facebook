import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  margin: 0px 15px;
  padding: 15px 15px;
  border-bottom: 1px solid #e5e5e5;
`;

export const HeaderPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .image img {
    height: 55px;
    width: 55px;
    border-radius: 50%;
    margin: 0 15px 0 0px;
    -webkit-transition: -webkit-transform 0.8s ease-in-out;
    -ms-transition: -ms-transform 0.8s ease-in-out;
    transition: transform 0.5s ease-in-out; /*velocidade do giro*/
    }

    .image img:hover {
      transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
  }

  .header {
    display: flex;
    flex-direction: column;
  }

  .header strong {
    font-size: 13px;
    font-weight: bold;
    color: #4a4a4a;

    padding-bottom: 3px;
  }

  .header small {
    font-size: 11px;
    font-weight: normal;
    color: #b9b9b9;
  }
`;
