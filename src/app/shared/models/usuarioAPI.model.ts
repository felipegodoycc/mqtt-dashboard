import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    created?: Date | string;
    updated?: Date | string;
    password?: string;
    userdata?: UserData;
    role: Role;

    constructor(){
      this.role = {
        admin: false,
        control: false,
        view: true,
      }
    }
}
