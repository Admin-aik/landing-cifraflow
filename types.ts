
export enum Section {
  HOME = 'HOME',
  HOW_IT_WORKS = 'HOW_IT_WORKS',
  LEARNING_PATH = 'LEARNING_PATH',
  MASTER_KEYS = 'MASTER_KEYS',
  CTA = 'CTA'
}

export interface LevelInfo {
  id: string;
  title: string;
  ageRange: string;
  alias: string;
  progress: number;
  description: string;
  color: string;
}

export interface KeySystem {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  benefit: string;
}
