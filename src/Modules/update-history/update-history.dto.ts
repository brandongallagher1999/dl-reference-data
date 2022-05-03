class ReferenceDataUpdateHistoryEntry {
  id: bigint;
  instruction: string;
  table_name: string;
  refdata_id: number;
  user_id: number;
  update_timestamp: Date;
  before_state: Object;
  after_state: Object;

  static fromJson(json: object) {
    return Object.assign(new ReferenceDataUpdateHistoryEntry(), json);
  }
}

export default ReferenceDataUpdateHistoryEntry;
