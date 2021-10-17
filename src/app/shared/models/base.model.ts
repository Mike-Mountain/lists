import { AppUser } from '../../core/session/session.model';

export class BaseModel {
  id: string;
  created_at: Date;
  updated_at: Date;
  created_by: AppUser;
  updated_by: AppUser;

  constructor(params: Partial<BaseModel>) {
    this.id = params?.id || '';
    this.created_at = params?.created_at || new Date();
    this.updated_at = params?.created_at || new Date();
    this.created_by = params?.created_by || ({} as AppUser);
    this.updated_by = params?.updated_by || ({} as AppUser);
  }
}
