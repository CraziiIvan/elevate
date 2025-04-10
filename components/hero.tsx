"use client";

import { Button } from "./ui/button";

import { MailIcon } from "lucide-react";
import { useActionState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { subscribeSchema } from "@/lib/schema";
import { subscribeEmail } from "@/lib/actions";

export default function Hero() {
  const [lastResult, formAction, isPending] = useActionState(
    subscribeEmail,
    undefined,
  );

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: subscribeSchema });
    },

    shouldValidate: "onInput",
    shouldRevalidate: "onBlur",
  });

  return (
    <div className="flex flex-col items-start gap-y-6 py-8">
      <div className="space-y-4">
        <h1 className="text-gray-12 text-3xl font-semibold md:text-4xl">
          Discover Tools to <br /> Elevate your Tasks.
        </h1>
        <p className="text-gray-10 text-base md:text-lg">
          Curated tools for developers, designers, and creators in one place.
        </p>
      </div>
      <Button size="lg">
        <span className="px-1">Subscribe</span>
      </Button>
    </div>
  );
}
