// import { useState } from 'react';

// export default function App() {
//   const [currentScreen, setCurrentScreen] = useState('screen1');
//   const [notifications, setNotifications] = useState([
//     { id: 1, title: 'Ingresso Confirmado!', body: 'Sua credencial para o Tech Summit foi emitida.', time: 'Há 5min', read: false },
//     { id: 2, title: 'Lembrete de Abertura', body: 'Os portões do evento abrem em 1 hora.', time: 'Há 30min', read: false },
//     { id: 3, title: 'Atualização de Programação', body: 'Palestra de IA teve alteração de palco.', time: 'Ontem.', read: true },
//   ]);
//   const [filter, setFilter] = useState('todas');
//   const [config, setConfig] = useState({ permissoes: true, sons: true, localizacao: false });

//   return (
//     <div className="min-h-screen w-full bg-app-bg text-zinc-900 flex flex-col">
//       <div className="w-full flex-1 flex flex-col relative overflow-hidden">

//         {/* TELA 1: Install Prompt */}
//         {currentScreen === 'screen1' && (
//           <div className="p-6 md:p-12 h-full flex flex-col justify-between max-w-4xl mx-auto w-full flex-1 animate-fade-in">
//             <div className="flex justify-between items-center pt-2">
//               <span className="text-xl font-bold text-primary">App Notificações</span>
//               <i className="fa-solid fa-bars text-2xl text-zinc-700 cursor-pointer"></i>
//             </div>
//             <div className="flex flex-col items-center justify-center my-auto py-8">
//               <div className="w-24 h-24 bg-[#EAEAEB] rounded-full flex items-center justify-center mb-4 text-[#A1A1AA] text-5xl">
//                 <i className="fa-solid fa-globe"></i>
//               </div>
//               <p className="text-text-gray text-base">Versão Web do Navegador</p>
//             </div>
//             <div className="bg-white rounded-3xl p-6 md:p-8 text-center shadow-md max-w-md mx-auto w-full">
//               <div className="w-16 h-16 bg-primary-bg rounded-2xl inline-flex items-center justify-center text-primary text-3xl mb-4">
//                 <i className="fa-solid fa-mobile-screen-button"></i>
//               </div>
//               <h3 className="text-lg font-bold text-zinc-900 mb-2">Instalar o App Notificações?</h3>
//               <p className="text-xs md:text-sm text-text-gray mb-6">
//                 Acesse mais rápido direto da sua tela inicial e receba alertas sem atrasos.
//               </p>
//               <button 
//                 className="w-full bg-primary text-white py-3.5 rounded-2xl text-sm font-semibold shadow-md active:opacity-85 transition cursor-pointer"
//                 onClick={() => setCurrentScreen('screen2')}
//               >
//                 Instalar Aplicativo
//               </button>
//               <button 
//                 className="bg-transparent border-none text-text-gray text-xs font-semibold mt-4 cursor-pointer block mx-auto"
//                 onClick={() => setCurrentScreen('screen4')}
//               >
//                 Continuar no Navegador Web
//               </button>
//             </div>
//           </div>
//         )}

//         {/* TELA 2: Onboarding */}
//         {currentScreen === 'screen2' && (
//           <div className="p-6 md:p-12 h-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto w-full flex-1 animate-fade-in">
//             <div className="w-20 h-20 bg-primary-bg rounded-full flex items-center justify-center text-primary text-4xl mb-6">
//               <i className="fa-solid fa-bell"></i>
//             </div>
//             <h2 className="text-2xl font-bold text-zinc-900 mb-3">Não Perca Nenhum Alerta</h2>
//             <p className="text-sm text-text-gray max-w-md mb-8 leading-relaxed">
//               Receba atualizações instantâneas sobre confirmação de ingressos, mudanças de horário e avisos importantes.
//             </p>
//             <button 
//               className="w-full max-w-xs bg-primary text-white py-3.5 rounded-2xl text-sm font-semibold shadow-md active:opacity-85 transition cursor-pointer"
//               onClick={() => setCurrentScreen('screen3')}
//             >
//               Ativar Notificações
//             </button>
//             <button 
//               className="bg-transparent border-none text-text-gray text-xs font-semibold mt-4 cursor-pointer"
//               onClick={() => setCurrentScreen('screen4')}
//             >
//               Agora Não
//             </button>
//           </div>
//         )}

//         {/* TELA 3: Modal Nativo */}
//         {currentScreen === 'screen3' && (
//           <div className="p-6 md:p-12 h-full flex flex-col items-center justify-center text-center relative max-w-2xl mx-auto w-full flex-1 animate-fade-in">
//             <div className="w-20 h-20 bg-primary-bg rounded-full flex items-center justify-center text-primary text-4xl mb-6">
//               <i className="fa-solid fa-bell"></i>
//             </div>
//             <h2 className="text-2xl font-bold mb-3">Não Perca Nenhum Alerta</h2>
//             <p className="text-sm text-text-gray max-w-md mb-8">Receba atualizações instantâneas...</p>

