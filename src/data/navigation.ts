export interface Framework {
    name: string;
    displayName: string;
    path: string;
    color: string;
}

export const frameworks: Framework[] = [
    { name: 'Offre', displayName: 'Offre', path: '#offre', color: '#323dff' },
    { name: 'Process', displayName: 'Process', path: '#process', color: '#323dff' },
    { name: 'Projet récents', displayName: 'Projet récents', path: '#proofs', color: '#323dff'},
    { name: 'FAQ', displayName: 'FAQ', path: '#faq', color: '#323dff' },
    { name: 'Réserver un créneau', displayName: 'Réserver un créneau', path: '#cta', color: '#323dff'},
];
