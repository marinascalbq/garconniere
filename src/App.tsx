import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import './App.css';

// Dados dos produtos
const products = [
  {
    id: 1,
    name: 'Top Fitness Nadador',
    category: 'Tops',
    price: 79.90,
    originalPrice: null,
    image: '/src/assets/top-fitness-nadador.jpg',
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isPromo: false,
    description: 'Top fitness modelo nadador com suporte médio e tecido de alta compressão. Zero transparência garantida.',
    fullDescription: 'O Top Fitness Nadador é perfeito para quem busca conforto e segurança durante os treinos. Confeccionado com tecido de alta compressão que oferece suporte médio, é ideal para atividades de baixo a médio impacto. Seu design nadador proporciona liberdade de movimento, enquanto a tecnologia anti-transparência garante total confiança em qualquer posição.',
    features: [
      'Tecido de alta compressão',
      'Suporte médio',
      'Zero transparência',
      'Design nadador',
      'Secagem rápida',
      'Proteção UV'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Coral', 'Preto', 'Azul Marinho']
  },
  {
    id: 2,
    name: 'Top Fitness Minimal',
    category: 'Tops',
    price: 69.90,
    originalPrice: null,
    image: '/src/assets/top-fitness-minimal.jpg',
    rating: 4.7,
    reviews: 89,
    isNew: false,
    isPromo: false,
    description: 'Top fitness minimalista com alças finas e tecido ultra macio para máximo conforto durante os treinos.',
    fullDescription: 'O Top Fitness Minimal combina elegância e funcionalidade em um design clean e sofisticado. Suas alças finas proporcionam um visual delicado, enquanto o tecido ultra macio oferece conforto incomparável. Ideal para yoga, pilates e atividades de baixo impacto.',
    features: [
      'Design minimalista',
      'Alças finas',
      'Tecido ultra macio',
      'Conforto máximo',
      'Respirabilidade',
      'Modelagem anatômica'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Rosa', 'Bege', 'Branco']
  },
  {
    id: 3,
    name: 'Short Power Flow',
    category: 'Shorts',
    price: 89.90,
    originalPrice: 120.00,
    image: '/src/assets/short-power-flow.jpg',
    rating: 4.9,
    reviews: 156,
    isNew: false,
    isPromo: true,
    description: 'Short fitness de cintura alta com tecido de compressão e design ergonômico. Perfeito para treinos intensos.',
    fullDescription: 'O Short Power Flow foi desenvolvido para atletas que exigem o máximo desempenho. Sua cintura alta oferece suporte abdominal, enquanto o tecido de compressão melhora a circulação e reduz a fadiga muscular. O design ergonômico se adapta perfeitamente ao corpo, proporcionando liberdade total de movimento.',
    features: [
      'Cintura alta',
      'Tecido de compressão',
      'Design ergonômico',
      'Suporte abdominal',
      'Reduz fadiga muscular',
      'Liberdade de movimento'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Azul Marinho', 'Preto', 'Grafite']
  },
  {
    id: 4,
    name: 'Legging Essential',
    category: 'Calças',
    price: 99.90,
    originalPrice: null,
    image: '/src/assets/legging-essential.jpg',
    rating: 4.6,
    reviews: 203,
    isNew: false,
    isPromo: false,
    description: 'Legging fitness de cintura alta com tecido de alta compressão e design anatômico. Anti-transparência.',
    fullDescription: 'A Legging Essential é a peça fundamental do seu guarda-roupa fitness. Com cintura alta que modela a silhueta e tecido de alta compressão que oferece suporte muscular, é perfeita para todos os tipos de treino. Sua tecnologia anti-transparência garante segurança e confiança em qualquer movimento.',
    features: [
      'Cintura alta modeladora',
      'Alta compressão',
      'Design anatômico',
      'Anti-transparência',
      'Suporte muscular',
      'Versatilidade'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Azul Marinho', 'Grafite']
  },
  {
    id: 5,
    name: 'Top BLACK Laser',
    category: 'Tops',
    price: 85.90,
    originalPrice: 110.00,
    image: '/src/assets/top-black-laser.jpg',
    rating: 4.8,
    reviews: 92,
    isNew: false,
    isPromo: true,
    description: 'Top fitness com detalhes laser e design moderno. Combinação perfeita de estilo e funcionalidade.',
    fullDescription: 'O Top BLACK Laser representa o que há de mais moderno em moda fitness. Seus detalhes em laser criam um visual único e sofisticado, enquanto a tecnologia do tecido garante performance superior. Ideal para quem não abre mão do estilo durante os treinos.',
    features: [
      'Detalhes em laser',
      'Design moderno',
      'Tecnologia avançada',
      'Visual sofisticado',
      'Performance superior',
      'Estilo único'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Vermelho', 'Azul']
  },
  {
    id: 6,
    name: 'Short Yass',
    category: 'Shorts',
    price: 79.90,
    originalPrice: null,
    image: '/src/assets/short-yass.jpg',
    rating: 4.7,
    reviews: 78,
    isNew: false,
    isPromo: false,
    description: 'Short fitness com estampa lateral exclusiva. Tecido de alta qualidade e design diferenciado.',
    fullDescription: 'O Short Yass traz personalidade e atitude para seus treinos. Com estampa lateral exclusiva e tecido de alta qualidade, oferece conforto e estilo em cada movimento. Seu design diferenciado é perfeito para quem quer se destacar na academia.',
    features: [
      'Estampa lateral exclusiva',
      'Tecido de alta qualidade',
      'Design diferenciado',
      'Conforto superior',
      'Estilo único',
      'Durabilidade'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Rosa', 'Coral', 'Lilás']
  }
];

// Interface do carrinho
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
}

// Componente Header
function Header({ cartItemsCount }: { cartItemsCount: number }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>Garçonnière Fitness</h1>
        </Link>
        
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/produtos">Produtos</Link>
          <a href="https://shopee.com.br/usegarconniere" target="_blank" rel="noopener noreferrer">
            Loja Shopee
          </a>
        </nav>
        
        <div className="header-actions">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>🔍</button>
          </div>
          
          <Link to="/carrinho" className="cart-button">
            🛒
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}

// Componente Home
function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Garçonnière Fitness</h2>
            <p>Roupas fitness femininas de alta qualidade que combinam conforto, estilo e performance para seus treinos e dia a dia.</p>
            <div className="hero-buttons">
              <button onClick={() => navigate('/produtos')} className="btn-primary">Ver Produtos</button>
              <a href="https://shopee.com.br/usegarconniere" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Loja Shopee
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/src/assets/top-fitness-nadador.jpg" alt="Garçonnière Fitness" />
          </div>
        </div>
      </section>
      
      <ProductGrid />
    </div>
  );
}

// Componente Grid de Produtos
function ProductGrid({ category = 'Todos' }: { category?: string }) {
  const navigate = useNavigate();
  
  const filteredProducts = category === 'Todos' 
    ? products 
    : products.filter(product => product.category === category);
  
  return (
    <section className="products-section">
      <div className="container">
        <h2>Nossos Produtos</h2>
        <p>Descubra nossa coleção completa de roupas fitness femininas, projetadas para proporcionar conforto, estilo e performance em seus treinos e no dia a dia.</p>
        
        <div className="category-filters">
          <button className={category === 'Todos' ? 'active' : ''}>Todos</button>
          <button className={category === 'Tops' ? 'active' : ''}>Tops</button>
          <button className={category === 'Shorts' ? 'active' : ''}>Shorts</button>
          <button className={category === 'Calças' ? 'active' : ''}>Calças</button>
        </div>
        
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              {product.isNew && <span className="badge new">Novo</span>}
              {product.isPromo && <span className="badge promo">Promoção</span>}
              
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <div className="product-rating">
                  ⭐ {product.rating} ({product.reviews})
                </div>
                
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                
                <div className="product-price">
                  <span className="current-price">R$ {product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="original-price">R$ {product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                
                <div className="product-actions">
                  <button 
                    onClick={() => navigate(`/produto/${product.id}`)}
                    className="btn-primary"
                  >
                    Ver detalhes
                  </button>
                  <button 
                    onClick={() => navigate(`/produto/${product.id}`)}
                    className="btn-secondary"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente Página de Produto Individual
function ProductPage({ addToCart }: { addToCart: (product: any, size: string, color: string, quantity: number) => void }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id || '0'));
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  if (!product) {
    return <div>Produto não encontrado</div>;
  }
  
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Por favor, selecione o tamanho e a cor');
      return;
    }
    
    addToCart(product, selectedSize, selectedColor, quantity);
    alert('Produto adicionado ao carrinho!');
  };
  
  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert('Por favor, selecione o tamanho e a cor');
      return;
    }
    
    addToCart(product, selectedSize, selectedColor, quantity);
    navigate('/carrinho');
  };
  
  return (
    <div className="product-page">
      <div className="container">
        <div className="product-details">
          <div className="product-images">
            <img src={product.image} alt={product.name} className="main-image" />
          </div>
          
          <div className="product-info">
            <div className="product-badges">
              {product.isNew && <span className="badge new">Novo</span>}
              {product.isPromo && <span className="badge promo">Promoção</span>}
            </div>
            
            <h1>{product.name}</h1>
            <div className="product-rating">
              ⭐ {product.rating} ({product.reviews} avaliações)
            </div>
            
            <div className="product-price">
              <span className="current-price">R$ {product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="original-price">R$ {product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            
            <p className="product-description">{product.description}</p>
            
            <div className="product-options">
              <div className="size-selector">
                <label>Tamanho:</label>
                <div className="size-buttons">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={selectedSize === size ? 'active' : ''}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="color-selector">
                <label>Cor:</label>
                <div className="color-buttons">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={selectedColor === color ? 'active' : ''}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="quantity-selector">
                <label>Quantidade:</label>
                <div className="quantity-controls">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>
            
            <div className="product-actions">
              <button onClick={handleAddToCart} className="btn-secondary">
                Adicionar ao Carrinho
              </button>
              <button onClick={handleBuyNow} className="btn-primary">
                Comprar Agora
              </button>
            </div>
          </div>
        </div>
        
        <div className="product-tabs">
          <div className="tab-buttons">
            <button 
              className={activeTab === 'description' ? 'active' : ''}
              onClick={() => setActiveTab('description')}
            >
              Descrição
            </button>
            <button 
              className={activeTab === 'features' ? 'active' : ''}
              onClick={() => setActiveTab('features')}
            >
              Características
            </button>
            <button 
              className={activeTab === 'care' ? 'active' : ''}
              onClick={() => setActiveTab('care')}
            >
              Cuidados
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'description' && (
              <div>
                <h3>Descrição Completa</h3>
                <p>{product.fullDescription}</p>
              </div>
            )}
            
            {activeTab === 'features' && (
              <div>
                <h3>Características</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'care' && (
              <div>
                <h3>Cuidados com o Produto</h3>
                <ul>
                  <li>Lave à mão ou na máquina em água fria</li>
                  <li>Use sabão neutro</li>
                  <li>Não use alvejante</li>
                  <li>Seque à sombra</li>
                  <li>Não passe a ferro em alta temperatura</li>
                  <li>Não torça ou esfregue com força</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente Carrinho
function Cart({ 
  cartItems, 
  updateQuantity, 
  removeFromCart, 
  clearCart, 
  getTotalPrice 
}: {
  cartItems: CartItem[];
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}) {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'pix'
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };
  
  const handleWhatsAppOrder = () => {
    if (!customerInfo.name || !customerInfo.phone) {
      alert('Por favor, preencha pelo menos o nome e telefone');
      return;
    }
    
    let message = `🛒 *NOVO PEDIDO - GARÇONNIÈRE FITNESS*\n\n`;
    message += `👤 *DADOS DO CLIENTE:*\n`;
    message += `Nome: ${customerInfo.name}\n`;
    message += `Telefone: ${customerInfo.phone}\n`;
    message += `Email: ${customerInfo.email}\n`;
    message += `Endereço: ${customerInfo.address}\n`;
    message += `Cidade: ${customerInfo.city}\n`;
    message += `CEP: ${customerInfo.zipCode}\n`;
    message += `Forma de Pagamento: ${customerInfo.paymentMethod === 'pix' ? 'PIX' : 'Cartão'}\n\n`;
    
    message += `📦 *PRODUTOS:*\n`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Tamanho: ${item.size}\n`;
      message += `   Cor: ${item.color}\n`;
      message += `   Quantidade: ${item.quantity}\n`;
      message += `   Valor: R$ ${(item.price * item.quantity).toFixed(2)}\n\n`;
    });
    
    message += `💰 *TOTAL: R$ ${getTotalPrice().toFixed(2)}*\n\n`;
    message += `Aguardo confirmação do pedido! 😊`;
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1>Carrinho de Compras</h1>
          <div className="empty-cart">
            <p>Seu carrinho está vazio</p>
            <Link to="/produtos" className="btn-primary">Continuar Comprando</Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="cart-page">
      <div className="container">
        <h1>Carrinho de Compras</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Tamanho: {item.size} | Cor: {item.color}</p>
                  <div className="item-price">R$ {item.price.toFixed(2)}</div>
                </div>
                <div className="item-quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <div className="item-total">
                  R$ {(item.price * item.quantity).toFixed(2)}
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-item"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h3>Resumo do Pedido</h3>
            <div className="summary-line">
              <span>Subtotal:</span>
              <span>R$ {getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Frete:</span>
              <span>A calcular</span>
            </div>
            <div className="summary-total">
              <span>Total:</span>
              <span>R$ {getTotalPrice().toFixed(2)}</span>
            </div>
            
            <div className="customer-form">
              <h4>Dados para Entrega</h4>
              <input
                type="text"
                name="name"
                placeholder="Nome completo *"
                value={customerInfo.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefone *"
                value={customerInfo.phone}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={customerInfo.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Endereço completo"
                value={customerInfo.address}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="city"
                placeholder="Cidade"
                value={customerInfo.city}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="zipCode"
                placeholder="CEP"
                value={customerInfo.zipCode}
                onChange={handleInputChange}
              />
              
              <select
                name="paymentMethod"
                value={customerInfo.paymentMethod}
                onChange={handleInputChange}
              >
                <option value="pix">PIX</option>
                <option value="card">Cartão de Crédito</option>
              </select>
            </div>
            
            <button onClick={handleWhatsAppOrder} className="btn-primary whatsapp-order">
              📱 Finalizar Pedido via WhatsApp
            </button>
            
            <button onClick={clearCart} className="btn-secondary clear-cart">
              Limpar Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente Principal App
function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  const addToCart = (product: any, size: string, color: string, quantity: number) => {
    const existingItem = cartItems.find(
      item => item.id === product.id && item.size === size && item.color === color
    );
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id && item.size === size && item.color === color
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        size,
        color,
        image: product.image
      }]);
    }
  };
  
  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };
  
  const clearCart = () => {
    setCartItems([]);
  };
  
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  return (
    <Router>
      <div className="App">
        <Header cartItemsCount={getTotalItems()} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<ProductGrid />} />
            <Route path="/produto/:id" element={<ProductPage addToCart={addToCart} />} />
            <Route path="/carrinho" element={
              <Cart 
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
                getTotalPrice={getTotalPrice}
              />
            } />
          </Routes>
        </main>
        
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h4>Garçonnière Fitness</h4>
                <p>Roupas fitness femininas de alta qualidade</p>
              </div>
              <div className="footer-section">
                <h4>Links Úteis</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/produtos">Produtos</Link></li>
                  <li><a href="https://shopee.com.br/usegarconniere" target="_blank" rel="noopener noreferrer">Loja Shopee</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Contato</h4>
                <p>📱 WhatsApp: (11) 99999-9999</p>
                <p>📧 Email: contato@garconniere.com</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Garçonnière Fitness. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

