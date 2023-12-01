import { DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm';
import { BaseEntity } from '../entities/base-entity';
import { EntityId } from 'typeorm/repository/EntityId';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface IRepository<T extends BaseEntity> {
  findAll(o?: FindManyOptions<T>): Promise<T[]>;
  findOne(o: FindOneOptions<T>): Promise<T>;
  create(data: DeepPartial<T>): Promise<T>;
  update(id: EntityId, data: QueryDeepPartialEntity<T>): Promise<T>;
  delete(id: EntityId): Promise<void>;
}
