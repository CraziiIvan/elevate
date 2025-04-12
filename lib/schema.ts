import { z } from "zod";
import { cleanedUrl } from "./utils";

export const submissionSchema = z.object({
  email: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.string({ required_error: "Email is required" }).email("Email is invalid"),
  ),
  websiteUrl: z.preprocess(
    (value) => (value === "" ? undefined : cleanedUrl(value as string)),
    z.string({ required_error: "Url is required" }).url("Url is invalid"),
  ),
});

export const subscribeSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
});

export type SubscribeSchema = z.infer<typeof subscribeSchema>;
