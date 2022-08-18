import { Manufacturer, UpdateHistoryEntry } from '@prisma/client';
import prisma from '../client';
import {
  NewManufacturerRequest,
  UpdateManufacturerRequest
} from '../models/ManufacturerRequests';
import { CrudInstruction } from '../types';
import IRepository from './IRepository';

/**
 * @classdesc Db Operations for Manufacturers
 */
class ManufacturerRepository implements IRepository {
  /**
   * Returns an array of all existing manufacturers
   * @return { Promise<Manufacturer []> }
   */
  findAll(): Promise<Manufacturer[]> {
    return prisma.manufacturer.findMany();
  }
  /**
   *
   * @param { number } id
   * @return { Manufacturer | null }
   */
  findById(id: number): Promise<Manufacturer | null> {
    return prisma.manufacturer.findUnique({ where: { id: id } });
  }
  /**
   *
   * @param { NewManufacturerRequest } newManufacturer
   * @return { Promise<Manufacturer> }
   */
  async create(newManufacturer: NewManufacturerRequest): Promise<Manufacturer> {
    return prisma.$transaction(async (prisma) => {
      const savedManufacturer = await prisma.manufacturer.create({
        data: {
          shortName: newManufacturer.shortName,
          longName: newManufacturer.longName
        }
      });

      await prisma.updateHistoryEntry.create({
        data: {
          userId: newManufacturer.userId,
          dataId: savedManufacturer.id,
          instruction: CrudInstruction.CREATE,
          tableName: 'manufacturers',
          data: JSON.stringify(newManufacturer),
          createdAt: new Date()
        }
      });

      return savedManufacturer;
    });
  }
  /**
   *
   * @param { UpdateManufacturerRequest } updatedManufacturer
   * @return { Promise<Manufacturer> }
   */
  async update(
    updatedManufacturer: UpdateManufacturerRequest
  ): Promise<Manufacturer> {
    return prisma.$transaction(async (prisma) => {
      const savedManufacturer = await prisma.manufacturer.update({
        where: {
          id: updatedManufacturer.id
        },
        data: {
          shortName: updatedManufacturer.shortName,
          longName: updatedManufacturer.longName
        }
      });
      await prisma.updateHistoryEntry.create({
        data: {
          userId: updatedManufacturer.userId,
          dataId: savedManufacturer.id,
          instruction: CrudInstruction.UPDATE,
          tableName: 'manufacturers',
          data: JSON.stringify(updatedManufacturer),
          createdAt: new Date()
        }
      });

      return savedManufacturer;
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
        tableName: 'manufacturers'
      }
    });
  }
}

export default new ManufacturerRepository();
