import { ActiveIngredient, UpdateHistoryEntry } from '@prisma/client';
import prisma from '../client';
import {
  NewActiveIngredientRequest,
  UpdateActiveIngredientRequest
} from '../models/ActiveIngredientRequest';
import { CrudInstruction } from '../types';
import IRepository from './IRepository';

/**
 * @classdesc Db Operations for ActiveIngredients
 */
class ActiveIngredientRepository implements IRepository {
  /**
   * Returns an array of all existing ActiveIngredients
   * @return { Promise<ActiveIngredient []> }
   */
  findAll(): Promise<ActiveIngredient[]> {
    return prisma.activeIngredient.findMany();
  }
  /**
   *
   * @param { number } id
   * @return { ActiveIngredient | null }
   */
  findById(id: number): Promise<ActiveIngredient | null> {
    return prisma.activeIngredient.findUnique({ where: { id: id } });
  }
  /**
   *
   * @param { NewActiveIngredientRequest } newActiveIngredient
   * @return { Promise<ActiveIngredient> }
   */
  async create(
    newActiveIngredient: NewActiveIngredientRequest
  ): Promise<ActiveIngredient> {
    return prisma.$transaction(async (prisma) => {
      const savedActiveIngredient = await prisma.activeIngredient.create({
        data: {
          name: newActiveIngredient.name
        }
      });

      await prisma.updateHistoryEntry.create({
        data: {
          userId: newActiveIngredient.userId,
          dataId: savedActiveIngredient.id,
          instruction: CrudInstruction.CREATE,
          tableName: 'active_ingredients',
          data: JSON.stringify(newActiveIngredient),
          createdAt: new Date()
        }
      });

      return savedActiveIngredient;
    });
  }
  /**
   *
   * @param { UpdateActiveIngredientRequest } updatedActiveIngredient
   * @return { Promise<ActiveIngredient> }
   */
  async update(
    updatedActiveIngredient: UpdateActiveIngredientRequest
  ): Promise<ActiveIngredient> {
    return prisma.$transaction(async (prisma) => {
      const savedActiveIngredient = await prisma.activeIngredient.update({
        where: {
          id: updatedActiveIngredient.id
        },
        data: {
          name: updatedActiveIngredient.name
        }
      });
      await prisma.updateHistoryEntry.create({
        data: {
          userId: updatedActiveIngredient.userId,
          dataId: savedActiveIngredient.id,
          instruction: CrudInstruction.UPDATE,
          tableName: 'active_ingredients',
          data: JSON.stringify(updatedActiveIngredient),
          createdAt: new Date()
        }
      });

      return savedActiveIngredient;
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
        tableName: 'active_ingredients'
      }
    });
  }
}

export default new ActiveIngredientRepository();
