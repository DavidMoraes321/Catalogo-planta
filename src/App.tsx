import { useState } from 'react';
import { plants, Plant } from './data/plants';
import PlantCard from './components/PlantCard';
import { Search, Leaf } from 'lucide-react';

const categories: ('Todas' | Plant['category'])[] = ['Todas', 'Interior', 'Exterior', 'Suculenta', 'Cacto'];

export default function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<'Todas' | Plant['category']>('Todas');

  const filtered = plants.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.scientificName.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'Todas' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Catálogo de Plantas</h1>
              <p className="text-sm text-gray-400">Encontre a planta perfeita para o seu espaço</p>
            </div>
          </div>
        </div>
      </header>

      {/* Search & Filters */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
          <input
            type="text"
            placeholder="Buscar por nome ou nome científico..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                category === cat
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-green-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-400 mb-4">
          {filtered.length} {filtered.length === 1 ? 'planta encontrada' : 'plantas encontradas'}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">Nenhuma planta encontrada 🌱</p>
            <p className="text-sm mt-1">Tente outro termo de busca.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-8 text-center text-xs text-gray-300">
        Catálogo de Plantas · Feito com 🌿
      </footer>
    </div>
  );
}
