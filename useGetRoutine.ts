import { GetRoutineAction } from "@/app/action/select";
import { useQuery } from "@tanstack/react-query";

export const useGetRoutine = () =>
  useQuery({
    queryKey: ["getRoutine"],
    queryFn: async () => GetRoutineAction(),
  });
