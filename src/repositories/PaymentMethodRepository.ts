import { PaymentMethod, UpdateHistoryEntry } from '@prisma/client';
import prisma from '../client';
import {
  NewPaymentMethodRequest,
  UpdatePaymentMethodRequest
} from '../models/PaymentMethodRequests';
import { CrudInstruction } from '../types';
import IRepository from './IRepository';

/**
 * @classdesc Db Operations for PaymentMethods
 */
class PaymentMethodRepository implements IRepository {
  /**
   * Returns an array of all existing PaymentMethods
   * @return { Promise<PaymentMethod []> }
   */
  findAll(): Promise<PaymentMethod[]> {
    return prisma.paymentMethod.findMany();
  }
  /**
   *
   * @param { number } id
   * @return { PaymentMethod | null }
   */
  findById(id: number): Promise<PaymentMethod | null> {
    return prisma.paymentMethod.findUnique({ where: { id: id } });
  }
  /**
   *
   * @param { NewPaymentMethodRequest } newPaymentMethod
   * @return { Promise<PaymentMethod> }
   */
  async create(
    newPaymentMethod: NewPaymentMethodRequest
  ): Promise<PaymentMethod> {
    return prisma.$transaction(async (prisma) => {
      const savedPaymentMethod = await prisma.paymentMethod.create({
        data: {
          shortName: newPaymentMethod.shortName,
          longName: newPaymentMethod.longName
        }
      });

      await prisma.updateHistoryEntry.create({
        data: {
          userId: newPaymentMethod.userId,
          dataId: savedPaymentMethod.id,
          instruction: CrudInstruction.CREATE,
          tableName: 'payment_methods',
          data: JSON.stringify(newPaymentMethod),
          createdAt: new Date()
        }
      });

      return savedPaymentMethod;
    });
  }
  /**
   *
   * @param { UpdatePaymentMethodRequest } updatedPaymentMethod
   * @return { Promise<PaymentMethod> }
   */
  async update(
    updatedPaymentMethod: UpdatePaymentMethodRequest
  ): Promise<PaymentMethod> {
    return prisma.$transaction(async (prisma) => {
      const savedPaymentMethod = await prisma.paymentMethod.update({
        where: {
          id: updatedPaymentMethod.id
        },
        data: {
          shortName: updatedPaymentMethod.shortName,
          longName: updatedPaymentMethod.longName
        }
      });
      await prisma.updateHistoryEntry.create({
        data: {
          userId: updatedPaymentMethod.userId,
          dataId: savedPaymentMethod.id,
          instruction: CrudInstruction.UPDATE,
          tableName: 'payment_methods',
          data: JSON.stringify(updatedPaymentMethod),
          createdAt: new Date()
        }
      });

      return savedPaymentMethod;
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
        tableName: 'payment_methods'
      }
    });
  }
}

export default new PaymentMethodRepository();
