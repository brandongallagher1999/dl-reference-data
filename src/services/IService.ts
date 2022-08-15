import { ServiceResponse } from 'dlpos-core';

interface IService {
    findAll() : Promise<ServiceResponse>;
    findById(id: string): Promise<ServiceResponse>;
    create(requestBody : any): Promise<ServiceResponse>;
    update(requestBody: any): Promise<ServiceResponse>;
    getUpdateHistory(id: string): Promise<ServiceResponse>;
}

export default IService;