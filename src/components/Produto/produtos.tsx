import React, { useEffect, useState } from 'react';
import ProdutoCard from './productCard';

interface ProdutosProps {
  category: string;
  mainTitle: string;
}

const dataByCategory: Record<string, any[]> = {
  bone: [
    { id: 'bone1', titulo: 'Boné Preto', descricao: 'Boné estiloso preto.', imagem: "/img/bone1.webp" },
    { id: 'bone2', titulo: 'Boné Branco', descricao: 'Boné branco clássico.', imagem: "/img/bone2.webp" },
    { id: 'bone3', titulo: 'Boné Azul', descricao: 'Boné azul casual.', imagem: "/img/bone3.png" }
  ],
  blusa: [
    { id: 'blusa1', titulo: 'Blusa Preta', descricao: 'Blusa confortável.', imagem: "/img/blusa1.webp" },
    { id: 'blusa2', titulo: 'Blusa Estampada', descricao: 'Cheia de estilo.', imagem: "/img/blusa2.png" },
    { id: 'blusa3', titulo: 'Blusa Branca', descricao: 'Clean e básica.', imagem: "/img/blusa3.webp" }
  ],
  caneca: [
    { id: 'caneca1', titulo: 'Caneca Café', descricao: 'Para os cafezeiros.', imagem: "/img/caneca1.jpg" },
    { id: 'caneca2', titulo: 'Caneca Meme', descricao: 'Leve humor pra sua mesa.', imagem: "/img/caneca2.webp" },
    { id: 'caneca3', titulo: 'Caneca Nerd', descricao: 'Para geeks de plantão.', imagem: "/img/caneca3.webp" }
  ],
  variados: [
    { id: 'var1', titulo: 'Boné Azul', descricao: 'Casual e versátil.', imagem: "/img/bone3.png" },
    { id: 'var2', titulo: 'Blusa Estampada', descricao: 'Estilo garantido.', imagem: "/img/blusa2.png" },
    { id: 'var3', titulo: 'Caneca Café', descricao: 'Pra começar o dia.', imagem: "/img/caneca1.jpg" }
  ]
};

const Produtos: React.FC<ProdutosProps> = ({ category, mainTitle}) => {
  //controlar estado dos cards
  const [jsonData, setJsonData] = useState<Record<string, any[]>>(dataByCategory);

  const [produtos, setProdutos] = useState<any[]>([]);

  useEffect(() => {
    setProdutos(dataByCategory[category])
  }, [category]);

    // mapeia os produtos e retorna uma nova versão criada
    const handleUpdate = (id: string, novoTitulo: string, novaDescricao: string) => {
      const atualizados = produtos.map(prod =>
        prod.id === id ? { ...prod, titulo: novoTitulo, descricao: novaDescricao } : prod
      );
      const novoJson = {
        ...jsonData,
        [category]: atualizados
      };
  
      setJsonData(novoJson); 
      console.log("JSON Atualizado:", novoJson);  
      setProdutos(atualizados); 
    };

  return (
    <>
      <div className="row">
        <div className="col-xxl-12">
          <h1>{mainTitle}</h1>
        </div>
      </div>

      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            id={produto.id}
            titulo={produto.titulo}
            descricao={produto.descricao}
            imagem={produto.imagem}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </>
  );
};

export default Produtos;
