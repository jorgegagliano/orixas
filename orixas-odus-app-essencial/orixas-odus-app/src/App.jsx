import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { Search, Home, Heart, ArrowLeft, Menu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import './App.css';

// Importar dados
import orixasData from './assets/orixas.json';
import odusData from './assets/odus.json';

// Componente Home
function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background p-6 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Orixás & Odùs</h1>
        <p className="text-primary font-semibold">ESTUDOS</p>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            placeholder="Buscar..."
            className="pl-10 bg-card text-card-foreground rounded-full h-12"
            onClick={() => navigate('/search')}
          />
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="px-4 space-y-4">
        <Card 
          className="card-hover cursor-pointer african-pattern bg-primary text-primary-foreground"
          onClick={() => navigate('/orixas')}
        >
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-center">Orixás</h2>
          </CardContent>
        </Card>

        <Card 
          className="card-hover cursor-pointer african-pattern bg-secondary text-secondary-foreground"
          onClick={() => navigate('/odus')}
        >
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-center">Odùs</h2>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}

// Componente Lista de Orixás
function OrixasList() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredOrixas = Object.keys(orixasData).filter(orixa =>
    orixa.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getOrixaColor = (index) => {
    const colors = ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-chart-4', 'bg-chart-5'];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background p-4 flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </Button>
        <h1 className="text-2xl font-bold text-foreground ml-4">Orixás</h1>
      </div>

      {/* Search */}
      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            placeholder="Buscar Orixá..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-card text-card-foreground rounded-full"
          />
        </div>
      </div>

      {/* Lista de Orixás */}
      <div className="px-4 space-y-3 pb-20">
        {filteredOrixas.map((orixa, index) => (
          <Card 
            key={orixa}
            className={`card-hover cursor-pointer ${getOrixaColor(index)} text-white`}
            onClick={() => navigate(`/orixa/${encodeURIComponent(orixa)}`)}
          >
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">{orixa}</h3>
              <p className="text-sm opacity-90 mt-1">
                {orixasData[orixa].perfil_das_pessoas?.substring(0, 100)}...
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <BottomNavigation />
    </div>
  );
}

// Componente Detalhes do Orixá
function OrixaDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const orixaName = decodeURIComponent(name);
  const orixa = orixasData[orixaName];

  if (!orixa) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Orixá não encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-accent text-accent-foreground p-4 flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate('/orixas')}>
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-2xl font-bold ml-4">{orixaName}</h1>
      </div>

      {/* Conteúdo */}
      <div className="p-4 space-y-4 pb-20">
        {orixa.perfil_das_pessoas && (
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-secondary">Perfil das Pessoas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mobile-text leading-relaxed">{orixa.perfil_das_pessoas}</p>
            </CardContent>
          </Card>
        )}

        {orixa.tendencias_temperamentos && (
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-secondary">Tendências/Temperamentos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mobile-text leading-relaxed">{orixa.tendencias_temperamentos}</p>
            </CardContent>
          </Card>
        )}

        {orixa.o_que_representa_no_jogo && (
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-secondary">O que representa no Jogo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mobile-text leading-relaxed">{orixa.o_que_representa_no_jogo}</p>
            </CardContent>
          </Card>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
}

// Componente Lista de Odùs
function OdusList() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredOdus = Object.keys(odusData).filter(odu =>
    odu.toLowerCase().includes(searchTerm.toLowerCase()) ||
    odusData[odu].numero?.toString().includes(searchTerm)
  );

  const getOduColor = (index) => {
    const colors = ['bg-chart-1', 'bg-chart-4', 'bg-chart-2', 'bg-chart-3', 'bg-chart-5'];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background p-4 flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </Button>
        <h1 className="text-2xl font-bold text-foreground ml-4">Odùs</h1>
      </div>

      {/* Search */}
      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            placeholder="Buscar Odù..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-card text-card-foreground rounded-full"
          />
        </div>
      </div>

      {/* Lista de Odùs */}
      <div className="px-4 grid grid-cols-2 gap-3 pb-20">
        {filteredOdus.map((odu, index) => (
          <Card 
            key={odu}
            className={`card-hover cursor-pointer ${getOduColor(index)} text-white`}
            onClick={() => navigate(`/odu/${encodeURIComponent(odu)}`)}
          >
            <CardContent className="p-4">
              <div className="text-2xl font-bold mb-1">{odusData[odu].numero}</div>
              <h3 className="text-sm font-semibold mb-2">{odu}</h3>
              <p className="text-xs opacity-90">
                Orixá: {odusData[odu].fala}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <BottomNavigation />
    </div>
  );
}

// Componente Detalhes do Odù
function OduDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const oduName = decodeURIComponent(name);
  const odu = odusData[oduName];

  if (!odu) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Odù não encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-accent text-accent-foreground p-4 flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate('/odus')}>
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <div className="ml-4">
          <h1 className="text-xl font-bold">{oduName}</h1>
          <p className="text-sm opacity-90">Odù {odu.numero}</p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-4 space-y-4 pb-20">
        {odu.fala && (
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-secondary">Fala</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mobile-text font-semibold">{odu.fala}</p>
            </CardContent>
          </Card>
        )}

        {odu.representa && (
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-secondary">Representa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mobile-text leading-relaxed">{odu.representa}</p>
            </CardContent>
          </Card>
        )}

        {odu.personalidade && (
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-secondary">Personalidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mobile-text leading-relaxed">{odu.personalidade}</p>
            </CardContent>
          </Card>
        )}

        {odu.energia && (
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-secondary">Energia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mobile-text leading-relaxed">{odu.energia}</p>
            </CardContent>
          </Card>
        )}

        {odu.caminhos_de_odu && odu.caminhos_de_odu.length > 0 && (
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-secondary">Caminhos de Odù</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {odu.caminhos_de_odu.map((caminho, index) => (
                  <div key={index} className="border-l-4 border-secondary pl-3">
                    <p className="mobile-text leading-relaxed">
                      <span className="font-semibold">{index + 1}.</span> {caminho}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {odu.lembretes && odu.lembretes.length > 0 && (
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-secondary">Lembretes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {odu.lembretes.map((lembrete, index) => (
                  <p key={index} className="mobile-text leading-relaxed">
                    • {lembrete}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
}

// Componente de Busca Global
function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const searchResults = React.useMemo(() => {
    if (!searchTerm.trim()) return { orixas: [], odus: [] };

    const orixas = Object.keys(orixasData).filter(orixa =>
      orixa.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const odus = Object.keys(odusData).filter(odu =>
      odu.toLowerCase().includes(searchTerm.toLowerCase()) ||
      odusData[odu].numero?.toString().includes(searchTerm)
    );

    return { orixas, odus };
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background p-4 flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </Button>
        <h1 className="text-2xl font-bold text-foreground ml-4">Buscar</h1>
      </div>

      {/* Search */}
      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            placeholder="Buscar Orixás ou Odùs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-card text-card-foreground rounded-full"
            autoFocus
          />
        </div>
      </div>

      {/* Resultados */}
      <div className="px-4 space-y-6 pb-20">
        {searchResults.orixas.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">Orixás</h2>
            <div className="space-y-2">
              {searchResults.orixas.map((orixa, index) => (
                <Card 
                  key={orixa}
                  className="card-hover cursor-pointer bg-primary text-primary-foreground"
                  onClick={() => navigate(`/orixa/${encodeURIComponent(orixa)}`)}
                >
                  <CardContent className="p-3">
                    <h3 className="font-semibold">{orixa}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {searchResults.odus.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">Odùs</h2>
            <div className="space-y-2">
              {searchResults.odus.map((odu, index) => (
                <Card 
                  key={odu}
                  className="card-hover cursor-pointer bg-secondary text-secondary-foreground"
                  onClick={() => navigate(`/odu/${encodeURIComponent(odu)}`)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{odu}</h3>
                      <span className="text-sm opacity-90">#{odusData[odu].numero}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {searchTerm.trim() && searchResults.orixas.length === 0 && searchResults.odus.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Nenhum resultado encontrado para "{searchTerm}"</p>
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
}

// Componente Bottom Navigation
function BottomNavigation() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex justify-around items-center py-3">
        <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
          <Home className="w-6 h-6 text-muted-foreground" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => navigate('/search')}>
          <Search className="w-6 h-6 text-muted-foreground" />
        </Button>
        <Button variant="ghost" size="icon">
          <Heart className="w-6 h-6 text-muted-foreground" />
        </Button>
      </div>
    </div>
  );
}

// Componente Principal
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/orixas" element={<OrixasList />} />
          <Route path="/orixa/:name" element={<OrixaDetail />} />
          <Route path="/odus" element={<OdusList />} />
          <Route path="/odu/:name" element={<OduDetail />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

