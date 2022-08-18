import IRefDataRequest from './IRefDataRequest';

/**
 * Class Representing a Request to Update a Dosage Form Type
 */
export class UpdateManufacturerRequest implements IRefDataRequest {
  id: number;
  shortName: string;
  longName: string;
  userId: number;

  /**
   *
   * @param { number } id id of the Dosage Form Type being updated
   * @param { string } shortName  new name for the Dosage Form Type
   * @param { string } longName  new name for the Dosage Form Type
   * @param { number } userId id of the user that made the update Dosage Form Type request
   */
  constructor(id: number, shortName: string, longName: string, userId: number) {
    this.id = id;
    this.shortName = shortName;
    this.longName = longName;
    this.userId = userId;
  }
}

/**
 * Class Representing a Request to Create a Dosage Form Type
 */
export class NewManufacturerRequest implements IRefDataRequest {
  shortName: string;
  longName: string;
  userId: number;

  /**
   *
   * @param { string } shortName  new name for the Dosage Form Type
   * @param { string } longName  new name for the Dosage Form Type
   * @param { number } userId id of the user that made the update Dosage Form Type request
   */
  constructor(shortName: string, longName: string, userId: number) {
    this.shortName = shortName;
    this.longName = longName;
    this.userId = userId;
  }
}
