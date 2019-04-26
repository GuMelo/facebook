import React from "react";
import { Container, HeaderPost } from "./styles";

const PostHeader = ({ avatar, name, time }) => (
  <Container>
    <HeaderPost>
      <div className="image">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="header">
        <strong>{name}</strong>
        <small>{time}</small>
      </div>
    </HeaderPost>
  </Container>
);

export default PostHeader;
