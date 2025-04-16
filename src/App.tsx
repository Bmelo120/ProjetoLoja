import '@fortawesome/fontawesome-free/css/all.min.css';
import Produtos from './components/Produto/produtos';
import { useEffect, useState } from 'react';
import NavBar from './components/navbar';
import Cursos from './components/Curso/cursos';
import { Modal } from './components/modal';



const App: React.FC = () => {
  const [ selectProduct, setSelectProduct ] = useState("bone");
  const [ selectCurse,setSelectCurse ] = useState("tecnologia")
  const [ menuOrder, setMenuOrder ] = useState(["Produtos", "Cursos"]);
  const [tituloProduto, setTituloProduto] = useState("Elemento Ordenável");
  const [tituloCurso, setTituloCurso] = useState("Elemento Ordenável");

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("meusDados");
    if (dadosSalvos) {
      const dados = JSON.parse(dadosSalvos);
      if (dados.menuOrder) setMenuOrder(dados.menuOrder);
      if (dados.tituloProduto) setTituloProduto(dados.tituloProduto);
      if (dados.tituloCurso) setTituloCurso(dados.tituloCurso);
      if (dados.selectCurse) setSelectCurse(dados.selectCurse);
      if (dados.selectProduct) setSelectProduct(dados.selectProduct);
    }
  }, []);
  

  function salvarDados( dados: { menuOrder: string[]; tituloProduto: string; tituloCurso: string; selectCurse: string; selectProduct:string}){
    localStorage.setItem("meusDados", JSON.stringify(dados));
    alert("Layout salvo com sucesso!")
  }

  return (
    <div id="page-top">
      <div id="wrapper">
        <NavBar 
          onSelectProduct={setSelectProduct}
          onSelectCurse={setSelectCurse}
          menuOrder={menuOrder}
          setMenuOrder={setMenuOrder}
          onSalvar={()=> salvarDados({
            menuOrder,
            tituloCurso,
            tituloProduto,
            selectCurse,
            selectProduct
          })}/>
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <div className="container-fluid">
            <h3 className="text-dark mb-4">Elementos</h3>
            <Modal
                onTituloProduct={(titulo) => setTituloProduto(titulo)}
                onTituloCurse={(titulo) => setTituloCurso(titulo)}
              />
            <Produtos category={selectProduct} mainTitle={tituloProduto}/>
            <Cursos category={selectCurse}  mainTitle={tituloCurso}/>
          </div>
           <div className="my-3 text-center ">
            <a className="btn btn-primary btn-lg me-2 align-middle" role="button" href="#">
              UP </a>
            </div>
        </div>
        <footer className="bg-white sticky-footer">
          <div className="container my-auto">
            <div className="text-center my-auto copyright"><span>Teste Montink © Barbara G Melo</span></div>
          </div>
        </footer>
      </div>
    </div>
  </div>
  )
}

export default App
