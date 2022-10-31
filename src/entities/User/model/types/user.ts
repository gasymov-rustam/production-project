export interface User {
  id: string;
  userName: string;
}

export interface UserSchema {
  authUser?: User;
  _inited: boolean;
}
