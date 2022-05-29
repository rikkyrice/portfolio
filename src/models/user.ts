export interface User {
  id: string;
  firstName: string;
  lastName: string;
  profilePicUrl: string | null;
  introduction: string;
  email: string | null;
  linkedIn: string | null;
  twitter: string | null;
  facebook: string | null;
}