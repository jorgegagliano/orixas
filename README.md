# Aplicativo Orixás & Odùs - Estudos

## Descrição
Aplicativo web responsivo para estudos sobre Orixás e Odùs, baseado nos ensinamentos de José Beniste. O aplicativo oferece uma interface moderna e intuitiva para consulta de informações detalhadas sobre as entidades espirituais do Candomblé.

## Funcionalidades

### 🏠 Página Inicial
- Navegação principal com cards para Orixás e Odùs
- Design responsivo com cores temáticas
- Interface otimizada para dispositivos móveis

### 👑 Orixás (7 entidades)
- **OMOLU**: Orixá da saúde e das doenças
- **OXUMARE**: Orixá da riqueza e transformação
- **NANA**: Orixá da sabedoria e ancestralidade
- **OXUM**: Orixá das águas doces e do amor
- **OBA**: Orixá guerreira das águas turbulentas
- **YEMONJA**: Orixá mãe dos oceanos
- **YANSAN**: Orixá dos ventos e tempestades

Cada Orixá contém:
- Perfil das pessoas regidas
- Tendências e temperamentos
- O que representa no jogo de búzios

### 🔮 Odùs (16 entidades)
Todos os 16 Odùs do jogo de búzios, de 1 a 16 búzios abertos:
1. OKANRAN - 6. OBARA - 11. OWONRIN
2. EJI OKO - 7. ODI - 12. EJILA SEBORA
3. ETA OGUNDA - 8. EJI ONILE - 13. EJI OLOGBON
4. IROSUN - 9. OSA - 14. IKA
5. OSE - 10. OFUN - 15. OGBEGUNDA - 16. ALAAFIA

Cada Odù contém:
- Número e nome completo
- Orixá que fala
- O que representa
- Personalidade das pessoas
- Energia e características
- Caminhos de Odù (desdobramentos)
- Lembretes importantes

### 🔍 Sistema de Busca
- Busca unificada por Orixás e Odùs
- Resultados em tempo real
- Interface intuitiva

## Tecnologias Utilizadas
- **Frontend**: React 18 + Vite
- **Estilização**: Tailwind CSS
- **Roteamento**: React Router
- **Ícones**: Lucide React
- **Responsividade**: Mobile-first design

## Paleta de Cores
- **Primária**: Tons terrosos (#8B4513, #A0522D)
- **Secundária**: Dourado (#FFD700, #FFA500)
- **Acentos**: Azul oceano, Verde floresta, Vermelho terra
- **Fundo**: Marrom escuro (#654321)

## Como Usar

### Desenvolvimento Local
```bash
cd orixas-odus-app
npm install
npm run dev
```

### Build de Produção
```bash
npm run build
```
Os arquivos de produção estarão na pasta `dist/`

### Estrutura de Arquivos
```
orixas-odus-app/
├── src/
│   ├── assets/
│   │   ├── orixas.json
│   │   └── odus.json
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── dist/ (build de produção)
└── package.json
```

## Dados Fonte
O conteúdo foi extraído e estruturado a partir dos seguintes documentos:
- **TENDÊNCIAS.docx**: Características dos Orixás
- **SÍNTESE ODU - BENISTE.docx**: Resumo dos Odùs
- **ODU-BENISTE.docx**: Detalhes completos dos Odùs

## Compatibilidade
- ✅ Dispositivos móveis (iOS/Android)
- ✅ Tablets
- ✅ Desktops
- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)

## Autor
Desenvolvido com base nos ensinamentos de **José Beniste**, respeitando a tradição e sabedoria do Candomblé.

---

*Este aplicativo foi criado para fins educacionais e de preservação cultural.*

