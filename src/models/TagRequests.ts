import IRefDataRequest from "./IRefDataRequest";

/**
 * Class Representing a Request to Update a Tag
 */
export class UpdateTagRequest implements IRefDataRequest {
  id: number;
  name: string;
  userId: number;

  /**
   *
   * @param { number } id id of the tag being updated
   * @param { string } name new name for the tag
   * @param { number } userId id of the user that made the update tag request
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
export class NewTagRequest implements IRefDataRequest {
  name: string;
  userId: number;

  /**
   *
   * @param { string } name name of the new Tag
   * @param { number } userId id of the user that made the new tag request
   */
  constructor(name: string, userId: number) {
    this.name = name;
    this.userId = userId;
  }
}
