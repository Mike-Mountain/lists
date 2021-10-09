import { BaseModel } from '../../shared/models/base.model';
import { RoleType } from '../../shared/enums/role';

export class Session {
  jwt: string;
  user: any;

  constructor(params?: Partial<Session>) {
    this.jwt = params?.jwt || '';
    this.user = new AppUser(params?.user);
  }
}

export class AppUser extends BaseModel {
  username: string;
  email: string;
  confirmed: boolean;
  role: Role;

  constructor(params: Partial<AppUser>) {
    super(params);
    this.username = params?.username || '';
    this.email = params?.email || '';
    this.confirmed = params?.confirmed || false;
    this.role = new Role(params);
  }
}

export class Role extends BaseModel {
  name: string;
  description: string;
  type: RoleType | undefined;

  constructor(params: Partial<Role>) {
    super(params);
    this.name = params?.name || '';
    this.description = params?.description || '';
    this.type = params?.type;
  }
}

export function createEmptyState(): Session {
  return new Session({});
}
