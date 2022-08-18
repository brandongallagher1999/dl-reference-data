import IRefDataRequest from './IRefDataRequest';

/**
 * Update Resource Request
 */
export class UpdatePaymentMethodRequest implements IRefDataRequest {
  id: number;
  shortName: string;
  longName: string;
  userId: number;

  /**
   *
   * @param { number } id id of the tag being updated
   * @param { string } shortName  abbreviation for the payment method
   * @param { string } longName long name for the payment method
   * @param { number } userId id of the user that made the update tag request
   */
  constructor(id: number, shortName: string, longName: string, userId: number) {
    this.id = id;
    this.shortName = shortName;
    this.longName = longName;
    this.userId = userId;
  }
}

/**
 *  New Resource Request
 */
export class NewPaymentMethodRequest implements IRefDataRequest {
  shortName: string;
  longName: string;
  userId: number;
  /**
   *
   * @param { string } shortName  abbreviation for the payment method
   * @param { string } longName long name for the payment method
   * @param { number } userId id of the user that made the update tag request
   */
  constructor(shortName: string, longName: string, userId: number) {
    this.shortName = shortName;
    this.longName = longName;
    this.userId = userId;
  }
}
