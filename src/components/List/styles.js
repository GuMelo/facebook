import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  margin: 0px 15px;
  padding: 20px 10px 10px 0;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  ul li {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 30px;
    padding-left: 10px;
    border-radius: 15px;

    background: #f2f3f5;
    color: #365899;

    strong {
      font-size: 13px;
      font-weight: bold;
    }
    strong:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    p {
      font-size: 13px;
      font-weight: normal;
      color: #333;
    }
  }
`;
