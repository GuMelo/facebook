import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;

  background: #3e5c9a;
  box-shadow: 0 1px 3px #b4b4b4;

  h1 {
    display: flex;
    align-items: center;

    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
  h1:hover {
    -webkit-animation: swing 1s ease;
    animation: swing 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  /* Transação de chacoalhar as letras da horizontal */
  @-webkit-keyframes swing {
    15% {
      -webkit-transform: translateX(5px);
      transform: translateX(5px);
    }
    30% {
      -webkit-transform: translateX(-5px);
      transform: translateX(-5px);
    }
    50% {
      -webkit-transform: translateX(3px);
      transform: translateX(3px);
    }
    65% {
      -webkit-transform: translateX(-3px);
      transform: translateX(-3px);
    }
    80% {
      -webkit-transform: translateX(2px);
      transform: translateX(2px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes swing {
    15% {
      -webkit-transform: translateX(5px);
      transform: translateX(5px);
    }
    30% {
      -webkit-transform: translateX(-5px);
      transform: translateX(-5px);
    }
    50% {
      -webkit-transform: translateX(3px);
      transform: translateX(3px);
    }
    65% {
      -webkit-transform: translateX(-3px);
      transform: translateX(-3px);
    }
    80% {
      -webkit-transform: translateX(2px);
      transform: translateX(2px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
`;
