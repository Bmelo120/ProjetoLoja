import React, { useEffect, useState } from 'react';

interface curseCardProps {
  titulo: string;
  valor: string;
  iconeClasse: string;
  id: string;
  onUpdate: (id: string, titulo: string, valor: string) => void;
}

const curseCard: React.FC<curseCardProps> = ({ titulo, valor, iconeClasse, id, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tituloEdit, setTituloEdit] = useState(titulo);
  const [valorEdit, setValorEdit] = useState(valor);

  useEffect(() => {
    setTituloEdit(titulo);
    setValorEdit(valor);
  }, [titulo, valor])

  const handleSave = () => {
    onUpdate(id, tituloEdit, valorEdit);
    setIsEditing(false);
  };

  return (
    <div className="col-md-6 col-xl-3 mb-4" onDoubleClick={() => setIsEditing(true)}>
      <div className="card shadow border-left-primary py-2">
        <div className="card-body">
          <div className="row g-0 align-items-center">
            <div className="col me-2">
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
                    value={valorEdit}
                    onChange={(e) => setValorEdit(e.target.value)}
                  />
                  <button className="btn btn-success w-100" onClick={handleSave}>Salvar</button>
                </>
              ) : (
                <>
                  <div className="text-uppercase text-primary fw-bold text-xs mb-1">
                    <span>{titulo}</span>
                  </div>
                  <div className="text-dark fw-bold h5 mb-0">
                    <span>{valor}</span>
                  </div>
                </>
              )}
            </div>
            <div className="col-auto">
              <i className={`${iconeClasse} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default curseCard;
