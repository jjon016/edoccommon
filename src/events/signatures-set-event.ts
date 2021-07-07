import { Subjects } from './subjects';

export interface SignaturesSetEvent {
  subject: Subjects.SignaturesSet;
  data: {
    userId: string;
    version: number;
  };
}