//             <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-6 z-50">
//               <div className="bg-white/90 backdrop-blur-xl rounded-3xl w-full max-w-sm text-center overflow-hidden shadow-2xl border border-white/20">
//                 <div className="p-6">
//                   <h3 className="text-base font-semibold text-black mb-2.5">
//                     “App Notificações” gostaria de enviar notificações
//                   </h3>
//                   <p className="text-xs text-zinc-700 leading-snug">
//                     As notificações podem incluir alertas, sons e avisos nos ícones. Elas podem ser configuradas nos ajustes.
//                   </p>
//                 </div>
//                 <div className="flex border-t border-black/15">
//                   <button className="flex-1 py-3.5 bg-transparent border-r border-black/15 text-primary text-sm font-normal cursor-pointer" onClick={() => setCurrentScreen('screen4')}>Não Permitir</button>
//                   <button className="flex-1 py-3.5 bg-transparent text-primary text-sm font-bold cursor-pointer" onClick={() => setCurrentScreen('screen4')}>Permitir</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* TELA 4: Login */}
//         {currentScreen === 'screen4' && (
//           <div className="p-6 md:p-12 h-full flex flex-col items-center justify-center max-w-md mx-auto w-full flex-1 animate-fade-in">
//             <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white text-3xl mb-4">
//               <i className="fa-solid fa-layer-group"></i>
//             </div>
//             <h2 className="text-2xl font-bold text-zinc-900 mb-8">Entrar na sua Conta</h2>

//             <div className="w-full">
//               <div className="mb-5 text-left">
//                 <label className="block text-xs text-text-gray mb-2 font-medium">E-mail</label>
//                 <input type="email" defaultValue="usuario@email.com" className="w-full p-3.5 border border-zinc-200 rounded-xl bg-zinc-100 text-sm outline-none focus:border-primary" />
//               </div>
//               <div className="mb-5 text-left">
//                 <label className="block text-xs text-text-gray mb-2 font-medium">Senha</label>
//                 <input type="password" defaultValue="12345678" className="w-full p-3.5 border border-zinc-200 rounded-xl bg-zinc-100 text-sm outline-none focus:border-primary" />
//               </div>
//               <button 
//                 className="w-full bg-primary text-white py-3.5 rounded-2xl text-sm font-semibold shadow-md active:opacity-85 mt-3 cursor-pointer"
//                 onClick={() => setCurrentScreen('screen5')}
//               >
//                 Entrar
//               </button>
//             </div>
//           </div>
//         )}

//         {/* TELA 5: Dashboard */}
//         {currentScreen === 'screen5' && (
//           <div className="p-6 md:p-12 h-full flex flex-col max-w-5xl mx-auto w-full flex-1 animate-fade-in">
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-2xl md:text-3xl font-bold">Olá, Ana 👋</h2>
//               <div className="relative text-2xl cursor-pointer" onClick={() => setCurrentScreen('screen6')}>
//                 <i className="fa-regular fa-bell"></i>
//                 {notifications.length > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
//                     {notifications.length}
//                   </span>
//                 )}
//               </div>
//             </div>

//             <div className="bg-primary-light p-6 md:p-8 rounded-3xl text-white mb-8 shadow-md">
//               <span className="bg-white/25 text-[10px] px-2.5 py-1 rounded font-bold tracking-wider">PRÓXIMO EVENTO</span>
//               <h3 className="text-xl md:text-2xl font-bold my-3">Tech Summit 2026</h3>
//               <p className="text-xs md:text-sm opacity-90 flex items-center gap-2">
//                 <i className="fa-regular fa-calendar"></i>
//                 Amanhã às 14:00
//               </p>
//             </div>

//             <h3 className="text-base font-semibold text-zinc-900 mb-4">Ações Rápidas</h3>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="bg-card-gray rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-3 cursor-pointer text-zinc-800 font-semibold hover:bg-zinc-300 transition" onClick={() => setCurrentScreen('screen6')}>
//                 <i className="fa-solid fa-ticket text-3xl"></i>
//                 <span>Ingressos</span>
//               </div>
//               <div className="bg-card-gray rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-3 cursor-pointer text-zinc-800 font-semibold hover:bg-zinc-300 transition" onClick={() => setCurrentScreen('screen8')}>
//                 <i className="fa-solid fa-gear text-3xl"></i>
//                 <span>Ajustes</span>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* TELA 6: Lista Notificações */}
//         {currentScreen === 'screen6' && (
//           <div className="p-6 md:p-12 h-full flex flex-col max-w-4xl mx-auto w-full flex-1 animate-fade-in">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl md:text-2xl font-bold text-zinc-900">Notificações</h2>
//               <button className="bg-transparent border-none text-primary text-sm font-bold cursor-pointer" onClick={() => setNotifications([])}>
//                 Limpar Tudo
//               </button>
//             </div>

