import NotificationCard from "./NotificationCard";

function NotificationList({ notificacoes }) {
  return (
    <div aria-live="polite">
      {notificacoes.length === 0 ? (
        <p className="text-gray-500 text-sm">Nenhuma notificação por aqui.</p>
      ) : (
        notificacoes.map((n) => <NotificationCard key={n.id} {...n} />)
      )}
    </div>
  );
}

export default NotificationList;