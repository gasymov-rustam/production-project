export interface User {
  id: string;
  userName: string;
  avatar?: string;
}

export interface UserSchema {
  authUser?: User;
  _inited: boolean;
}
