function Button({ children, variant = "primario", onClick }) {
  const estilos = {
    primario: "bg-primary text-white",
    destaque: "bg-primary-light text-white", 
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition-colors ${estilos[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;

