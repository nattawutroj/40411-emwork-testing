"use client";

import { Plus, Trash } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useGetRoutine } from "@/hooks/useGetRoutine";
import { formatDate } from "@/utils/time";
import { useState } from "react";
import AddRoutine from "./modal/addRoutine";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteRoutineAction } from "@/app/action/delete";
import { StatusID } from "@/schema/routine";

export default function Panel() {
  const [modal, setModal] = useState<boolean>(false);
  const { data } = useGetRoutine();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["deleteRecord"],
    mutationFn: async (value: number) => DeleteRoutineAction(value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getRoutine"] });
      setModal(false);
    },
  });

  return (
    <Card className="w-full min-h-96">
      <AddRoutine modal={modal} setModal={setModal} />
      <CardHeader>
        <CardTitle />
        <CardDescription />
        <div className="flex justify-end">
          <Button
            onClick={() => setModal(true)}
            variant={"outline"}
            className="w-fit"
          >
            <Plus />
            บันทึกรายการ
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ประเภทงาน</TableHead>
              <TableHead>ชื่องานที่ดำเนินการ</TableHead>
              <TableHead>เวลาที่เริ่มดำเนินการ</TableHead>
              <TableHead>เวลาที่เสร็จสิ้น</TableHead>
              <TableHead>สถานะ</TableHead>
              <TableHead>วันเวลาที่บันทึกข้อมูล</TableHead>
              <TableHead>วันเวลาที่ปรับปรุงข้อมูลล่าสุด</TableHead>
              <TableHead className="w-[100px]" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item, key) => {
              return (
                <TableRow key={key}>
                  <TableCell className="font-medium">{item.job_type}</TableCell>
                  <TableCell>{item.task_name}</TableCell>
                  <TableCell>
                    {item.start_time ? formatDate(item.start_time) : "-"}
                  </TableCell>
                  <TableCell>
                    {item.end_time ? formatDate(item.end_time) : "-"}
                  </TableCell>
                  <TableCell>
                    {item.status
                      ? StatusID(item.status as unknown as string)
                      : "-"}
                  </TableCell>
                  <TableCell>
                    {item.created_at ? formatDate(item.created_at) : "-"}
                  </TableCell>
                  <TableCell>
                    {item.updated_at ? formatDate(item.updated_at) : "-"}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => mutation.mutate(item.id)}
                      variant={"destructive"}
                      className="cursor-pointer"
                    >
                      <Trash />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
