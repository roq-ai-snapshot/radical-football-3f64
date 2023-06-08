import { ParentInterface } from 'interfaces/parent';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { CoachInterface } from 'interfaces/coach';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  coach_id: string;
  created_at?: Date;
  updated_at?: Date;
  parent?: ParentInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  coach?: CoachInterface;
  _count?: {
    parent?: number;
  };
}
