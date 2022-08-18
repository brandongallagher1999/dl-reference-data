import IRefDataRequest from './IRefDataRequest';

/**
 * Class Representing a Request to Update a Product Category
 */
export class UpdateProductCategoryRequest implements IRefDataRequest {
  id: number;
  name: string;
  userId: number;

  /**
   *
   * @param { number } id id of the Product Category being updated
   * @param { string } name new name for the Product Category
   * @param { number } userId id of the user that made the update Product Category request
   */
  constructor(id: number, name: string, userId: number) {
    this.id = id;
    this.name = name;
    this.userId = userId;
  }
}

/**
 * Class Representing a Request to Create a Product Category
 */
export class NewProductCategoryRequest implements IRefDataRequest {
  name: string;
  userId: number;

  /**
   *
   * @param { string } name name of the new Product Category
   * @param { number } userId id of the user that made the new Product Category request
   */
  constructor(name: string, userId: number) {
    this.name = name;
    this.userId = userId;
  }
}
