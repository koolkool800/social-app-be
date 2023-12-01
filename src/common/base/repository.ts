import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { BaseEntity } from '../entities/base-entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { IRepository } from './repository.interface';

export abstract class BaseRepository<T extends BaseEntity>
  implements IRepository<T>
{
  constructor(protected readonly repository: Repository<T>) {}

  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  async update(id: any, data: QueryDeepPartialEntity<T>): Promise<T> {
    await this.repository.update(id, data);
    return await this.repository.findOne(id);
  }

  async delete(id: any): Promise<void> {
    await this.repository.delete(id);
  }

  async createQueryBuilder() {
    return this.repository.createQueryBuilder();
  }

  async save(order: DeepPartial<T>): Promise<void> {
    await this.repository.save(order);
  }

  async findOne(opt: FindOneOptions<T>) {
    return this.repository.findOne(opt);
  }
}
