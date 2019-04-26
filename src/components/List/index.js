import React from "react";
import { Container } from "./styles";

const List = ({ comment }) => (
  <Container>
    <ul>
      <li>
        <strong>Gustavo Melo </strong>
        <p>{comment}</p>
      </li>
    </ul>
  </Container>
);

export default List;
