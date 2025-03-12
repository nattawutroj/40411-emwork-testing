export enum JobType {
  "Development",
  "Test",
  "Document",
}

export enum StatusType {
  "InProgress",
  "Completed",
  "Cancelled",
}
export type UserSelect = {
  id: number;
  job_type: JobType;
  task_name: string;
  start_time: Date;
  end_time: Date;
  status: StatusType;
  created_at: Date;
  updated_at: Date;
}[];
