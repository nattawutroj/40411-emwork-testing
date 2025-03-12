import { PrismaClient, JobType, StatusType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.routine.createMany({
    data: [
      {
        job_type: JobType.Development,
        task_name: "ตัวอย่างข้อมูล 1",
        start_time: new Date("2025-03-08T09:00:00"),
        end_time: new Date("2025-03-08T10:00:00"),
        status: StatusType.InProgress,
      },
      {
        job_type: JobType.Test,
        task_name: "ตัวอย่างข้อมูล 2",
        start_time: new Date("2025-03-08T10:00:00"),
        end_time: new Date("2025-03-08T11:30:00"),
        status: StatusType.InProgress,
      },
      {
        job_type: JobType.Document,
        task_name: "ตัวอย่างข้อมูล 3",
        start_time: new Date("2025-03-08T13:00:00"),
        end_time: new Date("2025-03-08T14:00:00"),
        status: StatusType.Completed,
      },
      {
        job_type: JobType.Development,
        task_name: "ตัวอย่างข้อมูล 4",
        start_time: new Date("2025-03-08T14:00:00"),
        end_time: new Date("2025-03-08T16:00:00"),
        status: StatusType.InProgress,
      },
      {
        job_type: JobType.Test,
        task_name: "ตัวอย่างข้อมูล 5",
        start_time: new Date("2025-03-08T16:00:00"),
        end_time: new Date("2025-03-08T17:00:00"),
        status: StatusType.Cancelled,
      },
      {
        job_type: JobType.Document,
        task_name: "ตัวอย่างข้อมูล 6",
        start_time: new Date("2025-03-09T09:00:00"),
        end_time: new Date("2025-03-09T11:00:00"),
        status: StatusType.InProgress,
      },
      {
        job_type: JobType.Development,
        task_name: "ตัวอย่างข้อมูล 7",
        start_time: new Date("2025-03-09T11:00:00"),
        end_time: new Date("2025-03-09T12:00:00"),
        status: StatusType.InProgress,
      },
      {
        job_type: JobType.Test,
        task_name: "ตัวอย่างข้อมูล 8",
        start_time: new Date("2025-03-09T13:00:00"),
        end_time: new Date("2025-03-09T14:30:00"),
        status: StatusType.Completed,
      },
      {
        job_type: JobType.Development,
        task_name: "ตัวอย่างข้อมูล 9",
        start_time: new Date("2025-03-09T14:30:00"),
        end_time: new Date("2025-03-09T16:30:00"),
        status: StatusType.InProgress,
      },
      {
        job_type: JobType.Document,
        task_name: "ตัวอย่างข้อมูล 10",
        start_time: new Date("2025-03-09T16:30:00"),
        end_time: new Date("2025-03-09T17:30:00"),
        status: StatusType.Cancelled,
      },
      {
        job_type: JobType.Development,
        task_name: "ตัวอย่างข้อมูล 11",
        start_time: new Date("2025-03-10T08:00:00"),
        end_time: new Date("2025-03-10T10:00:00"),
        status: StatusType.InProgress,
      },
      {
        job_type: JobType.Document,
        task_name: "ตัวอย่างข้อมูล 12",
        start_time: new Date("2025-03-10T10:00:00"),
        end_time: new Date("2025-03-10T11:00:00"),
        status: StatusType.Completed,
      },
      {
        job_type: JobType.Test,
        task_name: "ตัวอย่างข้อมูล 13",
        start_time: new Date("2025-03-10T11:00:00"),
        end_time: new Date("2025-03-10T12:00:00"),
        status: StatusType.InProgress,
      },
      {
        job_type: JobType.Development,
        task_name: "ตัวอย่างข้อมูล 14",
        start_time: new Date("2025-03-10T13:00:00"),
        end_time: new Date("2025-03-10T15:00:00"),
        status: StatusType.Cancelled,
      },
      {
        job_type: JobType.Test,
        task_name: "ตัวอย่างข้อมูล 15",
        start_time: new Date("2025-03-10T15:00:00"),
        end_time: new Date("2025-03-10T17:00:00"),
        status: StatusType.InProgress,
      },
      {
        job_type: JobType.Document,
        task_name: "ตัวอย่างข้อมูล 16",
        start_time: new Date("2025-03-11T09:00:00"),
        end_time: new Date("2025-03-11T09:30:00"),
        status: StatusType.Completed,
      },
      {
        job_type: JobType.Development,
        task_name: "ตัวอย่างข้อมูล 17",
        start_time: new Date("2025-03-11T09:30:00"),
        end_time: new Date("2025-03-11T10:30:00"),
        status: StatusType.InProgress,
      },
      {
        job_type: JobType.Test,
        task_name: "ตัวอย่างข้อมูล 18",
        start_time: new Date("2025-03-11T10:30:00"),
        end_time: new Date("2025-03-11T11:30:00"),
        status: StatusType.InProgress,
      },
      {
        job_type: JobType.Document,
        task_name: "ตัวอย่างข้อมูล 19",
        start_time: new Date("2025-03-11T13:00:00"),
        end_time: new Date("2025-03-11T14:00:00"),
        status: StatusType.Cancelled,
      },
      {
        job_type: JobType.Development,
        task_name: "ตัวอย่างข้อมูล 20",
        start_time: new Date("2025-03-11T14:00:00"),
        end_time: new Date("2025-03-11T16:00:00"),
        status: StatusType.InProgress,
      },
      {
        job_type: JobType.Test,
        task_name: "ตัวอย่างข้อมูล 21",
        start_time: new Date("2025-03-12T08:00:00"),
        end_time: new Date("2025-03-12T09:00:00"),
        status: StatusType.Completed,
      },
      {
        job_type: JobType.Development,
        task_name: "ตัวอย่างข้อมูล 22",
        start_time: new Date("2025-03-12T09:00:00"),
        end_time: new Date("2025-03-12T10:00:00"),
        status: StatusType.InProgress,
      },
      {
        job_type: JobType.Document,
        task_name: "ตัวอย่างข้อมูล 23",
        start_time: new Date("2025-03-12T10:00:00"),
        end_time: new Date("2025-03-12T11:00:00"),
        status: StatusType.InProgress,
      },
      {
        job_type: JobType.Development,
        task_name: "ตัวอย่างข้อมูล 24",
        start_time: new Date("2025-03-12T11:00:00"),
        end_time: new Date("2025-03-12T13:00:00"),
        status: StatusType.Completed,
      },
      {
        job_type: JobType.Test,
        task_name: "ตัวอย่างข้อมูล 25",
        start_time: new Date("2025-03-12T14:00:00"),
        end_time: new Date("2025-03-12T17:00:00"),
        status: StatusType.InProgress,
      },
    ],
  });

  console.log("25 routines created!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
