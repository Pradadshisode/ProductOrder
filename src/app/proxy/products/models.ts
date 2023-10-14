import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateProductDto {
  name: string;
  description: string;
  price: number;
}

export interface ProductDto extends AuditedEntityDto<string> {
  id?: string;
  name?: string;
  description?: string;
  price: number;
}
