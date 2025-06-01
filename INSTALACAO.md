# Documentação de Instalação e Deploy - Garçonnière Fitness E-commerce

## Visão Geral

Este documento fornece instruções completas para instalação, configuração e deploy do sistema e-commerce da Garçonnière Fitness, incluindo o site principal e a automação para Shopee via Make.com.

## Estrutura do Projeto

```
garconniere-ecommerce/
├── dist/                          # Arquivos de produção (build)
├── src/                           # Código fonte
│   ├── assets/                    # Imagens dos produtos
│   ├── App.tsx                    # Componente principal
│   ├── App.css                    # Estilos personalizados
│   └── main.tsx                   # Ponto de entrada
├── public/                        # Arquivos públicos e documentação
│   ├── blog-legging-guia-completo.md
│   ├── blog-tendencias-2025.md
│   ├── descricoes-produtos-seo.md
│   └── guia-automacao-make-shopee.md
├── package.json                   # Dependências do projeto
├── vite.config.ts                # Configuração do Vite
└── README.md                      # Documentação do projeto
```

## Pré-requisitos

### Para Deploy Local
- Node.js 18+ 
- pnpm ou npm
- Git

### Para Deploy no Netlify
- Conta no Netlify
- Repositório Git (GitHub, GitLab, etc.)

### Para Automação Shopee
- Conta Shopee Seller Center
- Conta Make.com
- Acesso à Shopee Open Platform

## Instalação Local

### 1. Clone ou Extraia o Projeto

```bash
# Se usando Git
git clone [URL_DO_REPOSITORIO]
cd garconniere-ecommerce

# Se usando arquivo ZIP
unzip garconniere-ecommerce.zip
cd garconniere-ecommerce
```

### 2. Instale as Dependências

```bash
# Usando pnpm (recomendado)
pnpm install

# Ou usando npm
npm install
```

### 3. Execute em Modo de Desenvolvimento

```bash
# Usando pnpm
pnpm run dev

# Ou usando npm
npm run dev
```

O site estará disponível em `http://localhost:5173`

### 4. Build para Produção

```bash
# Usando pnpm
pnpm run build

# Ou usando npm
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`

## Deploy no Netlify

### Método 1: Deploy via Git (Recomendado)

1. **Crie um repositório Git**
   - Faça upload dos arquivos para GitHub, GitLab ou Bitbucket
   - Certifique-se de incluir todos os arquivos do projeto

2. **Conecte ao Netlify**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "New site from Git"
   - Conecte sua conta Git
   - Selecione o repositório do projeto

3. **Configure o Build**
   - Build command: `pnpm run build` ou `npm run build`
   - Publish directory: `dist`
   - Node version: `18` (em Environment variables)

4. **Deploy**
   - Clique em "Deploy site"
   - O Netlify fará o build e deploy automaticamente
   - Você receberá uma URL pública para o site

### Método 2: Deploy Manual

1. **Faça o Build Local**
   ```bash
   pnpm run build
   ```

