class ReferenceDataUpdateHistoryEntry {
  id: bigint;
  instruction: string;
  table_name: string;
  refData_id: number;
  user_id: number;
  update_timestamp: Date;
  before_state: Object;
  after_state: Object;
}

export default ReferenceDataUpdateHistoryEntry;
