import { DosageFormType, UpdateHistoryEntry } from '@prisma/client';
import prisma from '../client';
import {
  NewDosageFormTypeRequest,
  UpdateDosageFormTypeRequest
} from '../models/DosageFormTypeRequests';
import { CrudInstruction } from '../types';
import IRepository from './IRepository';

/**
 * @classdesc Db Operations for DosageFormTypes
 */
class DosageFormTypeRepository implements IRepository {
  /**
   * Returns an array of all existing DosageFormTypes
   * @return { Promise<DosageFormType []> }
   */
  findAll(): Promise<DosageFormType[]> {
    return prisma.dosageFormType.findMany();
  }
  /**
   *
   * @param { number } id
   * @return { DosageFormType | null }
   */
  findById(id: number): Promise<DosageFormType | null> {
    return prisma.dosageFormType.findUnique({ where: { id: id } });
  }
  /**
   *
   * @param { NewDosageFormTypeRequest } newDosageFormType
   * @return { Promise<DosageFormType> }
   */
  async create(
    newDosageFormType: NewDosageFormTypeRequest
  ): Promise<DosageFormType> {
    return prisma.$transaction(async (prisma) => {
      const savedDosageFormType = await prisma.dosageFormType.create({
        data: {
          name: newDosageFormType.name
        }
      });

      await prisma.updateHistoryEntry.create({
        data: {
          userId: newDosageFormType.userId,
          dataId: savedDosageFormType.id,
          instruction: CrudInstruction.CREATE,
          tableName: 'dosage_form_type',
          data: JSON.stringify(newDosageFormType),
          createdAt: new Date()
        }
      });

      return savedDosageFormType;
    });
  }
  /**
   *
   * @param { UpdateDosageFormTypeRequest } updatedDosageFormType
   * @return { Promise<DosageFormType> }
   */
  async update(
    updatedDosageFormType: UpdateDosageFormTypeRequest
  ): Promise<DosageFormType> {
    return prisma.$transaction(async (prisma) => {
      const savedDosageFormType = await prisma.dosageFormType.update({
        where: {
          id: updatedDosageFormType.id
        },
        data: {
          name: updatedDosageFormType.name
        }
      });
      await prisma.updateHistoryEntry.create({
        data: {
          userId: updatedDosageFormType.userId,
          dataId: savedDosageFormType.id,
          instruction: CrudInstruction.UPDATE,
          tableName: 'dosage_form_type',
          data: JSON.stringify(updatedDosageFormType),
          createdAt: new Date()
        }
      });

      return savedDosageFormType;
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
        tableName: 'dosage_form_type'
      }
    });
  }
}

export default new DosageFormTypeRepository();
