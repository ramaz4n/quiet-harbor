"use client";

import { cn } from "@/shared/utils/cn";
import { useCallback, useRef, useState } from "react";

interface ModalProps {
  onClose?: () => void;
  visible?: boolean;
}

export default function ConsultationModal({ onClose, visible }: ModalProps) {
  const [isVisible, setIsVisible] = useState(visible ?? false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const nameErrorRef = useRef<HTMLSpanElement>(null);
  const phoneErrorRef = useRef<HTMLSpanElement>(null);

  const formatPhoneNumber = (value: string): string => {
    // Удаляем всё, кроме цифр
    const numbers = value.replace(/\D/g, "");

    // Ограничиваем длину (1 код страны + 10 цифр номера)
    const limitedNumbers = numbers.slice(0, 11);

    // Форматируем номер
    if (limitedNumbers.length === 0) return "";
    if (limitedNumbers.length === 1) return `7`;

    let formatted = `7 (${limitedNumbers.slice(1, 4)}`;

    if (limitedNumbers.length > 4) {
      formatted += `)-${limitedNumbers.slice(4, 7)}`;
    }
    if (limitedNumbers.length > 7) {
      formatted += `-${limitedNumbers.slice(7, 9)}`;
    }
    if (limitedNumbers.length > 9) {
      formatted += `-${limitedNumbers.slice(9, 11)}`;
    }

    return formatted;
  };

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;

      // Если пользователь удаляет символы, разрешаем это
      if (input.length < phone.length) {
        setPhone(input);
        return;
      }

      const formattedPhone = formatPhoneNumber(input);

      if (formattedPhone.length === 17 && phoneErrorRef.current !== null) {
        phoneErrorRef.current.classList.remove("!block");
      }
      setPhone(formattedPhone);
    },
    [phone],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Разрешаем: backspace, delete, tab, escape, enter
      if (
        [8, 9, 27, 13, 46].includes(e.keyCode) ||
        // Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        (e.ctrlKey && [65, 67, 86, 88].includes(e.keyCode)) ||
        // Навигационные клавиши: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)
      ) {
        return;
      }

      // Запрещаем всё, кроме цифр
      if (
        (e.keyCode < 48 || e.keyCode > 57) &&
        (e.keyCode < 96 || e.keyCode > 105)
      ) {
        e.preventDefault();
      }
    },
    [],
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      const paste = e.clipboardData.getData("text");
      const numbers = paste.replace(/\D/g, "");

      if (!/^\d*$/.test(numbers)) {
        e.preventDefault();
      }
    },
    [],
  );

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      if (nameErrorRef.current !== null) {
        nameErrorRef.current.classList.remove("!block");
      }
    }
    setName(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (name.length === 0) {
      if (nameErrorRef.current !== null) {
        nameErrorRef.current.classList.add("!block");
        return;
      }
    } else {
      if (nameErrorRef.current !== null) {
        nameErrorRef.current.classList.remove("!block");
      }
    }

    if (phone.length !== 17) {
      if (phoneErrorRef.current !== null) {
        phoneErrorRef.current.classList.add("!block");
        return;
      }
    }
  };

  const onModalClose = () => {
    setIsVisible(false);

    if (onClose) onClose();
  };

  return (
    <div
      className={cn(
        "size-full fixed z-[100] flex items-center justify-center bg-modal-bg duration-200",
        { hidden: !isVisible },
      )}
      onClick={() => onModalClose()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[1100px] bg-[url('/images/modal/consultation-modal-bg.png')] max-h-[400px] sm:max-h-[600px] lg:max-h-[724px] w-full h-full px-[20px]  py-[20px] flex items-center justify-center relative"
      >
        <form className="z-[150] max-w-[509px] flex flex-col gap-[20px] md:gap-[40px] lg:gap-[50px] text-white">
          <p className="text-[20px] md:text-[25px] lg:text-[28px] 2xl:text-[32px] font-sans">
            Хотите узнать больше о квартирах в ЖК “Тихая Гавань”?
          </p>

          <p className="text-[16px] md:text-[18px] lg:text-[22px]">
            Оставьте заявку и мы вам перезвоним
          </p>

          <div className="flex flex-col md:gap-[5px]">
            <input
              autoComplete="name"
              placeholder="Ваше имя"
              value={name}
              onChange={nameHandler}
              type="text"
              className="w-full h-[40px] md:h-[60px] px-[15px] md:px-[20px] text-[16px] md:text-[20px] lg:text-[24px] border-b-1 border-app-yellow outline-none"
            />
            <span
              ref={nameErrorRef}
              className="text-[10px] md:text-[14px] text-red-700 hidden"
            >
              Введите корректное имя
            </span>
          </div>

          <div className="flex flex-col md:gap-[5px]">
            <input
              autoComplete="tel"
              placeholder="Номер телефона"
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
              className="w-full h-[40px] md:h-[60px] px-[15px] md:px-[20px] text-[16px] md:text-[20px] lg:text-[24px] border-b-1 border-app-yellow outline-none"
            />
            <span
              ref={phoneErrorRef}
              className="text-[10px] md:text-[14px] text-red-700 hidden"
            >
              Введите корректный номер
            </span>
          </div>

          <button
            className="w-full text-[16px] md:text-[20px] lg:text-[26px] h-[50px] md:h-[60px] rounded-[20px] text-center text-black bg-app-yellow cursor-pointer border-2 border-app-yellow hover:bg-background hover:text-white duration-200"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Записаться
          </button>
        </form>
        <div className="size-full absolute inset-0 bg-modal-bg"></div>
      </div>
    </div>
  );
}
