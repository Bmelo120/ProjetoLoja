import React, { useState } from "react";

interface NavBarProps {
  onSelectProduct: (product: string) => void;
  onSelectCurse: (curse: string) => void;
  menuOrder: string[];
  setMenuOrder: React.Dispatch<React.SetStateAction<string[]>>;
  onSalvar: () => void;
}


const NavBar: React.FC<NavBarProps> = ({ onSelectProduct, onSelectCurse, menuOrder, setMenuOrder, onSalvar }) => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  //armazena o indece
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  //para soltar
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  //remove da posição original e solta na nova
  const handleDrop = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return;

    const novaOrdem = [...menuOrder];
    const [removido] = novaOrdem.splice(draggedIndex, 1);
    novaOrdem.splice(index, 0, removido);

    setMenuOrder(novaOrdem);
    setDraggedIndex(null);
  };

  const renderMenuItem = (menu: string) => {
    switch (menu) {
      case "Produtos":
        return (
          <div className="nav-item dropdown" style={{ padding: "15px" }}>
            <a
              aria-expanded="true"
              type="button"
              data-bs-toggle="dropdown"
              className="dropdown-toggle link-light"
              href="#"
            >
              <i className="fas fa-grip-horizontal icon-draggable"></i>
              Produtos
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#" onClick={() => onSelectProduct("bone")}>Boné</a>
              <a className="dropdown-item" href="#" onClick={() => onSelectProduct("caneca")}>Caneca</a>
              <a className="dropdown-item" href="#" onClick={() => onSelectProduct("blusa")}>Blusa</a>
              <a className="dropdown-item" href="#" onClick={() => onSelectProduct("variados")}>Variados</a>
            </div>
          </div>
        );
      case "Cursos":
        return (
          <div className="nav-item dropdown" style={{ padding: "15px" }}>
            <a
              aria-expanded="true"
              type="button"
              data-bs-toggle="dropdown"
              className="dropdown-toggle link-light"
              href="#"
            >
              <i className="fas fa-grip-horizontal icon-draggable"></i>
               Cursos
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#" onClick={() => onSelectCurse("tecnologia")}>Tecnologia</a>
              <a className="dropdown-item" href="#" onClick={() => onSelectCurse("culinaria")}>Culinaria</a>
              <a className="dropdown-item" href="#" onClick={() => onSelectCurse("desing")}>Desing</a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary navbar-dark" style={{ width: "300px !important", minWidth: "300px" }}>
      <div className="container-fluid d-flex flex-column p-0">
        <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
          <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-layer-group"></i></div>
          <div className="sidebar-brand-text mx-3"><span>CAMADAS</span></div>
        </a>
        <hr className="sidebar-divider my-0" />
        <ul className="navbar-nav text-light" id="accordionSidebar">
          <li className="nav-item">
            {menuOrder.map((menu, index) => (
              <div
                key={menu}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(index)}
              >
                {renderMenuItem(menu)}
              </div>
            ))}
            <div className="nav-item" style={{ padding: "15px" }}>
              <button type="button" className="btn btn-success text-light fw-bold" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Modelo de Modal de Componente
              </button>
            </div>
            <div className="nav-item" style={{ padding: "15px" }}>
              <button type="button" className="btn btn-dark col-12 text-light fw-bold" onClick={onSalvar}>
                Salvar Layout
              </button>
            </div>

          </li>
          <li className="nav-item"></li>
        </ul>
        <div className="text-center d-none d-md-inline"></div>
      </div>
    </nav>
  )
}

export default NavBar;