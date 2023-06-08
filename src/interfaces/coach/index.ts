import { PlayerInterface } from 'interfaces/player';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';

export interface CoachInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  created_at?: Date;
  updated_at?: Date;
  player?: PlayerInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    player?: number;
  };
}
