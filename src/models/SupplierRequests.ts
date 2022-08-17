import IRefDataRequest from './IRefDataRequest';

/**
 * Class Representing a Request to Update a Supplier
 */
export class UpdateSupplierRequest implements IRefDataRequest {
  id: number;
  name: string;
  userId: number;

  /**
   *
   * @param { number } id id of the Supplier being updated
   * @param { string } name new name for the Supplier
   * @param { number } userId id of the user that made the update Supplier request
   */
  constructor(id: number, name: string, userId: number) {
    this.id = id;
    this.name = name;
    this.userId = userId;
  }
}

/**
 * Class Representing a Request to Create a Supplier
 */
export class NewSupplierRequest implements IRefDataRequest {
  name: string;
  userId: number;

  /**
   *
   * @param { string } name name of the new Supplier
   * @param { number } userId id of the user that made the new Supplier request
   */
  constructor(name: string, userId: number) {
    this.name = name;
    this.userId = userId;
  }
}
