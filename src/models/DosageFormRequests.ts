import IRefDataRequest from './IRefDataRequest';

/**
 * Class Representing a Request to Update a Dosage Form
 */
export class UpdateDosageFormRequest implements IRefDataRequest {
  id: number;
  name: string;
  dosageFormTypeId: number;
  userId: number;

  /**
   *
   * @param { number } id id of the Dosage Form being updated
   * @param { string } name new name for the Dosage Form
   * @param { number } userId id of the user that made the update Dosage Form request
   * @param { number } dosageFormTypeId id indicating what type of dosage form it is
   */
  constructor(
    id: number,
    name: string,
    userId: number,
    dosageFormTypeId: number
  ) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.dosageFormTypeId = dosageFormTypeId;
  }
}

/**
 * Class Representing a Request to Create a Dosage Form
 */
export class NewDosageFormRequest implements IRefDataRequest {
  name: string;
  dosageFormTypeId: number;
  userId: number;

  /**
   *
   * @param { string } name name of the new Dosage Form
   * @param { number } userId id of the user that made the new Dosage Form request
   * @param { number } dosageFormTypeId id indicating what type of dosage form it is
   */
  constructor(name: string, userId: number, dosageFormTypeId: number) {
    this.name = name;
    this.userId = userId;
    this.dosageFormTypeId = dosageFormTypeId;
  }
}
