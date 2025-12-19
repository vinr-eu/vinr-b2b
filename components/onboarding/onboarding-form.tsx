"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { useActionState, useEffect } from "react";
import { onboardingFormAction } from "@/components/onboarding/actions";
import { type FormState } from "@/components/onboarding/schema";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import Form from "next/form";

export function OnboardingForm() {
  const [formState, formAction, pending] = useActionState<FormState, FormData>(
    onboardingFormAction,
    {
      values: { name: "", slug: "" },
      errors: null,
      success: false,
    },
  );

  useEffect(() => {
    if (formState.success) {
      toast.success("Onboarding completed.", {
        description: "You can work with your new client now.",
      });
    }
  }, [formState.success]);

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Client onboarding</CardTitle>
        <CardDescription>Add client details.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form id="onboarding-form" action={formAction}>
          <FieldGroup>
            <Field data-invalid={!!formState.errors?.name?.length}>
              <FieldLabel htmlFor="name">Client name</FieldLabel>
              <Input
                id="name"
                name="name"
                placeholder="Acme"
                aria-invalid={!!formState.errors?.name?.length}
                autoComplete="off"
                defaultValue={formState.values?.name}
              />
              {formState.errors?.name && (
                <FieldError>{formState.errors?.name[0]}</FieldError>
              )}
            </Field>
            <Field data-invalid={!!formState.errors?.slug?.length}>
              <FieldLabel htmlFor="slug">Slug</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="slug"
                  name="slug"
                  placeholder="ACME"
                  aria-invalid={!!formState.errors?.slug?.length}
                  autoComplete="off"
                  minLength={3}
                  maxLength={10}
                  defaultValue={formState.values?.slug}
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupText className="tabular-nums">
                    {formState.values?.slug?.length ?? 0}/10
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <FieldDescription>
                Slug is the abbreviation of the client name.
              </FieldDescription>
              {formState.errors?.slug && (
                <FieldError>{formState.errors?.slug[0]}</FieldError>
              )}
            </Field>
          </FieldGroup>
        </Form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="submit" disabled={pending} form="onboarding-form">
            {pending && <Spinner />}
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
