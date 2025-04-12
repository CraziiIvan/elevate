"use server";

import { parseWithZod } from "@conform-to/zod";
import { submissionSchema, subscribeSchema } from "./schema";
import { db } from "@/db/drizzle";
import { submissions } from "@/db/schema";
import { SubmissionResult } from "@conform-to/react";

export async function subscribeEmail(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: subscribeSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }
}

export async function submitTool(
  prevState: unknown,
  formData: FormData,
): Promise<{
  status: "success" | "error";
  message: string;
  lastResult: SubmissionResult<string[]>;
}> {
  const submission = parseWithZod(formData, {
    schema: submissionSchema,
  });

  if (submission.status !== "success") {
    return {
      status: "error",
      message: "Invalid submission",
      lastResult: submission.reply({ resetForm: false }),
    };
  }

  try {
    throw new Error("Not implemented");
    await db.insert(submissions).values({
      submittedByEmail: submission.value.email,
      websiteUrl: submission.value.websiteUrl,
    });

    return {
      status: "success",
      message: "Tool submitted successfully!",
      lastResult: submission.reply(),
    };
  } catch (error) {
    return {
      status: "error",
      message: "Failed to submit tool, Try again!",
      lastResult: submission.reply({ resetForm: false }),
    };
  }
}
