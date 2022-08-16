import { Tag, UpdateHistoryEntry } from "@prisma/client";
import prisma from "../client";
import { NewTagRequest, UpdateTagRequest } from "../models/TagRequests";
import { CrudInstruction } from "../types";
import IRepository from "./IRepository";

/**
 * @classdesc Db Operations for Tags
 */
class TagRepository implements IRepository {
  /**
   * Returns an array of all existing tags
   * @return { Promise<Tag []> }
   */
  findAll(): Promise<Tag[]> {
    return prisma.tag.findMany();
  }
  /**
   *
   * @param { number } id
   * @return { Tag | null }
   */
  findById(id: number): Promise<Tag | null> {
    return prisma.tag.findUnique({ where: { id: id } });
  }
  /**
   *
   * @param { NewTagRequest } newTag
   * @return { Promise<Tag> }
   */
  async create(newTag: NewTagRequest): Promise<Tag> {
    return prisma.$transaction(async (prisma) => {
      const savedTag = await prisma.tag.create({
        data: {
          name: newTag.name,
        },
      });

      await prisma.updateHistoryEntry.create({
        data: {
          userId: newTag.userId,
          dataId: savedTag.id,
          instruction: CrudInstruction.CREATE,
          tableName: "tags",
          data: JSON.stringify(newTag),
          createdAt: new Date(),
        },
      });

      return savedTag;
    });
  }
  /**
   *
   * @param { UpdateTagRequest } updatedTag
   * @return { Promise<Tag> }
   */
  async update(updatedTag: UpdateTagRequest): Promise<Tag> {
    return prisma.$transaction(async (prisma) => {
      const savedTag = await prisma.tag.update({
        where: {
          id: updatedTag.id,
        },
        data: {
          name: updatedTag.name,
        },
      });
      await prisma.updateHistoryEntry.create({
        data: {
          userId: updatedTag.userId,
          dataId: savedTag.id,
          instruction: CrudInstruction.UPDATE,
          tableName: "tags",
          data: JSON.stringify(updatedTag),
          createdAt: new Date(),
        },
      });

      return savedTag;
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
        tableName: "tags",
      },
    });
  }
}

export default new TagRepository();
