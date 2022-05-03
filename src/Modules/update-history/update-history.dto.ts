class ReferenceDataUpdateHistoryEntry {
  id?: bigint;
  instruction: string;
  table_name: string;
  refdata_id: number;
  user_id: number;
  data: Object;
  update_timestamp: Date;

  static fromJson(json: object) {
    return Object.assign(new ReferenceDataUpdateHistoryEntry(), json);
  }
}

export default ReferenceDataUpdateHistoryEntry;
