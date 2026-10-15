export interface Plant {
  id: number;
  name: string;
  scientificName: string;
  category: 'Interior' | 'Exterior' | 'Suculenta' | 'Cacto';
  light: 'Sol pleno' | 'Meia-sombra' | 'Sombra';
  water: 'Pouca' | 'Moderada' | 'Frequente';
  description: string;
  emoji: string;
}

export const plants: Plant[] = [
  {
    id: 1,
    name: 'Espada-de-São-Jorge',
    scientificName: 'Sansevieria trifasciata',
    category: 'Interior',
    light: 'Meia-sombra',
    water: 'Pouca',
    description: 'Planta resistente de fácil cultivo, ideal para iniciantes. Purifica o ar.',
    emoji: '🌿',
  },
  {
    id: 2,
    name: 'Jiboia',
    scientificName: 'Epipremnum aureum',
    category: 'Interior',
    light: 'Meia-sombra',
    water: 'Moderada',
    description: 'Trepadeira popular que se adapta a diversos ambientes. Cresce rápido.',
    emoji: '🍃',
  },
  {
    id: 3,
    name: 'Cacto Mandala',
    scientificName: 'Astrophytum asterias',
    category: 'Cacto',
    light: 'Sol pleno',
    water: 'Pouca',
    description: 'Cacto de formato geométrico, ideal para coleções. Necessita pouca água.',
    emoji: '🌵',
  },
  {
    id: 4,
    name: 'Echeveria',
    scientificName: 'Echeveria elegans',
    category: 'Suculenta',
    light: 'Sol pleno',
    water: 'Pouca',
    description: 'Suculenta de roseta com tons azuis. Decorativa e de baixa manutenção.',
    emoji: '🪴',
  },
  {
    id: 5,
    name: 'Costela-de-Adão',
    scientificName: 'Monstera deliciosa',
    category: 'Interior',
    light: 'Meia-sombra',
    water: 'Moderada',
    description: 'Planta tropical de folhas largas e recortadas. Tendência em decoração.',
    emoji: '🌿',
  },
  {
    id: 6,
    name: 'Rosa-pedra',
    scientificName: 'Sempervivum tectorum',
    category: 'Suculenta',
    light: 'Sol pleno',
    water: 'Pouca',
    description: 'Suculenta que forma rosetas compactas. Resiste ao frio intenso.',
    emoji: '🌵',
  },
  {
    id: 7,
    name: 'Lírio-da-paz',
    scientificName: 'Spathiphyllum wallisii',
    category: 'Interior',
    light: 'Sombra',
    water: 'Frequente',
    description: 'Planta com flores brancas elegantes. Adapta-se a ambientes com pouca luz.',
    emoji: '🌸',
  },
  {
    id: 8,
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    category: 'Suculenta',
    light: 'Sol pleno',
    water: 'Pouca',
    description: 'Planta medicinal com propriedades cicatrizantes. Fácil de cultivar.',
    emoji: '🪴',
  },
];
