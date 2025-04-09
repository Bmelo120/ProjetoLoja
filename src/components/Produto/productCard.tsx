import { Pencil } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface ProductCardProps {
  titulo: string;
  descricao: string;
  imagem: string;
  id: string;
  onUpdate: (id: string, titulo: string, descricao: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ titulo, descricao, imagem, id, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tituloEdit, setTituloEdit] = useState(titulo);
  const [descricaoEdit, setDescricaoEdit] = useState(descricao);

  useEffect(() => { 
    setTituloEdit(titulo);
    setDescricaoEdit(descricao);
  }, [titulo, descricao])

  const handleSave = () => {
    onUpdate(id, tituloEdit, descricaoEdit);
    setIsEditing(false);
  };

  return (
    <div className="col-xxl-3" onDoubleClick={() => setIsEditing(true)}>
      <div className="card">
        <img
          className="card-img-top w-100 d-block fit-cover"
          style={{ height: 200 }}
          src={imagem}
          alt={titulo}
        />
        <a href="#" className="card-body p-4 pe-visiblePainted">
          <p className="text-primary card-text mb-0">Produto
          </p>
          {isEditing ? (
            <>
              <input
                type="text"
                className="form-control mb-2"
                value={tituloEdit}
                onChange={(e) => setTituloEdit(e.target.value)}
              />
              <textarea
                className="form-control mb-2"
                value={descricaoEdit}
                onChange={(e) => setDescricaoEdit(e.target.value)}
              />
              <button className="btn btn-success w-100" onClick={handleSave}>Salvar</button>
            </>
          ) : (
          <>
          <div className="d-flex justify-content-between align-items-center">
          <h4 className="card-title">{titulo}</h4>          
            <Pencil
            size={18}
            className="text-muted hover-icon "
            />
          </div>
            <p className="card-text">{descricao}</p>
            <button className="btn btn-primary" type="button" style={{ width: "100%" }}>
              Comprar
            </button>
          </>
      )}
      </a>
    </div>
    </div>
  );
};

export default ProductCard;