//             <div className="flex gap-2 mb-6">
//               {['todas', 'lidas', 'naoLidas'].map((f) => (
//                 <button
//                   key={f}
//                   className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold capitalize cursor-pointer transition ${
//                     filter === f ? 'bg-primary-bg text-primary' : 'bg-card-gray text-text-gray'
//                   }`}
//                   onClick={() => setFilter(f)}
//                 >
//                   {f === 'naoLidas' ? 'Não Lidas' : f}
//                 </button>
//               ))}
//             </div>

//             <div className="flex-1 overflow-y-auto">
//               {notifications.length > 0 ? (
//                 notifications
//                   .filter(n => filter === 'todas' || (filter === 'lidas' && n.read) || (filter === 'naoLidas' && !n.read))
//                   .map(item => (
//                     <div key={item.id} className="bg-primary-bg border-l-4 border-primary rounded-xl p-4 md:p-5 mb-3 text-left shadow-sm">
//                       <h4 className="text-base font-bold text-zinc-900 mb-1">{item.title}</h4>
//                       <p className="text-xs md:text-sm text-zinc-600 mb-3 leading-snug">{item.body}</p>
//                       <span className="text-[11px] text-primary font-bold">{item.time}</span>
//                     </div>
//                   ))
//               ) : (
//                 <div className="text-center my-16">
//                   <p className="text-text-gray text-base">Nenhuma notificação por aqui.</p>
//                 </div>
//               )}
//             </div>

//             {notifications.length === 0 && (
//               <button className="bg-transparent border-none text-text-gray text-xs font-semibold mt-4 cursor-pointer block mx-auto" onClick={() => setCurrentScreen('screen7')}>
//                 Ver Tela Vazia (Tela 7)
//               </button>
//             )}
//           </div>
//         )}

//         {/* TELA 7: Lista Vazia */}
//         {currentScreen === 'screen7' && (
//           <div className="p-6 md:p-12 h-full flex flex-col max-w-4xl mx-auto w-full flex-1 animate-fade-in">
//             <div className="flex justify-between items-center mb-8">
//               <span className="text-xl font-bold text-primary">App Notificações</span>
//               <i className="fa-solid fa-bars text-2xl text-zinc-700 cursor-pointer"></i>
//             </div>

//             <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
//               <div className="text-[#A1A1AA] text-6xl mb-4">
//                 <i className="fa-solid fa-bell-slash"></i>
//               </div>
//               <h3 className="text-lg font-bold text-zinc-900 mb-2">Tudo Limpo Por Aqui!</h3>
//               <p className="text-sm text-text-gray max-w-md mb-8">
//                 Você não tem nenhuma notificação nova no momento.
//               </p>
//               <button 
//                 className="w-full max-w-xs bg-primary text-white py-3.5 rounded-2xl text-sm font-semibold shadow-md active:opacity-85 transition cursor-pointer"
//                 onClick={() => setCurrentScreen('screen5')}
//               >
//                 Atualizar Lista
//               </button>
//             </div>
//           </div>
//         )}

//         {/* TELA 8: Configurações */}
//         {currentScreen === 'screen8' && (
//           <div className="p-6 md:p-12 h-full flex flex-col max-w-3xl mx-auto w-full flex-1 animate-fade-in">
//             <div className="flex items-center gap-4 mb-8">
//               <i className="fa-solid fa-chevron-left text-xl cursor-pointer" onClick={() => setCurrentScreen('screen5')}></i>
//               <h2 className="text-xl md:text-2xl font-bold text-zinc-900">Configuração</h2>
//             </div>

//             <div className="bg-card-gray rounded-3xl p-6">
//               {[
//                 { key: 'permissoes', label: 'Permitir Notificações' },
//                 { key: 'sons', label: 'Sons e Alertas' },
//                 { key: 'localizacao', label: 'Localização' },
//               ].map(({ key, label }, index, arr) => (
//                 <div key={key} className={`flex justify-between items-center py-4 text-sm md:text-base text-zinc-800 ${index !== arr.length - 1 ? 'border-b border-zinc-300' : ''}`}>
//                   <span>{label}</span>
//                   <label className="relative inline-flex items-center cursor-pointer">
//                     <input 
//                       type="checkbox" 
//                       checked={config[key]} 
//                       onChange={e => setConfig({ ...config, [key]: e.target.checked })}
//                       className="sr-only peer"
//                     />
//                     <div className="w-11 h-6 bg-zinc-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

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
