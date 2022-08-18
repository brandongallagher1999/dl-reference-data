import { UnitType, UpdateHistoryEntry } from '@prisma/client';
import prisma from '../client';
import {
  NewUnitTypeRequest,
  UpdateUnitTypeRequest
} from '../models/UnitTypeRequests';
import { CrudInstruction } from '../types';
import IRepository from './IRepository';

/**
 * @classdesc Db Operations for Unit Types
 */
class UnitTypeRepository implements IRepository {
  /**
   * Returns an array of all existing Unit Types
   * @return { Promise<UnitType []> }
   */
  findAll(): Promise<UnitType[]> {
    return prisma.unitType.findMany();
  }
  /**
   *
   * @param { number } id
   * @return { UnitType | null }
   */
  findById(id: number): Promise<UnitType | null> {
    return prisma.unitType.findUnique({ where: { id: id } });
  }
  /**
   *
   * @param { NewUnitTypeRequest } newUnitType
   * @return { Promise<UnitType> }
   */
  async create(newUnitType: NewUnitTypeRequest): Promise<UnitType> {
    return prisma.$transaction(async (prisma) => {
      const savedUnitType = await prisma.unitType.create({
        data: {
          name: newUnitType.name
        }
      });

      await prisma.updateHistoryEntry.create({
        data: {
          userId: newUnitType.userId,
          dataId: savedUnitType.id,
          instruction: CrudInstruction.CREATE,
          tableName: 'unit_types',
          data: JSON.stringify(newUnitType),
          createdAt: new Date()
        }
      });

      return savedUnitType;
    });
  }
  /**
   *
   * @param { UpdateUnitTypeRequest } updatedUnitType
   * @return { Promise<UnitType> }
   */
  async update(updatedUnitType: UpdateUnitTypeRequest): Promise<UnitType> {
    return prisma.$transaction(async (prisma) => {
      const savedUnitType = await prisma.unitType.update({
        where: {
          id: updatedUnitType.id
        },
        data: {
          name: updatedUnitType.name
        }
      });
      await prisma.updateHistoryEntry.create({
        data: {
          userId: updatedUnitType.userId,
          dataId: savedUnitType.id,
          instruction: CrudInstruction.UPDATE,
          tableName: 'unit_types',
          data: JSON.stringify(updatedUnitType),
          createdAt: new Date()
        }
      });

      return savedUnitType;
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
        tableName: 'unit_types'
      }
    });
  }
}

export default new UnitTypeRepository();
