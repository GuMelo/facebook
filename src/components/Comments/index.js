import React from "react";
import { Container } from "./styles";
import iconLike from "../../assets/images/like.svg";
import iconComment from "../../assets/images/comment.svg";
import iconShare from "../../assets/images/share.svg";
import List from "../List";

const Comments = ({ props, avatar }) => (
  <Container>
    <div className="buttons">
      <button className="like">
        <img src={iconLike} alt="Like" />
        Curtir
      </button>
      <button>
        <img src={iconComment} alt="Comment" />
        Comentar
      </button>
      <button>
        <img src={iconShare} alt="Share" />
        Compartilhar
      </button>
    </div>

    <List />

    <div className="inputs">
      <img src={avatar} alt="avatar" />
      <input id="comentario" placeholder="Escreva um comentário..." />
    </div>
  </Container>
);
export default Comments;
