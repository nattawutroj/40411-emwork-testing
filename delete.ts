"use server";

import prisma from "@/lib/prisma";

export const DeleteRoutineAction = async (id: number) => {
  await prisma.routine.delete({
    where: { id },
  });
};
