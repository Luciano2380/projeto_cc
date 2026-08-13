---
description: Criar um commit semântico baseado nas mudanças atuais
allowed-tools: Bash(git *)
---

# Criar commit semântico
Analise as mudanças staged  com `git diff --staged` e crie um commit seguindo Covencional Commits.

## Regras
- Prefixo: `feat`, `fix`, `chore`, `docs`, `refactor`, `tests`, `styles`
- Formato: `tipo(escopo): descrição curta em português do Brasil`
- Máximo 72 caracteres na primeira linha
- Se tiver argument ($ARGUMENTS), use como contexto extra

## O que fazer
1. Rode `git status` para ver o status atual
2. Rode `git diff --staged` para ver o que há em staged 
3. Se não houver nada em staged , rode `git add -A`primeiro e confirme com usuário
4. Crie a mensagem do commit ideal
5. Execute `git commit -m "mensagem"`

Contexto adicional do usuário $ARGUMENTS
