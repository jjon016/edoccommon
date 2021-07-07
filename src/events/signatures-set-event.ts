import { Subjects } from './subjects';

export interface SignaturesSetEvent {
  subject: Subjects.SignaturesSet;
  data: {
    userid: string;
    version: number;
  };
}
