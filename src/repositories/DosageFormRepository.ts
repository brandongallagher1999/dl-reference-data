import { DosageForm, UpdateHistoryEntry } from '@prisma/client';
import prisma from '../client';
import {
  NewDosageFormRequest,
  UpdateDosageFormRequest
} from '../models/DosageFormRequests';
import { CrudInstruction } from '../types';
import IRepository from './IRepository';

/**
 * @classdesc Db Operations for DosageForms
 */
class DosageFormRepository implements IRepository {
  /**
   * Returns an array of all existing DosageForms
   * @return { Promise<DosageForm []> }
   */
  findAll(): Promise<DosageForm[]> {
    return prisma.dosageForm.findMany();
  }
  /**
   *
   * @param { number } id
   * @return { DosageForm | null }
   */
  findById(id: number): Promise<DosageForm | null> {
    return prisma.dosageForm.findUnique({ where: { id: id } });
  }
  /**
   *
   * @param { NewDosageFormRequest } newDosageForm
   * @return { Promise<DosageForm> }
   */
  async create(newDosageForm: NewDosageFormRequest): Promise<DosageForm> {
    return prisma.$transaction(async (prisma) => {
      const savedDosageForm = await prisma.dosageForm.create({
        data: {
          name: newDosageForm.name,
          dosageFormTypeId: newDosageForm.dosageFormTypeId
        }
      });

      await prisma.updateHistoryEntry.create({
        data: {
          userId: newDosageForm.userId,
          dataId: savedDosageForm.id,
          instruction: CrudInstruction.CREATE,
          tableName: 'dosage_forms',
          data: JSON.stringify(newDosageForm),
          createdAt: new Date()
        }
      });

      return savedDosageForm;
    });
  }
  /**
   *
   * @param { UpdateDosageFormRequest } updatedDosageForm
   * @return { Promise<DosageForm> }
   */
  async update(
    updatedDosageForm: UpdateDosageFormRequest
  ): Promise<DosageForm> {
    return prisma.$transaction(async (prisma) => {
      const savedDosageForm = await prisma.dosageForm.update({
        where: {
          id: updatedDosageForm.id
        },
        data: {
          name: updatedDosageForm.name,
          dosageFormTypeId: updatedDosageForm.dosageFormTypeId
        }
      });
      await prisma.updateHistoryEntry.create({
        data: {
          userId: updatedDosageForm.userId,
          dataId: savedDosageForm.id,
          instruction: CrudInstruction.UPDATE,
          tableName: 'dosage_forms',
          data: JSON.stringify(updatedDosageForm),
          createdAt: new Date()
        }
      });

      return savedDosageForm;
    });
  }
  /**
   *
   * @param { number } dosageFormTypeId
   */
  async findByDosageFormId(dosageFormTypeId: number) {
    return prisma.dosageForm.findMany({
      where: {
        dosageFormTypeId: dosageFormTypeId
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
        tableName: 'dosage_forms'
      }
    });
  }
}

export default new DosageFormRepository();
