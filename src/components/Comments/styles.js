import styled from "styled-components";
import iconArrow from "../../assets/images/arrow.svg";

export const Container = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 3px 0px;
    border-bottom: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #787878;
    border: 0;
    background: #fff;
    padding: 0 20px;
    border-radius: 6px;
    transition: all 0.2s;

    cursor: pointer;

    &:hover {
      background: #f3f3f3;
      color: #53a7ea;
      -webkit-transform: scale(1.02);
      -ms-transform: scale(1.02);
      transform: scale(1.02);
    }

    img {
      width: 40px;
      height: 40px;
      padding-right: 15px;
    }
  }

  .inputs {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 20px;

    input {
      width: 400px;
      height: 30px;
      padding-left: 10px;
      padding-right: 40px;

      background: #f5f8fa url(${iconArrow}) no-repeat 370px center;
      background-size: 18px;
      color: #3c3c3c;
      border-radius: 20px;
      border: 1px solid #9a9a9a;
    }

    img {
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }
  }
`;
