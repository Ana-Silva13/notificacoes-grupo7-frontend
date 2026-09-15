import { useState } from "react";
import FilterBar from "./components/FilterBar";
import NotificationList from "./components/NotificationList";
import NovaNotificacaoForm from "./components/NovaNotificacaoForm";

const notificacoesIniciais = [
  {
    id: 1,
    canal: "PUSH",
    hora: "14:32",
    titulo: "Inscrição confirmada",
    texto: "Seu lugar está garantido.",
    lida: false,
  },
  {
    id: 2,
    canal: "EMAIL",
    hora: "13:10",
    titulo: "Evento amanhã",
    texto: "Não esqueça o notebook.",
    lida: true,
  },
];

function App() {
  const [filtro, setFiltro] = useState("todas");
  const [notificacoes, setNotificacoes] = useState(notificacoesIniciais);

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
      
      {/* Formulário de Envio */}
      <NovaNotificacaoForm onAdicionar={adicionarNotificacao} />
      
      {/* Filtros Inteligentes */}
      <FilterBar filtroAtual={filtro} onFiltroChange={setFiltro} />
      
      {/* Lista Renderizada */}
      <NotificationList notificacoes={notificacoesVisiveis} />
    </div>
  );
}

export default App;

