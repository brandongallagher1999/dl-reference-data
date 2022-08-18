import { ProductCategory, UpdateHistoryEntry } from '@prisma/client';
import prisma from '../client';
import {
  NewProductCategoryRequest,
  UpdateProductCategoryRequest
} from '../models/ProductCategoryRequests';
import { CrudInstruction } from '../types';
import IRepository from './IRepository';

/**
 * @classdesc Db Operations for ProductCategory
 */
class ProductCategoryRepository implements IRepository {
  /**
   * Returns an array of all existing ProductCategory
   * @return { Promise<ProductCategory []> }
   */
  findAll(): Promise<ProductCategory[]> {
    return prisma.productCategory.findMany();
  }
  /**
   *
   * @param { number } id
   * @return { ProductCategory | null }
   */
  findById(id: number): Promise<ProductCategory | null> {
    return prisma.productCategory.findUnique({ where: { id: id } });
  }
  /**
   *
   * @param { NewProductCategoryRequest } newProductCategory
   * @return { Promise<ProductCategory> }
   */
  async create(
    newProductCategory: NewProductCategoryRequest
  ): Promise<ProductCategory> {
    return prisma.$transaction(async (prisma) => {
      const savedProductCategory = await prisma.productCategory.create({
        data: {
          name: newProductCategory.name
        }
      });

      await prisma.updateHistoryEntry.create({
        data: {
          userId: newProductCategory.userId,
          dataId: savedProductCategory.id,
          instruction: CrudInstruction.CREATE,
          tableName: 'product_categories',
          data: JSON.stringify(newProductCategory),
          createdAt: new Date()
        }
      });

      return savedProductCategory;
    });
  }
  /**
   *
   * @param { UpdateProductCategoryRequest } updatedProductCategory
   * @return { Promise<ProductCategory> }
   */
  async update(
    updatedProductCategory: UpdateProductCategoryRequest
  ): Promise<ProductCategory> {
    return prisma.$transaction(async (prisma) => {
      const savedProductCategory = await prisma.productCategory.update({
        where: {
          id: updatedProductCategory.id
        },
        data: {
          name: updatedProductCategory.name
        }
      });
      await prisma.updateHistoryEntry.create({
        data: {
          userId: updatedProductCategory.userId,
          dataId: savedProductCategory.id,
          instruction: CrudInstruction.UPDATE,
          tableName: 'product_categories',
          data: JSON.stringify(updatedProductCategory),
          createdAt: new Date()
        }
      });

      return savedProductCategory;
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
        tableName: 'product_categories'
      }
    });
  }
}

export default new ProductCategoryRepository();
