import { useEffect, useState } from "react";
import { API_URL } from "./config";
import FilterBar from "./components/FilterBar";
import NotificationList from "./components/NotificationList";
import NovaNotificacaoForm from "./components/NovaNotificacaoForm";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [filtro, setFiltro] = useState("todas");
  const [notificacoes, setNotificacoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );

  useEffect(() => {
    async function buscar() {
      try {
        const resposta = await fetch(`${API_URL}/notificacoes`);

        if (!resposta.ok) {
          throw new Error("Não foi possível carregar as notificações.");
        }

        const dados = await resposta.json();
        setNotificacoes(dados);
        setErro(null);
      } catch (error) {
        setErro(error.message || "Erro ao buscar notificações.");
      } finally {
        setCarregando(false);
      }
    }

    buscar();
  }, []);

  // Filtra dinamicamente sem alterar a lista original (Derivação de estado)
  const notificacoesVisiveis = notificacoes.filter((n) => {
    if (filtro === "todas") return true;
    if (filtro === "push") return n.canal === "PUSH";
    if (filtro === "email") return n.canal === "EMAIL";
    return false;
  });

  // Adiciona um item criando um array totalmente novo (Imutabilidade)
  function adicionarNotificacao(nova) {
    setNotificacoes((atual) => [nova, ...atual]);
  }

  return (
    <div className="max-w-2xl mx-auto p-4 min-h-screen bg-gray-50/50">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Central de Notificações</h1>

      {carregando && (
        <p className="text-sm text-gray-500 mb-4">Carregando notificações...</p>
      )}

      {erro && (
        <p className="text-sm text-red-600 mb-4">{erro}</p>
      )}

      {/* Formulário de Envio */}
      <NovaNotificacaoForm onAdicionar={adicionarNotificacao} />

      {/* Filtros Inteligentes */}
      <FilterBar filtroAtual={filtro} onFiltroChange={setFiltro} />

      {/* Estados da listagem */}
      {carregando ? (
        <p className="text-sm text-gray-500 mt-4">Carregando notificações...</p>
      ) : erro ? (
        <p className="text-sm text-red-600 mt-4">{erro}</p>
      ) : (
        <NotificationList notificacoes={notificacoesVisiveis} />
      )}
    </div>
  );
}