2. **Upload da Pasta dist**
   - Acesse [netlify.com](https://netlify.com)
   - Arraste a pasta `dist` para a área de deploy
   - O site será publicado automaticamente

### Configurações Adicionais no Netlify

#### Redirects e Rewrites
Crie um arquivo `public/_redirects` com o conteúdo:
```
/*    /index.html   200
```

#### Variáveis de Ambiente
Configure no painel do Netlify:
- `NODE_VERSION`: `18`
- `NPM_VERSION`: `8`

#### Domínio Personalizado
1. Vá em "Domain settings"
2. Clique em "Add custom domain"
3. Configure DNS conforme instruções

## Configuração SEO

### Meta Tags Principais
O site já inclui meta tags otimizadas:
- Title tags específicos por página
- Meta descriptions otimizadas
- Open Graph tags para redes sociais
- Schema markup para produtos

### Google Analytics
Para adicionar Google Analytics:

1. Obtenha o ID de rastreamento (GA4)
2. Adicione o script no `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Google Search Console
1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione a propriedade do site
3. Verifique a propriedade via HTML tag ou DNS
4. Envie o sitemap: `https://seusite.com/sitemap.xml`

## Configuração da Automação Shopee

### 1. Configuração da Shopee Open Platform

1. **Acesse o Shopee Open Platform**
   - Vá para [open.shopee.com](https://open.shopee.com)
   - Faça login com sua conta Shopee Seller

2. **Crie uma Aplicação**
   - Clique em "Create App"
   - Preencha as informações necessárias
   - Anote o App ID e App Secret

3. **Configure Permissões**
   - Solicite as seguintes permissões:
     - `product.read`
     - `product.write`
     - `order.read`
     - `shop.read`

### 2. Configuração do Make.com

1. **Crie uma Conta Make.com**
   - Acesse [make.com](https://make.com)
   - Crie uma conta ou faça login

2. **Configure a Conexão Shopee**
   - Vá em "Connections"
   - Crie uma nova conexão HTTP
   - Configure com as credenciais da Shopee

3. **Importe os Workflows**
   - Use os templates fornecidos no guia de automação
   - Configure os webhooks necessários
   - Teste cada workflow individualmente

### 3. Workflows Principais

#### Workflow 1: Criação de Produtos
- **Trigger**: Webhook do site Garçonnière
- **Ações**: Upload de imagens, criação de produto na Shopee
- **Frequência**: Tempo real

#### Workflow 2: Sincronização de Estoque
- **Trigger**: Webhook de atualização de estoque
- **Ações**: Atualização de estoque na Shopee
- **Frequência**: Tempo real

#### Workflow 3: Gestão de Pedidos
- **Trigger**: Scheduled (5 minutos)
- **Ações**: Importação de pedidos da Shopee
- **Frequência**: A cada 5 minutos

## Monitoramento e Manutenção

### Métricas Importantes

#### Site Principal
- Tempo de carregamento
- Taxa de conversão
- Tráfego orgânico
- Posicionamento SEO

#### Automação Shopee
- Taxa de sucesso de sincronização
- Tempo de resposta das APIs
- Número de erros por dia
- Volume de produtos sincronizados

### Logs e Alertas

#### Make.com
- Configure alertas para falhas de workflow
- Monitore uso de operações
- Revise logs semanalmente

#### Netlify
- Monitore builds e deploys
- Configure notificações de falha
- Acompanhe métricas de performance

### Backup e Segurança

#### Código Fonte
- Mantenha repositório Git atualizado
- Faça backups regulares
- Use branches para desenvolvimento

#### Dados
- Backup de configurações Make.com
- Backup de credenciais Shopee
- Documentação de processos

## Solução de Problemas

### Problemas Comuns

#### Site não carrega após deploy
1. Verifique se o build foi concluído com sucesso
2. Confirme se a pasta `dist` foi publicada
3. Verifique redirects no Netlify

#### Automação não funciona
1. Verifique credenciais da Shopee
2. Confirme se webhooks estão configurados
3. Revise logs no Make.com

#### Produtos não sincronizam
1. Verifique mapeamento de categorias
2. Confirme formato das imagens
3. Valide dados obrigatórios

### Contatos de Suporte

#### Netlify
- Documentação: [docs.netlify.com](https://docs.netlify.com)
- Suporte: [support.netlify.com](https://support.netlify.com)

#### Make.com
- Documentação: [make.com/help](https://make.com/help)
- Comunidade: [community.make.com](https://community.make.com)

#### Shopee Open Platform
- Documentação: [open.shopee.com](https://open.shopee.com)
- Suporte: Via Seller Center

## Próximos Passos

### Melhorias Futuras

1. **Integração com Google Merchant Center**
   - Configure feed de produtos
   - Ative Google Shopping
   - Monitore performance

2. **Análise Avançada**
   - Implemente Google Analytics 4
   - Configure eventos personalizados
   - Crie dashboards de performance

3. **Otimizações SEO**
   - Implemente dados estruturados
   - Otimize Core Web Vitals
   - Crie mais conteúdo de blog

4. **Expansão de Marketplaces**
   - Integre com Mercado Livre
   - Configure Amazon
   - Explore outros canais

### Cronograma Sugerido

#### Semana 1: Setup Básico
- Deploy do site no Netlify
- Configuração básica de SEO
- Testes de funcionalidade

#### Semana 2: Automação Shopee
- Configuração Make.com
- Implementação de workflows
- Testes de sincronização

#### Semana 3: Otimização
- Configuração de analytics
- Otimizações de performance
- Documentação final

#### Semana 4: Go-Live
- Migração de produtos
- Monitoramento intensivo
- Ajustes finais

## Conclusão

Este sistema e-commerce da Garçonnière Fitness foi desenvolvido com foco em performance, SEO e automação. Seguindo este guia de instalação, você terá uma solução completa e escalável para venda online.

Para suporte adicional ou customizações, consulte a documentação técnica detalhada ou entre em contato com a equipe de desenvolvimento.

---

*Documentação criada por Manus AI - Última atualização: Junho 2025*

