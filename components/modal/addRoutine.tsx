import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { useForm } from "@tanstack/react-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  JobType,
  JobTypeChose,
  RoutineAddDefaultValues,
  RoutineAddSchema,
  RoutineAddTypes,
  StatusType,
  StatusTypeChose,
} from "@/schema/routine";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { DateTimePicker } from "../ui/datetimepicker";
import { useState } from "react";
import { CreateRoutineAction } from "@/app/action/create";

export default function AddRoutine({
  modal,
  setModal,
}: {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [startTime, setStartTime] = useState<Date>();
  const [EndTime, setEndTime] = useState<Date>();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["insertRecord"],
    mutationFn: async (value: RoutineAddTypes) => CreateRoutineAction(value),
    onSuccess: () => {
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["getRoutine"] });
      setModal(false);
    },
  });

  const form = useForm({
    defaultValues: RoutineAddDefaultValues,
    onSubmit: async ({ value }) => {
      mutation.mutate({
        ...value,
        job_type: value.job_type as JobType,
        start_time: startTime,
        end_time: EndTime,
      });
    },
    validators: {
      onSubmit: RoutineAddSchema,
    },
  });

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="max-w-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <DialogHeader>
            <DialogTitle>บันทึกข้อมูล</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 p-4">
            <form.Field name="job_type">
              {(field) => (
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor={field.name}>ประเภทงาน</Label>
                  <Select
                    name={field.name}
                    value={field.state.value}
                    onValueChange={(value) => {
                      field.handleChange(value as JobType);
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="โปรดเลือกรายการ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>โปรดเลือกรายการ</SelectLabel>
                        {JobTypeChose.map((item, key) => (
                          <SelectItem key={key} value={item.id}>
                            {item.value}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>

                    {field.state.meta.errors.length !== 0 && (
                      <p className="text-xs text-red-500">
                        {field.state.meta.errors[0]?.message}
                      </p>
                    )}
                  </Select>
                </div>
              )}
            </form.Field>
            <form.Field name="task_name">
              {(field) => (
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor={field.name}>ชื่องานที่ดำเนินการ</Label>
                  <Input
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors.length !== 0 && (
                    <p className="text-xs text-red-500">
                      {field.state.meta.errors[0]?.message}
                    </p>
                  )}
                </div>
              )}
            </form.Field>
            <form.Field name="start_time">
              {(field) => (
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor={field.name}>เวลาที่เริ่มดำเนินการ</Label>
                  <DateTimePicker setDateValue={setStartTime} />
                  {field.state.meta.errors.length !== 0 && (
                    <p className="text-xs text-red-500">
                      {field.state.meta.errors[0]?.message}
                    </p>
                  )}
                </div>
              )}
            </form.Field>
            <form.Field name="end_time">
              {(field) => (
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor={field.name}>เวลาที่เสร็จสิ้น</Label>
                  <DateTimePicker setDateValue={setEndTime} />
                  {field.state.meta.errors.length !== 0 && (
                    <p className="text-xs text-red-500">
                      {field.state.meta.errors[0]?.message}
                    </p>
                  )}
                </div>
              )}
            </form.Field>
            <form.Field name="status">
              {(field) => (
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor={field.name}>สถานะ</Label>
                  <Select
                    name={field.name}
                    value={field.state.value}
                    onValueChange={(value) => {
                      field.handleChange(value as StatusType);
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="โปรดเลือกรายการ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>โปรดเลือกรายการ</SelectLabel>
                        {StatusTypeChose.map((item, key) => (
                          <SelectItem key={key} value={item.id}>
                            {item.value}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>

                    {field.state.meta.errors.length !== 0 && (
                      <p className="text-xs text-red-500">
                        {field.state.meta.errors[0]?.message}
                      </p>
                    )}
                  </Select>
                </div>
              )}
            </form.Field>
          </div>
          <CardFooter>
            <Button type="submit" className="w-full">
              บันทึกข้อมูล
            </Button>
          </CardFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
