import IRefDataRequest from './IRefDataRequest';

/**
 * Class Representing a Request to Update a Unit
 */
export class UpdateUnitRequest implements IRefDataRequest {
  id: number;
  shortName: string;
  longName: string;
  unitTypeId: number;
  userId: number;

  /**
   * @param {number} id id of the Unit being updated
   * @param {string} shortName abbreviated name of the Unit
   * @param {string} longName full name of the Unit
   * @param {number} unitTypeId id indicating what type of unit it is
   * @param {number} userId id of the user that made the update Unit request
   */
  constructor(
    id: number,
    shortName: string,
    longName: string,
    unitTypeId: number,
    userId: number
  ) {
    this.id = id;
    this.shortName = shortName;
    this.longName = longName;
    this.unitTypeId = unitTypeId;
    this.userId = userId;
  }
}

/**
 * Class Representing a Request to Create a Unit
 */
export class NewUnitRequest implements IRefDataRequest {
  shortName: string;
  longName: string;
  unitTypeId: number;
  userId: number;

  /**
   * @param {string} shortName abbreviated name of the Unit
   * @param {string} longName full name of the Unit
   * @param {number} unitTypeId id indicating what type of unit it is
   * @param {number} userId id of the user that made the create Unit request
   */
  constructor(
    shortName: string,
    longName: string,
    unitTypeId: number,
    userId: number
  ) {
    this.shortName = shortName;
    this.longName = longName;
    this.unitTypeId = unitTypeId;
    this.userId = userId;
  }
}
