import { useState } from 'react';
import { ShoppingCart, Menu, X, Star, Heart, Search } from 'lucide-react';
import './App.css';

// Importar imagens dos produtos
import topNadadorImg from './assets/top-fitness-nadador.jpg';
import topMinimalImg from './assets/top-fitness-minimal.jpg';
import shortPowerFlowImg from './assets/short-power-flow.jpg';
import leggingEssentialImg from './assets/legging-essential.jpg';
import topBlackLaserImg from './assets/top-black-laser.jpg';
import shortYassImg from './assets/short-yass.jpg';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Top Fitness Nadador",
    price: 79.90,
    image: topNadadorImg,
    category: "Tops",
    description: "Top fitness modelo nadador com suporte médio e tecido de alta compressão. Zero transparência garantida.",
    rating: 4.8,
    reviews: 124,
    isNew: true
  },
  {
    id: 2,
    name: "Top Fitness Minimal",
    price: 69.90,
    image: topMinimalImg,
    category: "Tops",
    description: "Top fitness minimalista com alças finas e tecido ultra macio para máximo conforto durante os treinos.",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 3,
    name: "Short Power Flow",
    price: 89.90,
    originalPrice: 120.00,
    image: shortPowerFlowImg,
    category: "Shorts",
    description: "Short fitness de cintura alta com tecido de compressão e design ergonômico. Perfeito para treinos intensos.",
    rating: 4.9,
    reviews: 156,
    isSale: true
  },
  {
    id: 4,
    name: "Legging Essential",
    price: 99.90,
    image: leggingEssentialImg,
    category: "Calças",
    description: "Legging fitness de cintura alta com tecido de alta compressão e design anatômico. Anti-transparência.",
    rating: 4.8,
    reviews: 203,
  },
  {
    id: 5,
    name: "Top BLACK Laser",
    price: 40.00,
    originalPrice: 65.00,
    image: topBlackLaserImg,
    category: "Tops",
    description: "Top fitness com detalhes laser e design moderno. Combinação perfeita de estilo e funcionalidade.",
    rating: 4.6,
    reviews: 78,
    isSale: true
  },
  {
    id: 6,
    name: "Short Yass",
    price: 55.00,
    image: shortYassImg,
    category: "Shorts",
    description: "Short fitness com estampa lateral exclusiva. Tecido de alta qualidade e design diferenciado.",
    rating: 4.7,
    reviews: 92,
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = ['Todos', 'Tops', 'Shorts', 'Calças'];

  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-coral-500 bg-clip-text text-transparent">
                Garçonnière Fitness
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors">Home</a>
              <a href="#produtos" className="text-gray-700 hover:text-pink-500 transition-colors">Produtos</a>
              <a href="#shopee" className="text-gray-700 hover:text-pink-500 transition-colors">Loja Shopee</a>
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search className="h-4 w-4 text-gray-500 mr-2" />
                <input 
                  type="text" 
                  placeholder="Buscar produtos..." 
                  className="bg-transparent outline-none text-sm w-40"
                />
              </div>
              
              <button className="relative p-2 text-gray-700 hover:text-pink-500 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-700">Home</a>
              <a href="#produtos" className="block py-2 text-gray-700">Produtos</a>
              <a href="#shopee" className="block py-2 text-gray-700">Loja Shopee</a>
              <div className="pt-2">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <Search className="h-4 w-4 text-gray-500 mr-2" />
                  <input 
                    type="text" 
                    placeholder="Buscar produtos..." 
                    className="bg-transparent outline-none text-sm flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-pink-100 to-coral-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Garçonnière Fitness
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Roupas fitness femininas de alta qualidade que combinam conforto, estilo e performance para seus treinos e dia a dia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors">
                  Ver Produtos
                </button>
                <button className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-colors">
                  Loja Shopee
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src={topNadadorImg} 
                  alt="Modelo fitness" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Produtos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra nossa coleção completa de roupas fitness femininas, projetadas para proporcionar conforto, estilo e performance em seus treinos e no dia a dia.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-pink-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-pink-500 hover:text-pink-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Novo
                      </span>
                    )}
                    {product.isSale && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Promoção
                      </span>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <button 
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Heart 
                      className={`h-5 w-5 ${
                        favorites.includes(product.id) 
                          ? 'text-red-500 fill-current' 
                          : 'text-gray-400'
                      }`} 
                    />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-pink-500 font-semibold">{product.category}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating} ({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 bg-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
                      Ver detalhes
                    </button>
                    <button 
                      onClick={addToCart}
                      className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 to-coral-500 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Encontre-nos também na Shopee!
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Acesse nossa loja oficial na Shopee e aproveite promoções exclusivas, frete grátis e cupons de desconto.
          </p>
          <button className="bg-white text-pink-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
            Visitar Loja Shopee
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Garçonnière Fitness</h3>
              <p className="text-gray-400">
                Moda fitness feminina de alta qualidade, produzida em Pernambuco com envio para todo o Brasil.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#produtos" className="hover:text-white transition-colors">Produtos</a></li>
                <li><a href="#shopee" className="hover:text-white transition-colors">Loja Shopee</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Atendimento</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tel: (81) 3251-6170</li>
                <li>WhatsApp: (81) 98314-0951</li>
                <li>@usegarconniere</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Sobre</h4>
              <ul className="space-y-2 text-gray-400">
                <li>🐆 Desde 2016</li>
                <li>🛫 Envio para todo Brasil</li>
                <li>✨ Qualidade garantida</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Use Garçonnière - CNPJ: 29.151.838/0001-68. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

