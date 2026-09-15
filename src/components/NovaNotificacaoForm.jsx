import { useState } from "react";
import Button from "./Button";

function NovaNotificacaoForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [canal, setCanal] = useState("PUSH");

  function handleSubmit(e) {
    e.preventDefault();
    if (!titulo.trim()) return;

    onAdicionar({
      id: Date.now(),
      canal,
      hora: new Date().toLocaleTimeString().slice(0, 5),
      titulo,
      texto,
      lida: false,
    });

    setTitulo("");
    setTexto("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-sm font-bold text-gray-700 mb-1">Nova Notificação</h2>
      
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título da notificação"
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary text-gray-900"
      />
      
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Texto descritivo"
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm h-20 resize-none focus:outline-none focus:border-primary text-gray-900"
      />

      <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-2 items-center">
          <label className="text-xs font-semibold text-gray-500">Canal:</label>
          <select 
            value={canal} 
            onChange={(e) => setCanal(e.target.value)}
            className="border border-gray-200 rounded-md p-1 text-xs bg-white text-gray-700"
          >
            <option value="PUSH">Push</option>
            <option value="EMAIL">E-mail</option>
          </select>
        </div>
        
        <Button variant="destaque">Adicionar notificação</Button>
      </div>
    </form>
  );
}

export default NovaNotificacaoForm;
