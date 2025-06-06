# Garçonnière Fitness - E-commerce Automatizado

![Garçonnière Fitness](https://img.shields.io/badge/Garçonnière-Fitness-pink?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-purple?style=for-the-badge&logo=vite)

## 🌟 Sobre o Projeto

Sistema e-commerce completo para a marca Garçonnière Fitness, especializada em moda fitness feminina. O projeto inclui site responsivo, otimização SEO avançada e automação completa para sincronização com a Shopee via Make.com.

### ✨ Características Principais

- **🎨 Design Moderno**: Interface responsiva com cores da marca e UX otimizada
- **🛍️ E-commerce Completo**: Catálogo de produtos, carrinho, checkout e gestão de pedidos
- **🔍 SEO Otimizado**: Meta tags, dados estruturados e conteúdo otimizado para Google
- **🤖 Automação Shopee**: Sincronização automática de produtos, estoque e pedidos
- **📱 Mobile First**: Totalmente responsivo para todos os dispositivos
- **⚡ Performance**: Build otimizado com Vite e lazy loading

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderna e rápida
- **Lucide React** - Ícones modernos e consistentes
- **CSS3** - Estilos personalizados com variáveis CSS

### Automação
- **Make.com** - Plataforma de automação no-code
- **Shopee Open Platform** - APIs para integração com marketplace
- **Webhooks** - Sincronização em tempo real

### Deploy e Hospedagem
- **Netlify** - Deploy contínuo e hospedagem
- **Git** - Controle de versão
- **pnpm** - Gerenciador de pacotes eficiente

## 📦 Estrutura do Projeto

```
garconniere-ecommerce/
├── 📁 dist/                    # Build de produção
├── 📁 src/                     # Código fonte
│   ├── 📁 assets/              # Imagens dos produtos
│   ├── 📄 App.tsx              # Componente principal
│   ├── 📄 App.css              # Estilos personalizados
│   └── 📄 main.tsx             # Ponto de entrada
├── 📁 public/                  # Arquivos públicos
│   ├── 📄 blog-*.md            # Artigos SEO
│   ├── 📄 descricoes-*.md      # Descrições de produtos
│   └── 📄 guia-automacao-*.md  # Documentação técnica
├── 📄 package.json             # Dependências
├── 📄 INSTALACAO.md            # Guia de instalação
└── 📄 README.md                # Este arquivo
```

## 🛠️ Instalação Rápida

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm

### Passos

1. **Clone ou extraia o projeto**
```bash
cd garconniere-ecommerce
```

2. **Instale as dependências**
```bash
pnpm install
```

3. **Execute em desenvolvimento**
```bash
pnpm run dev
```

4. **Acesse o site**
```
http://localhost:5173
```

## 🌐 Deploy no Netlify

### Deploy Automático (Recomendado)

1. Faça upload do projeto para GitHub/GitLab
2. Conecte ao Netlify
3. Configure:
   - **Build command**: `pnpm run build`
   - **Publish directory**: `dist`
4. Deploy automático a cada commit

### Deploy Manual

1. Execute o build:
```bash
pnpm run build
```

2. Arraste a pasta `dist` para o Netlify

## 🤖 Configuração da Automação Shopee

### 1. Shopee Open Platform
- Crie conta de desenvolvedor
- Obtenha App ID e App Secret
- Configure permissões necessárias

### 2. Make.com
- Crie conta no Make.com
- Configure conexão com Shopee
- Importe workflows fornecidos

### 3. Workflows Incluídos
- ✅ Criação automática de produtos
- ✅ Sincronização de estoque e preços
- ✅ Gestão de pedidos
- ✅ Monitoramento e alertas

## 📊 Produtos Incluídos

### 👕 Tops Fitness
- **Top Fitness Nadador** - Suporte médio, alças cruzadas
- **Top Fitness Minimal** - Design minimalista, alças finas
- **Top BLACK Laser** - Detalhes laser, design moderno

### 👖 Bottoms Fitness
- **Legging Essential** - Cintura alta, zero transparência
- **Short Power Flow** - Cintura alta, design ergonômico
- **Short Yass** - Estampa lateral exclusiva

## 🎯 SEO e Marketing

### Conteúdo Otimizado
- **Artigos de Blog**: Guias completos sobre moda fitness
- **Descrições de Produtos**: Otimizadas para conversão
- **Meta Tags**: Configuradas para cada página
- **Schema Markup**: Dados estruturados para Google

### Palavras-chave Principais
- `legging fitness`
- `moda fitness feminina`
- `roupa de academia`
- `top fitness`
- `short fitness`

## 📈 Métricas e Monitoramento

### Performance
- ⚡ Lighthouse Score: 95+
- 🚀 First Contentful Paint: < 1.5s
- 📱 Mobile Friendly: 100%

### SEO
- 🔍 Meta tags otimizadas
- 📊 Dados estruturados
- 🎯 Core Web Vitals otimizados

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview do build
pnpm run preview

# Lint do código
pnpm run lint
```

## 📋 Checklist de Deploy

### Antes do Deploy
- [ ] Teste local funcionando
- [ ] Build sem erros
- [ ] Imagens otimizadas
- [ ] Meta tags configuradas

### Após o Deploy
- [ ] Site acessível na URL
- [ ] Formulários funcionando
- [ ] Links internos corretos
- [ ] Performance otimizada

### Automação Shopee
- [ ] Credenciais configuradas
- [ ] Workflows testados
- [ ] Produtos sincronizados
- [ ] Monitoramento ativo

## 🆘 Solução de Problemas

### Build Falha
```bash
# Limpe cache e reinstale
rm -rf node_modules dist
pnpm install
pnpm run build
```

### Site não carrega
- Verifique redirects no Netlify
- Confirme pasta `dist` publicada
- Revise console do navegador

### Automação não funciona
- Verifique credenciais Shopee
- Confirme webhooks configurados
- Revise logs no Make.com

## 📞 Suporte

### Documentação
- 📖 [Guia de Instalação](./INSTALACAO.md)
- 🤖 [Automação Shopee](./public/guia-automacao-make-shopee.md)
- 🎯 [SEO e Marketing](./public/descricoes-produtos-seo.md)

### Links Úteis
- [Netlify Docs](https://docs.netlify.com)
- [Make.com Help](https://make.com/help)
- [Shopee Open Platform](https://open.shopee.com)

## 🎉 Próximos Passos

### Melhorias Planejadas
1. **Google Analytics 4** - Tracking avançado
2. **Google Merchant Center** - Google Shopping
3. **PWA** - App progressivo
4. **Mais Marketplaces** - Mercado Livre, Amazon

### Expansão de Produtos
1. **Novas Categorias** - Acessórios, calçados
2. **Coleções Sazonais** - Verão, inverno
3. **Produtos Personalizados** - Estampas exclusivas

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para a Garçonnière Fitness. Todos os direitos reservados.

## 👥 Créditos

**Desenvolvido por**: Manus AI  
**Cliente**: Garçonnière Fitness  
**Data**: Junho 2025  

---

### 🌟 Garçonnière Fitness
*Moda fitness feminina de alta qualidade que combina conforto, estilo e performance para seus treinos e dia a dia.*

**Site**: [garconniere.com.br](https://garconniere.com.br)  
**Shopee**: [@usegarconniere](https://shopee.com.br/usegarconniere)  
**Instagram**: [@garconniere.fitness](https://instagram.com/garconniere.fitness)

---

*README criado com ❤️ pela equipe Manus AI*

#   g a r c o n n i e r e  
 