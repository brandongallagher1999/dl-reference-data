import IRefDataRequest from "../models/IRefDataRequest";

interface IRepository {
  findAll(): Promise<any[]>;
  findById(id: number): Promise<any | null>;
  create(newObject: IRefDataRequest): Promise<any>;
  update(updatedObject: IRefDataRequest): Promise<any>;
  getUpdateHistory(id: number): Promise<any[]>;
}

export default IRepository;
