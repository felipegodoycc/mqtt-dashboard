import { UsuarioAPI } from '../models/usuarioAPI.model';

export interface LoginDTO {
    ok: boolean;
    user: UsuarioAPI;
    token: string;
    reset_password?: boolean;
}
