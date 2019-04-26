import React from "react";
import Comments from "../Comments";
import PostHeader from "../PostHeader";
import { Container } from "./styles";

const Post = props => (
  <>
    <Container>
      <div className="post">
        <PostHeader
          {...props}
          // avatar={props.avatar}
          // name={props.name}
          // time={props.time}
        />
        <p>{props.body}</p>
      </div>
      <Comments {...props} />
    </Container>
  </>
);

export default Post;
