# Guia de Design - Aplicativo Orixás & Odùs

## 1. Paleta de Cores

### Cores Principais
- **Marrom Escuro (#5D4037):** Cor de fundo principal, representa a terra e a conexão ancestral
- **Dourado (#FFB300):** Cor de destaque para elementos importantes e navegação
- **Terracota (#D84315):** Cor secundária para cards e elementos de destaque
- **Azul Profundo (#1565C0):** Para elementos relacionados a Orixás das águas
- **Verde Escuro (#2E7D32):** Para elementos relacionados a Orixás da natureza

### Cores de Apoio
- **Bege Claro (#F5F5DC):** Para fundos de cards e áreas de conteúdo
- **Branco (#FFFFFF):** Para texto principal e elementos de contraste
- **Cinza Escuro (#424242):** Para texto secundário

## 2. Tipografia

### Fonte Principal
- **Família:** System fonts (San Francisco no iOS, Roboto no Android)
- **Tamanhos:**
  - Título Principal: 28px, peso bold
  - Título de Seção: 20px, peso semibold
  - Corpo de Texto: 16px, peso regular
  - Texto Secundário: 14px, peso regular
  - Labels: 12px, peso medium

## 3. Componentes de Interface

### Cards
- **Sombra:** Sutil, com blur de 8px e opacidade de 0.1
- **Bordas:** Arredondadas com raio de 12px
- **Espaçamento:** Padding interno de 16px
- **Margem:** 8px entre cards

### Botões
- **Primário:** Fundo dourado (#FFB300), texto escuro, raio de 8px
- **Secundário:** Fundo transparente, borda dourada, texto dourado
- **Altura:** 48px para botões principais, 40px para secundários

### Barra de Busca
- **Fundo:** Bege claro (#F5F5DC)
- **Ícone:** Dourado (#FFB300)
- **Placeholder:** Cinza médio
- **Raio:** 24px (formato pill)

## 4. Layout e Espaçamento

### Grid System
- **Margens laterais:** 16px
- **Espaçamento entre seções:** 24px
- **Espaçamento entre elementos:** 12px

### Navegação
- **Bottom Tab Bar:** Altura de 80px
- **Ícones:** 24x24px
- **Cores:** Ativo (dourado), Inativo (cinza claro)

## 5. Padrões Visuais

### Elementos Africanos
- **Padrões geométricos:** Inspirados na arte africana tradicional
- **Uso sutil:** Como elementos decorativos nos headers dos cards principais
- **Cores:** Tons terrosos e dourados

### Hierarquia Visual
- **Títulos:** Sempre em destaque com cor dourada ou tamanho maior
- **Conteúdo:** Organizado em cards com boa separação visual
- **Ações:** Botões e elementos interativos claramente identificáveis

## 6. Estados de Interação

### Hover/Touch States
- **Cards:** Leve elevação adicional na sombra
- **Botões:** Mudança sutil na opacidade (0.8)
- **Lista:** Highlight suave no item selecionado

### Loading States
- **Skeleton screens:** Para carregamento de listas
- **Spinners:** Dourados para ações específicas

## 7. Acessibilidade

### Contraste
- **Texto principal:** Contraste mínimo de 4.5:1
- **Texto secundário:** Contraste mínimo de 3:1
- **Elementos interativos:** Área mínima de toque de 44x44px

### Suporte a Diferentes Tamanhos
- **Texto:** Responsivo a configurações de acessibilidade do sistema
- **Layout:** Adaptável a diferentes tamanhos de tela

## 8. Animações e Transições

### Transições de Tela
- **Duração:** 300ms
- **Easing:** Ease-in-out para suavidade

### Micro-interações
- **Feedback tátil:** Para ações importantes
- **Animações sutis:** Para mudanças de estado

Este guia de design garante uma experiência visual coesa e culturalmente apropriada para o aplicativo de estudos sobre Orixás e Odùs.

