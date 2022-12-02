export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

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
