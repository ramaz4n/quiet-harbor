"use client";

import { ReactNode } from "react";
import { useModal } from "@/shared/hooks/use-modal";
import { cn } from "@/shared/utils/cn";

export default function ModalShowBtn({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { openModal } = useModal();

  return (
    <div className={cn("", className)} onClick={openModal}>
      {children}
    </div>
  );
}
