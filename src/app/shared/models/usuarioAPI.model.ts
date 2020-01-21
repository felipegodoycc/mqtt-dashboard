interface UserData {
  name?: string;
  last_name?: string;
}

interface Role {
  admin: boolean;
  control: boolean;
  view: boolean;
}

export class UsuarioAPI {
    active?: boolean;
    reset_password?: boolean;
    _id?: string;
    username: string;
    email?: string;
    reset_token?: string;
    created?: Date;
    updated?: Date;
    password: string;
    userdata?: UserData;
    role: Role;
}
