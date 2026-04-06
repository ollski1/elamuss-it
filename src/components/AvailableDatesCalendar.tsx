import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar } from "@/components/ui/calendar";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

const AvailableDatesCalendar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [availableDates, setAvailableDates] = useState<Date[]>([]);

  useEffect(() => {
    const fetchDates = async () => {
      const { data } = await supabase
        .from("available_dates")
        .select("date")
        .gte("date", new Date().toISOString().split("T")[0]);

      if (data) {
        setAvailableDates(data.map((d) => new Date(d.date + "T00:00:00")));
      }
    };
    fetchDates();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-16 text-center"
    >
      <h3 className="font-display text-2xl md:text-3xl text-gradient mb-2">
        SAADAOLEVAD KUUPÄEVAD
      </h3>
      <p className="text-muted-foreground text-sm mb-8">
        Rohelisega märgitud kuupäevadel on sõidud saadaval
      </p>

      <div className="flex justify-center">
        <Calendar
          mode="multiple"
          selected={availableDates}
          showOutsideDays={false}
          className={cn("p-3 pointer-events-auto bg-gradient-card rounded-lg border border-border")}
          modifiers={{ available: availableDates }}
          modifiersClassNames={{
            available: "!bg-accent !text-accent-foreground font-bold",
          }}
          disabled={(date) => {
            const isAvailable = availableDates.some(
              (d) => d.toDateString() === date.toDateString()
            );
            return !isAvailable;
          }}
          numberOfMonths={1}
          fromMonth={new Date(new Date().getFullYear(), 4)}
          toMonth={new Date(new Date().getFullYear(), 9)}
          fromDate={new Date()}
        />
      </div>
    </motion.div>
  );
};

export default AvailableDatesCalendar;
