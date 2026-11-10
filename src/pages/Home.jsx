import { useState, useEffect } from "react";
import { API_URL } from "../config";
import { useAuth } from "../context/AuthContext";

import FilterBar from "../components/FilterBar";
import NotificationList from "../components/NotificationList";
import NovaNotificacaoForm from "../components/NovaNotificacaoForm";

function Home() {
  const { token } = useAuth();
  const [filtro, setFiltro] = useState("todas");
  const [notificacoes, setNotificacoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  async function adicionarNotificacao(nova) {
    const payload = {
      ...nova,
      id: nova.id ?? Date.now(),
    };

    try {
      const resposta = await fetch(`${API_URL}/notificacoes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(payload),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao criar notificação no servidor");
      }

      const notificacaoCriada = await resposta.json();
      setNotificacoes((atual) => [notificacaoCriada, ...atual]);
      setErro(null);
    } catch (error) {
      setNotificacoes((atual) => [payload, ...atual]);
      setErro(null);
    }
  }

  useEffect(() => {
    async function buscar() {
      try {
        const resposta = await fetch(`${API_URL}/notificacoes`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });

        if (!resposta.ok) {
          throw new Error("Erro ao buscar notificações");
        }

        const dados = await resposta.json();
        setNotificacoes(dados);
      } catch (error) {
        setNotificacoes([]);
        setErro(null);
      } finally {
        setCarregando(false);
      }
    }
    buscar();
  }, [token]);

  const notificacoesVisiveis = notificacoes.filter((n) => {
    if (filtro === "todas") return true;
    if (filtro === "push") return n.canal === "PUSH";
    if (filtro === "email") return n.canal === "EMAIL";
    return true;
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Central de Notificações</h1>

      <NovaNotificacaoForm onAdicionar={adicionarNotificacao} />

      <FilterBar filtroAtual={filtro} onFiltroChange={setFiltro} />

      {carregando && <p className="text-gray-500">Carregando notificações...</p>}

      {erro && (
        <p className="text-red-600">Não foi possível carregar as notificações. Tente novamente.</p>
      )}

      {!carregando && !erro && (
        <NotificationList notificacoes={notificacoesVisiveis} />
      )}
    </div>
  );
}

export default Home;
