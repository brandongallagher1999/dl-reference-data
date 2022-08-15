import IModel from '../models/IModel';

interface IRepository {
  findAll(): Promise<any[]>;
  findById(id: number): Promise<any | null>;
  create(newObject: IModel): Promise<any>;
  update(updatedObject: IModel): Promise<any>;
  getUpdateHistory(id: number): Promise<any[]>;
}

export default IRepository;
