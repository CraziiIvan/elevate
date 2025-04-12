"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import MenuButton from "@/components/ui/menu-button";
import headerLogo from "@/public/logo-header.svg";
import githubLogo from "@/public/github.svg";
import Link from "next/link";
import { useEffect, useRef, useId, useActionState } from "react";
import { useAtom } from "jotai";
import { headerRefAtom } from "@/state/header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useForm } from "@conform-to/react";
import { submitTool } from "@/lib/actions";
import { submissionSchema } from "@/lib/schema";
import { parseWithZod } from "@conform-to/zod";
import { LoaderCircleIcon } from "lucide-react";
import { toast } from "sonner";
import { Alert } from "./ui/alert";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [, setHeaderRef] = useAtom(headerRefAtom);

  const id = useId();

  const [state, action, isPending] = useActionState(submitTool, undefined);

  const [form, fields] = useForm({
    lastResult: state?.lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: submissionSchema });
    },

    shouldValidate: "onBlur",

    shouldRevalidate: "onInput",
    defaultValue: {
      email: "",
      websiteUrl: "",
    },
  });

  useEffect(() => {
    setHeaderRef(headerRef);
  }, [setHeaderRef]);

  useEffect(() => {
    if (state) {
      toast.custom((t) => (
        <Alert variant={state.status} title={state.message} />
      ));
    }
  }, [state]);

  return (
    <header
      ref={headerRef}
      className="border-b-gray-3 bg-gray-1 sticky top-0 z-50 flex h-13 items-center justify-between border-b px-6 lg:h-14"
    >
      <div className="flex items-center gap-x-4">
        <Link href={"/"}>
          <Image src={headerLogo} alt="Elevate" height={16} />
        </Link>
      </div>
      <div className="flex items-center gap-x-4">
        <Link
          href={"https://github.com/kaungthantneung"}
          className="hidden opacity-75 duration-200 ease-out hover:opacity-100 md:block"
        >
          <Image src={githubLogo} alt="Github" height={20} width={20} />
        </Link>{" "}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <span className="px-1">Submit</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Submit a Tool to Elevate</DialogTitle>
              <DialogDescription>
                Help us grow the collection! Share a tool you love.
              </DialogDescription>
            </DialogHeader>

            <form
              id={form.id}
              onSubmit={form.onSubmit}
              action={action}
              className="space-y-5"
            >
              <div className="space-y-4">
                <div className="*:not-first:mt-2">
                  <Label htmlFor={`${id}-email`}>
                    Your Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id={`${id}-email`}
                    placeholder="hi@yourcompany.com"
                    type="email"
                    required
                    key={fields.email.key}
                    name={fields.email.name}
                    defaultValue={fields.email.initialValue as string}
                  />
                  <p className="text-destructive mt-2 text-xs">
                    {fields.email.errors}
                  </p>
                </div>
                <div className="*:not-first:mt-2">
                  <Label htmlFor={`${id}-password`}>
                    Website Url <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id={`${id}-password`}
                      className="peer ps-16"
                      placeholder="exampletool.com"
                      type="text"
                      required
                      key={fields.websiteUrl.key}
                      name={fields.websiteUrl.name}
                      defaultValue={fields.websiteUrl.initialValue as string}
                    />
                    <span className="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50">
                      https://
                    </span>
                  </div>
                  <p className="text-destructive mt-2 text-xs">
                    {fields.websiteUrl.errors}
                  </p>
                </div>
              </div>
              <Button
                disabled={isPending}
                size="lg"
                type="submit"
                className="w-full"
              >
                {isPending ? (
                  <>
                    <LoaderCircleIcon
                      className="-ms-1 animate-spin"
                      size={16}
                      aria-hidden="true"
                    />
                    Submitting
                  </>
                ) : (
                  "Submit Tool"
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
        <MenuButton className="md:hidden" />
      </div>
    </header>
  );
}
