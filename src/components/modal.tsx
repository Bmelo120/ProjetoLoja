import React, { useState } from "react";


interface ModalProps {
  onTituloProduct: (tituloProduto: string) => void;
  onTituloCurse: (tituloCurso: string) => void;
}

export const Modal: React.FC<ModalProps> = ({ onTituloProduct, onTituloCurse}) => {
  const [tituloProduto, setTituloProduto] = useState('');
  const [tituloCurso, setTituloCurso] = useState('');

  const handleSalvar = () => {
    onTituloProduct(tituloProduto);
    onTituloCurse(tituloCurso)
  };

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal de Configurações</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <small>
                Os campos devem ser referentes ao conteúdo dos Elementos
                editáveis do bloco escolhido.
              </small>
              <form className="mt-4">
                <div className="mb-3">
                  <label htmlFor="tituloInput" className="form-label">Primeiro título</label>
                  <input type="text" className="form-control" value={tituloProduto} onChange={(e) => setTituloProduto(e.target.value)} id="tituloInput"
                    aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="tituloInput2" className="form-label">Segundo titulo</label>
                  <input type="text" className="form-control" value={tituloCurso} onChange={(e) => setTituloCurso(e.target.value)} id="titulpInput2"
                    aria-describedby="emailHelp" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSalvar}>Salvar Alterações</button>
            </div>
          </div>
        </div>
      </div>
    )
}