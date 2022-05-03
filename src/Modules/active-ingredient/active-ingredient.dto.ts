class ActiveIngredient {
  id?: number;
  name: string;

  static fromJson(json: object) {
    return Object.assign(new ActiveIngredient(), json);
  }
}

export default ActiveIngredient;
