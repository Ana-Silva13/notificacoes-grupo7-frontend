import NotificationCard from "./NotificationCard";

function NotificationList({ notificacoes }) {
  if (notificacoes.length === 0) {
    return (
      <p className="text-gray-500 text-sm text-center py-4">Nenhuma notificação por aqui.</p>
    );
  }

  return (
    <div className="space-y-4">
      {notificacoes.map((n) => (
        <NotificationCard key={n.id} {...n} />
      ))}
    </div>
  );
}

export default NotificationList;
