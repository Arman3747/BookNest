import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CalendarIcon, Notebook } from "lucide-react";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

import { useState } from "react";
import {
  useGetSingleBookQuery,
  useAddNewBorrowMutation,
} from "@/redux/api/baseApi";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { useNavigate } from "react-router";

type BorrowBookModalProps = {
  id: string;
};

export function BorrowBookModal({ id }: BorrowBookModalProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { data, isLoading } = useGetSingleBookQuery(id);

  const copies = data?.data?.copies ?? 0;

  const [borrowBook] = useAddNewBorrowMutation();

  const form = useForm({
    defaultValues: {
      quantity: 0,
      dueDate: new Date().toISOString(),
    },
  });

  const onSubmit = async (values: any) => {
    // console.log({ id, values });

    await borrowBook({
      book: id,
      quantity: values.quantity,
      dueDate: values.dueDate.toISOString(),
    });

    setOpen(false);
    form.reset();

    // redirect
    navigate("/borrow-summary");
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Notebook className="mr-1" /> Borrow
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Borrow Book</DialogTitle>
          <DialogDescription>
            {data.data.title} -{" "}
            <span className="italic">{data.data.author}</span>{" "}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Quantity */}
            <FormField
              control={form.control}
              name="quantity"
              rules={{
                required: "Quantity is required",
                min: { value: 1, message: "Minimum 1 book" },
                max: {
                  value: copies,
                  message: `You can borrow maximum ${copies} books`,
                },
              }}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  {fieldState.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <br />

            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>dueDate</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        // disabled={(date) =>
                        //   date > new Date() || date < new Date("1900-01-01")
                        // }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <br />

            <DialogFooter>
              <Button type="submit" className="mt-4">
                Save Changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
