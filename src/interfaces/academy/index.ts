import { CoachInterface } from 'interfaces/coach';
import { PlayerInterface } from 'interfaces/player';
import { UserInterface } from 'interfaces/user';

export interface AcademyInterface {
  id?: string;
  name: string;
  created_at?: Date;
  updated_at?: Date;
  user_id: string;
  coach?: CoachInterface[];
  player?: PlayerInterface[];
  user?: UserInterface;
  _count?: {
    coach?: number;
    player?: number;
  };
}
