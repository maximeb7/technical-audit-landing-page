export interface Framework {
    name: string;
    displayName: string;
    path: string;
    color: string;
}

export const frameworks: Framework[] = [
    { name: 'Offre', displayName: 'Offre', path: '/', color: '#FF5D01' },
    { name: 'Process', displayName: 'Process', path: '/react', color: '#61DAFB' },
    { name: 'Projet récents', displayName: 'Projet récents', path: '/vue', color: '#4FC08D' },
    { name: 'FAQ', displayName: 'FAQ', path: '/svelte', color: '#FF3E00' },
    { name: 'Réserver un créneau', displayName: 'Réserver un créneau', path: '/solid', color: '#2C4F7C' },
];
