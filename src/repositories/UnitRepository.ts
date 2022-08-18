import { Unit, UpdateHistoryEntry } from '@prisma/client';
import prisma from '../client';
import { NewUnitRequest, UpdateUnitRequest } from '../models/UnitRequests';
import { CrudInstruction } from '../types';
import IRepository from './IRepository';

/**
 * @classdesc Db Operations for Unit
 */
class UnitRepository implements IRepository {
  /**
   * Returns an array of all existing Unit
   * @return { Promise<Unit []> }
   */
  findAll(): Promise<Unit[]> {
    return prisma.unit.findMany();
  }
  /**
   *
   * @param { number } id
   * @return { Unit | null }
   */
  findById(id: number): Promise<Unit | null> {
    return prisma.unit.findUnique({ where: { id: id } });
  }
  /**
   *
   * @param { NewUnitRequest } newUnit
   * @return { Promise<Unit> }
   */
  async create(newUnit: NewUnitRequest): Promise<Unit> {
    return prisma.$transaction(async (prisma) => {
      const savedUnit = await prisma.unit.create({
        data: {
          shortName: newUnit.shortName,
          longName: newUnit.shortName,
          unitTypeId: newUnit.unitTypeId
        }
      });

      await prisma.updateHistoryEntry.create({
        data: {
          userId: newUnit.userId,
          dataId: savedUnit.id,
          instruction: CrudInstruction.CREATE,
          tableName: 'units',
          data: JSON.stringify(newUnit),
          createdAt: new Date()
        }
      });

      return savedUnit;
    });
  }
  /**
   *
   * @param { UpdateUnitRequest } updatedUnit
   * @return { Promise<Unit> }
   */
  async update(updatedUnit: UpdateUnitRequest): Promise<Unit> {
    return prisma.$transaction(async (prisma) => {
      const savedUnit = await prisma.unit.update({
        where: {
          id: updatedUnit.id
        },
        data: {
          shortName: updatedUnit.shortName,
          longName: updatedUnit.longName,
          unitTypeId: updatedUnit.unitTypeId
        }
      });
      await prisma.updateHistoryEntry.create({
        data: {
          userId: updatedUnit.userId,
          dataId: savedUnit.id,
          instruction: CrudInstruction.UPDATE,
          tableName: 'units',
          data: JSON.stringify(updatedUnit),
          createdAt: new Date()
        }
      });

      return savedUnit;
    });
  }
  /**
   *
   * @param { number } unitTypeId
   */
  async findByUnitTypeId(unitTypeId: number) {
    return prisma.unit.findMany({
      where: {
        unitTypeId: unitTypeId
      }
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
        tableName: 'units'
      }
    });
  }
}

export default new UnitRepository();
