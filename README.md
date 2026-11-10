# Notificações Grupo 7

Frontend de uma aplicação de notificações com React + Vite.

## Acessibilidade
--------------------------------------------------------------
Registro das notas do Lighthouse antes e depois dos ajustes.

- Antes:
  - Login: 96
  - Lista principal: 87
- Depois:
  - Login: 100
  - Lista principal: 100
--------------------------------------------------------------
Ajustes aplicados:
- adição de landmark `main` nas páginas principais;
- uso de `aria-pressed` nos filtros de canal;
- região `aria-live="polite"` para atualizar a lista de notificações;
- `role="alert"` para mensagens de erro de login;
- associação correta de `label` com `select` no formulário;
- melhoria de contraste dos botões para atender acessibilidade.


