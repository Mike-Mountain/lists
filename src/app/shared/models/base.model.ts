export class BaseModel {
  id: string;
  created_at: Date;
  updated_at: Date;
  created_by: number | undefined;
  updated_by: number | undefined;

  constructor(params: Partial<BaseModel>) {
    this.id = params?.id || '';
    this.created_at = params?.created_at || new Date();
    this.updated_at = params?.created_at || new Date();
    this.created_by = params?.created_by;
    this.updated_by = params?.updated_by;
  }
}
