"use server";

import { formSchema, type FormState } from "@/components/onboarding/schema";

export async function onboardingFormAction(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const values = {
    name: formData.get("name") as string,
    slug: formData.get("slug") as string,
  };
  console.log(values);

  const result = formSchema.safeParse(values);

  // Validation.
  if (!result.success) {
    return {
      // Return the values on validation errors.
      values,
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Do something with the values.
  // Call your database or API here.

  return {
    values,
    errors: null,
    success: true,
  };
}
