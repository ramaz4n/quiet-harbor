import React, { useState } from "react";
import { cn } from "@/shared/utils/cn";

interface ModalProps {
  onClose?: () => void;
}

export default function ConsultationModal({ onClose }: ModalProps) {
  const [visible, setVisible] = useState(false);

  const onModalClose = () => {
    setVisible(false);

    if (onClose) onClose();
  };

  return (
    <div
      className={cn(
        { visible: visible },
        "size-full fixed z-50 flex items-center justify-center bg-modal-bg",
      )}
      onClick={onModalClose}
    >
      <div className="max-w-[760px] max-h-[720px] w-full h-full bg-background px-[100px] py-[80px]">
        <form className="flex flex-col gap-[80px]">
          <p>Запишитесь на консультацию</p>

          <div className="flex flex-col gap-[60px]"></div>
        </form>
      </div>
    </div>
  );
}
