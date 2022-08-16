import IRefDataRequest from "./IRefDataRequest";

/**
 * Class Representing a Request to Update a Active Ingredient
 */
export class UpdateActiveIngredientRequest implements IRefDataRequest {
  id: number;
  name: string;
  userId: number;

  /**
   *
   * @param { number } id id of the Active Ingredient being updated
   * @param { string } name new name for the Active Ingredient
   * @param { number } userId id of the user that made the update Active Ingredient request
   */
  constructor(id: number, name: string, userId: number) {
    this.id = id;
    this.name = name;
    this.userId = userId;
  }
}

/**
 * Class Representing a Request to Create a Active Ingredient
 */
export class NewActiveIngredientRequest implements IRefDataRequest {
  name: string;
  userId: number;

  /**
   *
   * @param { string } name name of the new Active Ingredient
   * @param { number } userId id of the user that made the new Active Ingredient request
   */
  constructor(name: string, userId: number) {
    this.name = name;
    this.userId = userId;
  }
}
