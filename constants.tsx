
import { LevelInfo, KeySystem } from './types';

export const LEVELS: LevelInfo[] = [
  {
    id: 'junior',
    title: 'Guardián del Código',
    ageRange: '12-13 años',
    alias: 'Junior Custodian',
    progress: 33,
    description: 'Gestiona tu cantina. Aprende a diferenciar necesidad de deseo.',
    color: '#22c55e' // Green
  },
  {
    id: 'intermedio',
    title: 'Gestor del Tesoro',
    ageRange: '14-15 años',
    alias: 'Heritage Manager',
    progress: 66,
    description: 'Activa crédito y escudo. Domina protección del valor y ética de pago.',
    color: '#eab308' // Yellow
  },
  {
    id: 'avanzado',
    title: 'Constructor del Legado',
    ageRange: '16-17 años',
    alias: 'Legacy Builder',
    progress: 100,
    description: 'Opera la Bóveda. Multiplica y gestiona tu patrimonio familiar.',
    color: '#3b82f6' // Blue
  }
];

export const MASTER_KEYS: KeySystem[] = [
  {
    id: 'emergency',
    name: 'Llave de Emergencia',
    description: '¿Sin saldo? Desbloquea el crédito inteligente aprendiendo sobre reputación crediticia.',
    icon: '🔑',
    color: '#ef4444',
    benefit: 'Activa crédito inteligente'
  },
  {
    id: 'vault',
    name: 'Llave de la Bóveda',
    description: '¿Te sobró mesada? Aprende a invertir y multiplica tu dinero para ese equipo que deseas.',
    icon: '💎',
    color: '#22c55e',
    benefit: 'Multiplica tu dinero'
  },
  {
    id: 'shield',
    name: 'Llave del Escudo',
    description: 'Protege tus ahorros de la devaluación. Convierte a stablecoins y blinda tu esfuerzo.',
    icon: '🛡️',
    color: '#06b6d4',
    benefit: 'Protección contra inflación'
  }
];
