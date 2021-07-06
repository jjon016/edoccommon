import { Subjects } from './subjects';

export interface SignaturesSetEvent {
  subject: Subjects.SignaturesSet;
  data: {
    userId: string;
    signaturetype: string;
    signature: string;
    initialstype: string;
    initials: string;
    version: number;
  };
}
