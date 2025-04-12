import { CircleAlertIcon, CircleCheckIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
export function Alert({
  title,
  variant,
}: {
  title: string;
  variant: "success" | "error" | "warning" | "info";
}) {
  return (
    <div className="bg-background border-gray-3 z-50 w-full max-w-[400px] rounded-xl border px-4 py-3 shadow-lg">
      <div className="flex gap-2">
        <p className="grow text-sm">
          {variant === "success" && (
            <CircleCheckIcon
              className="me-3 -mt-0.5 inline-flex text-emerald-500"
              size={16}
              aria-hidden="true"
            />
          )}
          {variant === "error" && (
            <CircleAlertIcon
              className="me-3 -mt-0.5 inline-flex text-red-500"
              size={16}
              aria-hidden="true"
            />
          )}
          {title}
        </p>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          aria-label="Close notification"
        >
          <XIcon
            size={16}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
}
