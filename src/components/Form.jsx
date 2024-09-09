'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

const formSchema = z.object({
  where: z.string().min(2, {
    message: 'Where must be at least 2 characters.',
  }),
  when: z.date({
    required_error: 'A date is required.',
  }),
  howMany: z.string().min(1, {
    message: 'How many is required.',
  }),
  whatTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'Please enter a valid time in HH:MM format.',
  }),
});

export default function Component() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      where: '',
      howMany: '',
      whatTime: '',
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <Label htmlFor="where" className="block">
              Donde?
            </Label>
            <Input
              id="where"
              placeholder="Location"
              {...form.register('where')}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="when" className="block">
              Cuando?
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="when"
                  variant="outline"
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !form.watch('when') && 'text-muted-foreground'
                  )}>
                  {form.watch('when') ? (
                    format(form.watch('when'), 'PPP')
                  ) : (
                    <span>Elije una fecha</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={form.watch('when')}
                  onSelect={date => form.setValue('when', date)}
                  disabled={date =>
                    date < new Date() || date < new Date('1900-01-01')
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label htmlFor="howMany" className="block">
              Cuantos?
            </Label>
            <Input
              id="howMany"
              type="number"
              placeholder="Number of people"
              {...form.register('howMany')}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatTime" className="block">
              A que hora?
            </Label>
            <div className="relative">
              <Input
                id="whatTime"
                type="time"
                placeholder="HH:MM"
                {...form.register('whatTime')}
                className="w-full"
              />
              <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50" />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="w-full md:w-auto">
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
}
