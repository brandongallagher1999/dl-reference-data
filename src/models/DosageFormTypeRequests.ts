import IRefDataRequest from './IRefDataRequest';

/**
 * Class Representing a Request to Update a Dosage Form Type
 */
export class UpdateDosageFormTypeRequest implements IRefDataRequest {
  id: number;
  name: string;
  userId: number;

  /**
   *
   * @param { number } id id of the Dosage Form Type being updated
   * @param { string } name new name for the Dosage Form Type
   * @param { number } userId id of the user that made the update Dosage Form Type request
   */
  constructor(id: number, name: string, userId: number) {
    this.id = id;
    this.name = name;
    this.userId = userId;
  }
}

/**
 * Class Representing a Request to Create a Dosage Form Type
 */
export class NewDosageFormTypeRequest implements IRefDataRequest {
  name: string;
  userId: number;

  /**
   *
   * @param { string } name name of the new Dosage Form Type
   * @param { number } userId id of the user that made the new Dosage Form Type request
   */
  constructor(name: string, userId: number) {
    this.name = name;
    this.userId = userId;
  }
}
