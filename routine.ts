import { z } from "zod";

const JobTypeValues = [
  { id: "Development", value: "Development" },
  { id: "Test", value: "Test" },
  { id: "Document", value: "Document" },
] as const;

export type JobType = "" | "Development" | "Test" | "Document";

const JobTypeId = JobTypeValues.map((item) => item.id) as [JobType];

export const JobTypeChose = JobTypeValues;

const StatusTypeValues = [
  { id: "InProgress", value: "ดำเนินการ" },
  { id: "Completed", value: "เสร็จสิ้น" },
  { id: "Cancelled", value: "ยกเลิก" },
] as const;

export type StatusType = "" | "InProgress" | "Completed" | "Cancelled";

const StatusTypeId = StatusTypeValues.map((item) => item.id) as [StatusType];

export const StatusID = (a: string) =>
  StatusTypeValues.find((item) => item.id === a)?.value;
export const StatusTypeChose = StatusTypeValues;
export const RoutineAddSchema = z.object({
  job_type: z.enum(JobTypeId, {
    message: "โปรดเลือก",
  }),
  task_name: z.string().min(1, "โปรดกรอก"),
  start_time: z.date().optional(),
  end_time: z.date().optional(),
  status: z.enum(StatusTypeId, {
    message: "โปรดเลือก",
  }),
});

export type RoutineAddTypes = z.infer<typeof RoutineAddSchema>;

export const RoutineAddDefaultValues: RoutineAddTypes = {
  job_type: "",
  status: "",
  task_name: "",
  end_time: undefined,
  start_time: undefined,
};
