"use server";

import { parseWithZod } from "@conform-to/zod";
import { subscribeSchema } from "./schema";

export async function subscribeEmail(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: subscribeSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }
}
