
CREATE TABLE public.available_dates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL UNIQUE,
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.available_dates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Available dates are viewable by everyone"
ON public.available_dates
FOR SELECT
USING (true);
