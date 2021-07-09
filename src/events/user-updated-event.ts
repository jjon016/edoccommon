import { Subjects } from './subjects';
import { FontTypes } from '../types/font-types';

export interface UserUpdatedEvent {
  subject: Subjects.UserUpdated;
  data: {
    id: string;
    email: string;
    name?: string;
    phone?: string;
    signaturetype?: FontTypes;
    signature?: string;
    initialstype?: FontTypes;
    initials?: string;
    version: number;
  };
}
