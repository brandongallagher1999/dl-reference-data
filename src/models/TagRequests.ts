import IModel from './IModel';
/**
 * Class Representing a Request to Update a Tag
 */
export class UpdateTagRequest implements IModel {
  id: number;
  name: string;
  userId: number;

  /**
   *
   * @param { number } id
   * @param { string } name
   * @param { number } userId
   */
  constructor(id: number, name: string, userId: number) {
    this.id = id;
    this.name = name;
    this.userId = userId;
  }
}

/**
 * Class Representing a Request to Create a Tag
 */
export class NewTagRequest implements IModel {
  name: string;
  userId: number;

  /**
   *
   * @param { string } name
   * @param { number } userId
   */
  constructor(name: string, userId: number) {
    this.name = name;
    this.userId = userId;
  }
}
