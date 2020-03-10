import { PostDB } from "../../../data/postDataBase";
import { Post, PostType } from "../../entities/post";
import { InvalidParameterError } from "../../error/InvalidParameterError";
import { v4 } from "uuid";

export class CreatePostUC {
  constructor(private db: PostDB) {}

  public async execute(input: CreatePostUCInput): Promise<CreatePostUCOutput> {
    const id = v4();
    let type = PostType.normal;
    if (input.type === "event") {
      type = PostType.event;
    } else if (input.type !== "normal") {
      throw new InvalidParameterError("Invalid type");
    }

    const post = new Post(
      id,
      input.title,
      input.content,
      type,
      input.userId,
      input.image
    );

    await this.db.createPost(post);

    return {
      message: "Post created successfully"
    };
  }
}

export interface CreatePostUCInput {
  title: string;
  content: string;
  type: string;
  userId: string;
  image?: string;
}

export interface CreatePostUCOutput {
  message: string;
}

/* RESPOSTAS DO EXERCÍCIO:
(i) Quais são os tipos de Posts possíveis nessa aplicação? Como eles são representados no código?
R: normal e event. Eles aparecem na classe Post da entidade post.ts, e também na função do usecase.

(ii) Quais validações a criação de posts faz? Como o erro é tratado nesses casos?
R: Verifica o tipo de post, se não for normal nem event, retorna um erro de parâmetro inválido com mensagem de tipo inválido

(iii) Abra o arquivo `BaseDataBase.ts`. Por que essa classe é abstrata? O que ela guarda de importante com ela?
R: Ela é abstrata por não executar nada, só serve como referência pra outras classes, ela provê os dados de acesso ao banco de dados

(iv) O que essa linha faz `const createPostUC = new CreatePostUC(new PostDB());`  no arquivo `createPostEndpoint.ts`?
R: Essa é a função que dá início a criação de um novo post por um usuário. Ela espera receber título, conteúdo, tipo, Id do usuário e imagem

(v) No `CreatePostUC` do arquivo `createPost.ts`, nós criamos uma variável `const post = new Post(...)`. Por que isso é necessário?
R: Porque ele precisa passar os dados inseridos pelo usuário para o novo post que está sendo criado.

(vi) De onde vem o `input` da classe `CreatePostUC`?
R: das informações passadas pelo usuário que está criando o post.

(vii) Na classe `PostDB` a função `createPost` recebe um `post`. De onde vem esse `post`?
R: vem da entidade post.ts que tem toda a estrutura dos posts do projeto todo.

(viii) Por que há um ternário para criar a query na função `createPost`? O que aconteceria se não existisse?
R: Para, além de verificar o tipo do post, poder passar o erro pra frente caso ele aconteça. Se não existisse seria
mais difícil identificar o erro quando ele acontecesse.
*/