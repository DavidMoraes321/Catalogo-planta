import { Plant } from '../data/plants';
import { Sun, Droplets } from 'lucide-react';

const categoryColors: Record<Plant['category'], string> = {
  'Interior': 'bg-green-100 text-green-700',
  'Exterior': 'bg-blue-100 text-blue-700',
  'Suculenta': 'bg-amber-100 text-amber-700',
  'Cacto': 'bg-orange-100 text-orange-700',
};

const lightColors: Record<Plant['light'], string> = {
  'Sol pleno': 'text-yellow-500',
  'Meia-sombra': 'text-gray-400',
  'Sombra': 'text-gray-600',
};

const waterColors: Record<Plant['water'], string> = {
  'Pouca': 'text-blue-300',
  'Moderada': 'text-blue-500',
  'Frequente': 'text-blue-700',
};

export default function PlantCard({ plant }: { plant: Plant }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex items-center justify-center h-32 bg-gradient-to-br from-green-50 to-green-100 text-6xl">
        {plant.emoji}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-gray-800 leading-tight">{plant.name}</h3>
          <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${categoryColors[plant.category]}`}>
            {plant.category}
          </span>
        </div>
        <p className="text-xs text-gray-400 italic mb-3">{plant.scientificName}</p>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{plant.description}</p>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Sun className={`w-4 h-4 ${lightColors[plant.light]}`} />
            {plant.light}
          </span>
          <span className="flex items-center gap-1">
            <Droplets className={`w-4 h-4 ${waterColors[plant.water]}`} />
            {plant.water}
          </span>
        </div>
      </div>
    </div>
  );
}
