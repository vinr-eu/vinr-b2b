import * as z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name must be at least 1 characters.")
    .max(100, "Name must be at most 100 characters."),
  slug: z
    .string()
    .min(1, "Slug must be at least 1 character.")
    .max(10, "Slug must be at most 10 characters."),
});

export type FormState = {
  values?: z.infer<typeof formSchema>;
  errors: null | Partial<Record<keyof z.infer<typeof formSchema>, string[]>>;
  success: boolean;
};
