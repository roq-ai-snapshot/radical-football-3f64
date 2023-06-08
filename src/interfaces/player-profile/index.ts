import { PlayerInterface } from 'interfaces/player';

export interface PlayerProfileInterface {
  id?: string;
  player_id: string;
  personal_information?: string;
  notes?: string;
  created_at?: Date;
  updated_at?: Date;

  player?: PlayerInterface;
  _count?: {};
}
