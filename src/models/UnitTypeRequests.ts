import IRefDataRequest from './IRefDataRequest';

/**
 * Class Representing a Request to Update a Unit Type
 */
export class UpdateUnitTypeRequest implements IRefDataRequest {
  id: number;
  name: string;
  userId: number;

  /**
   *
   * @param { number } id id of the UnitType being updated
   * @param { string } name new name for the Unit Type
   * @param { number } userId id of the user that made the update Unit Type request
   */
  constructor(id: number, name: string, userId: number) {
    this.id = id;
    this.name = name;
    this.userId = userId;
  }
}

/**
 * Class Representing a Request to Create a Unit Type
 */
export class NewUnitTypeRequest implements IRefDataRequest {
  name: string;
  userId: number;

  /**
   *
   * @param { string } name name of the new Unit Type
   * @param { number } userId id of the user that made the new Unit Type request
   */
  constructor(name: string, userId: number) {
    this.name = name;
    this.userId = userId;
  }
}
