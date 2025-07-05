# Plano do Aplicativo de Estudos de Orixás e Odùs

## 1. Propósito do Aplicativo
O objetivo principal deste aplicativo é fornecer uma ferramenta de estudo e consulta para informações sobre Orixás e Odùs, baseadas nos documentos fornecidos pelo usuário. Ele servirá como um recurso de fácil acesso para estudantes e praticantes interessados na cultura e nos conhecimentos relacionados.

## 2. Funcionalidades Principais

### 2.1. Navegação e Consulta
- **Lista de Orixás:** Uma tela principal que exibe uma lista de todos os Orixás. Ao selecionar um Orixá, o usuário será levado a uma tela de detalhes.
- **Detalhes do Orixá:** Para cada Orixá, serão exibidas as seguintes informações:
    - Perfil das Pessoas
    - Tendências/Temperamentos
    - O que representa no Jogo
- **Lista de Odùs:** Uma tela que exibe uma lista de todos os Odùs. Ao selecionar um Odù, o usuário será levado a uma tela de detalhes.
- **Detalhes do Odù:** Para cada Odù, serão exibidas as seguintes informações:
    - Número e Nome Completo
    - Orixá(s) que fala(m)
    - Representação
    - Personalidade
    - Energia
    - Caminhos de Odù (listados individualmente)
    - Lembretes (listados individualmente)

### 2.2. Busca
- **Funcionalidade de Busca Global:** Permitir que o usuário pesquise por Orixás ou Odùs pelo nome. A busca deve ser rápida e eficiente, filtrando as listas conforme o usuário digita.

### 2.3. Outras Funcionalidades (a serem consideradas)
- **Favoritos:** Permitir que o usuário marque Orixás e Odùs como favoritos para acesso rápido.
- **Modo Offline:** Todo o conteúdo deve estar disponível offline, uma vez que os dados são estáticos e serão empacotados com o aplicativo.

## 3. Arquitetura do Aplicativo

### 3.1. Tipo de Aplicativo
- **Aplicativo Móvel Nativo (Cross-platform):** Será desenvolvido usando React Native, permitindo que o aplicativo funcione tanto em dispositivos Android quanto iOS a partir de uma única base de código.

### 3.2. Estrutura de Dados
- **Dados Locais (JSON):** As informações extraídas dos documentos (orixas.json e odus.json) serão incluídas diretamente no pacote do aplicativo. Isso elimina a necessidade de um backend e garante o acesso offline.

### 3.3. Componentes Principais
- **Telas de Listagem:** Componentes para exibir as listas de Orixás e Odùs.
- **Telas de Detalhes:** Componentes para exibir as informações detalhadas de cada Orixá e Odù.
- **Componente de Busca:** Um componente reutilizável para a funcionalidade de busca.
- **Navegação:** Utilização de bibliotecas de navegação do React Native (ex: React Navigation) para gerenciar o fluxo entre as telas.

## 4. Tecnologias Propostas
- **Framework:** React Native
- **Linguagem:** JavaScript/TypeScript
- **Gerenciamento de Estado:** Context API ou Redux (se a complexidade aumentar)
- **Navegação:** React Navigation

## 5. Próximos Passos
- **Design da Interface do Usuário (Fase 3):** Criar wireframes e mockups com base nas funcionalidades definidas.
- **Desenvolvimento (Fase 4):** Iniciar a codificação do aplicativo.
- **Testes (Fase 5):** Realizar testes de funcionalidade e usabilidade.
- **Entrega (Fase 6):** Preparar o aplicativo para distribuição.


