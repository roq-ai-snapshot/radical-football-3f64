import { UserInterface } from 'interfaces/user';
import { PlayerInterface } from 'interfaces/player';

export interface ParentInterface {
  id?: string;
  user_id: string;
  player_id: string;
  created_at?: Date;
  updated_at?: Date;

  user?: UserInterface;
  player?: PlayerInterface;
  _count?: {};
}
