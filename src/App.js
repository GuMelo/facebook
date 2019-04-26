import React, { Component } from "react";
import avatarImage1 from "./assets/images/avatar01.png";
import avatarImage2 from "./assets/images/avatar02.png";
import Header from "./components/Header";
import Post from "./components/Post";
import GlobalStyle from "./styles/global";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Gustavo de Melo",
        avatar: avatarImage1,
        time: "há 5 mins",
        comment: "Que legal isso!",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 2,
        name: "Mateus Rato",
        avatar: avatarImage2,
        time: "há 13 mins",
        comment: "Estou apenas estando meus conhecimentos em ReactJs!",
        body:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 3,
        name: "Rafael Ouro 4",
        avatar: avatarImage2,
        time: "há 15 mins",
        comment: "Parabéns!",
        body:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."
      },
      {
        id: 4,
        name: "Felipe Avangers",
        avatar: avatarImage2,
        time: "há 18 mins",
        comment: "Tô aprendendo agora sobre as props!",
        body:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        <GlobalStyle />
        <Header />
        <div>
          {posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </>
    );
  }
}
