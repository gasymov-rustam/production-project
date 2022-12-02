import { UserRole } from '../consts';

export interface User {
  id: string;
  userName: string;
  avatar?: string;

  roles?: UserRole[];
}

export interface UserSchema {
  authUser?: User;
  _inited: boolean;
}
