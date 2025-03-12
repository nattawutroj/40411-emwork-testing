"use server";

import prisma from "@/lib/prisma";
import { UserSelect } from "@/type/prisma";

export const GetRoutineAction = async () => {
  const routine: UserSelect = await prisma.routine.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
  return routine;
};
