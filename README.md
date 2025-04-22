# 🧾 Documentação dos Componentes

## 📌 Link - https://projeto-loja-navy.vercel.app/

## APP.tsx

Componente principal da aplicação.
useEffect - Ao montar o componente, carrega os dados previamente salvos do localStorage.
salvarDados() - Persiste os dados principais no localStorage com a chave "meusDados".
Gerencia os estados e renderiza os componentes.

## Produto e Curso

Componente de listagem de produtos/curso , ela é baseada em um objeto que armazena as categorias como chaves e arrays como valores. Esse objeto inicial serve como base para os estados dinâmicos manipulados pelo componente. A lógica de edição é controlada localmente, utilizando estados com useState e useEffect. Assim armazena os produtos em estado local, renderiza uma lista de ProdutoCard / CursoCard e fornece a função onUpdate para que cada card possa atualizar seus dados.

## CARDS (productCard e cursoCard)

Este componente representa um card individual, com a possibilidade de edição inline de título, descrição e valor. Ele recebe as informações do componente pai  por meio de props. Cada vez que o usuário dá um duplo clique no card, ele entra no modo de edição.
A comunicação entre eles segue o padrão pai-filho, onde o card apenas dispara a atualização, e o componente pai aplica a modificação no estado global.

## NAVBAR

Componente responsável pela navegação lateral do sistema, oferecendo opções de produtos e cursos. Renderiza os itens de menu com base em menuOrder, permitindo arrastar e soltar para reorganizar. Cada item abre um dropdown com categorias específicas (produtos ou cursos) e Oferece botões extras para abrir um modal genérico e para salvar o layout atual.

## MODAL

Modal de configurações que permite editar os títulos associados aos elementos do layout selecionado (produto e curso). Ao clicar em Salvar Alterações, os valores digitados são enviados para o componente pai salvando no localStorage.
