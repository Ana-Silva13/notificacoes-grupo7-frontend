 function FilterChip({ label, ativo, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-xs font-semibold capitalize cursor-pointer transition ${
        ativo 
          ? 'bg-primary text-white' 
          : 'bg-zinc-900 text-zinc-100 border border-zinc-700 hover:bg-zinc-800'
      }`}
    >
      {label}
    </button>
  );
}

export default FilterChip;

