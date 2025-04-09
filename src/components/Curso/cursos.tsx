import React, { useEffect, useState } from 'react';
import ElementoCard from './curseCard';

interface CursosProps {
  category: string;
  mainTitle: string;
}

const cursosByCategory: Record<string, any[]> = {
    tecnologia: [
      { id: 'tec 1', titulo: 'Programação PHP', valor: '$30,00', iconeClasse: 'fas fa-calendar' },
      { id: 'tec 2', titulo: 'Programação C#', valor: '$34,90', iconeClasse: 'fas fa-calendar' },
      { id: 'tec 3',titulo: 'Programação JS', valor: '$29,90', iconeClasse: 'fas fa-calendar' },
      { id: 'tec 4', titulo: 'Programação OO',valor: '$19,90', iconeClasse: 'fas fa-calendar' },
    ],
    culinaria: [
      { id: 'cul 1', titulo: 'Culinária Saudável',valor: '$40,00', iconeClasse: 'fas fa-calendar' },
      { id: 'cul 2', titulo: 'Cozinha Profissional',valor: '$29,90', iconeClasse: 'fas fa-calendar' },
      { id: 'cul 3', titulo: 'Tempero é Para Todo Mundo',valor: '$39,90', iconeClasse: 'fas fa-calendar' },
      { id: 'cul 4', titulo: 'Produção Cerveja Artesanal',valor: '$34,90', iconeClasse: 'fas fa-calendar' },
    ],
    desing: [
      { id: 'des 1',titulo: 'UX/UI basico', valor: '$50,00', iconeClasse: 'fas fa-calendar' },
      { id: 'des 2', titulo: 'Storytelling Básico',valor: '$34,90', iconeClasse: 'fas fa-calendar' },
      { id: 'des 3', titulo: 'Redes Sociais',valor: '$46,90', iconeClasse: 'fas fa-calendar' },
      { id: 'des 4', titulo: 'Trafego Pago',valor: '$50,00', iconeClasse: 'fas fa-calendar' },
    ]
};

const Cursos: React.FC<CursosProps> = ({ category, mainTitle }) => {
  //controlar estado dos cards
  const [jsonData, setJsonData] = useState<Record<string, any[]>>(cursosByCategory);

  const [cursos, setCursos] = useState<any[]>([]);

  useEffect(() => {
    setCursos(cursosByCategory[category])
  }, [category]);

  // mapeia os cursos e retorna uma nova versão criada
  const handleUpdate = (id: string, novoTitulo: string, novoValor: string) => {
    const updated = cursos.map(card =>
      card.id === id ? { ...card, titulo: novoTitulo, valor: novoValor } : card
    );
    const newJason = {
      ...jsonData,
      [category]: updated
    };

    setJsonData(newJason); 
    console.log("JSON Atualizado:", newJason);  
    setCursos(updated); 
  };

  return (
    <div className="row mt-4">
      <div className="col-xxl-12">
        <h1>{mainTitle}</h1>
      </div>
      {cursos.map((item) => (
        <ElementoCard
          key={item.id}
          id={item.id}
          titulo={item.titulo}
          valor={item.valor}
          iconeClasse={item.iconeClasse}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default Cursos;
