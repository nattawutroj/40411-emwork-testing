"use server";

import prisma from "@/lib/prisma";
import { RoutineAddTypes } from "@/schema/routine";

export const CreateRoutineAction = async (value: RoutineAddTypes) => {
  const create = await prisma.routine.create({
    data: {
      job_type: value.job_type,
      task_name: value.task_name,
      start_time: value.start_time || new Date(),
      end_time: value.end_time || new Date(),
      status: value.status,
    },
  });
  console.log(value);
  
  console.log(create);

  return create;
};
