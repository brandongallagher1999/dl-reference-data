import { Supplier, UpdateHistoryEntry } from '@prisma/client';
import prisma from '../client';
import {
  NewSupplierRequest,
  UpdateSupplierRequest
} from '../models/SupplierRequests';
import { CrudInstruction } from '../types';
import IRepository from './IRepository';

/**
 * @classdesc Db Operations for Suppliers
 */
class SupplierRepository implements IRepository {
  /**
   * Returns an array of all existing Suppliers
   * @return { Promise<Supplier []> }
   */
  findAll(): Promise<Supplier[]> {
    return prisma.supplier.findMany();
  }
  /**
   *
   * @param { number } id
   * @return { Supplier | null }
   */
  findById(id: number): Promise<Supplier | null> {
    return prisma.supplier.findUnique({ where: { id: id } });
  }
  /**
   *
   * @param { NewSupplierRequest } newSupplier
   * @return { Promise<Supplier> }
   */
  async create(newSupplier: NewSupplierRequest): Promise<Supplier> {
    return prisma.$transaction(async (prisma) => {
      const savedSupplier = await prisma.supplier.create({
        data: {
          name: newSupplier.name
        }
      });

      await prisma.updateHistoryEntry.create({
        data: {
          userId: newSupplier.userId,
          dataId: savedSupplier.id,
          instruction: CrudInstruction.CREATE,
          tableName: 'suppliers',
          data: JSON.stringify(newSupplier),
          createdAt: new Date()
        }
      });

      return savedSupplier;
    });
  }
  /**
   *
   * @param { UpdateSupplierRequest } updatedSupplier
   * @return { Promise<Supplier> }
   */
  async update(updatedSupplier: UpdateSupplierRequest): Promise<Supplier> {
    return prisma.$transaction(async (prisma) => {
      const savedSupplier = await prisma.supplier.update({
        where: {
          id: updatedSupplier.id
        },
        data: {
          name: updatedSupplier.name
        }
      });
      await prisma.updateHistoryEntry.create({
        data: {
          userId: updatedSupplier.userId,
          dataId: savedSupplier.id,
          instruction: CrudInstruction.UPDATE,
          tableName: 'suppliers',
          data: JSON.stringify(updatedSupplier),
          createdAt: new Date()
        }
      });

      return savedSupplier;
    });
  }
  /**
   *
   * @param { number } id
   * @return { UpdateHistoryEntry [] }
   */
  async getUpdateHistory(id: number): Promise<UpdateHistoryEntry[]> {
    return prisma.updateHistoryEntry.findMany({
      where: {
        dataId: id,
        tableName: 'suppliers'
      }
    });
  }
}

export default new SupplierRepository();
