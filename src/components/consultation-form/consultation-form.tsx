"use client";

import { useCallback, useRef, useState } from "react";

export default function ConsultationForm() {
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

  return (
    <form className="min-w-full md:min-w-[400px] xl:min-w-[483px] flex flex-col gap-[20px] md:gap-[40px] lg:gap-[60px] text-black ">
      <p className="text-[20px] md:text-[30px] lg:text-[40px] 2xl:text-[60px] font-sans">
        Записаться <br /> на консультацию
      </p>

      <div className="flex flex-col md:gap-[5px]">
        <input
          autoComplete="name"
          placeholder="Ваше имя"
          value={name}
          onChange={nameHandler}
          type="text"
          className="w-full h-[40px] md:h-[60px] px-[15px] md:px-[20px] text-[16px] md:text-[20px] lg:text-[24px] border-b-1 border-background outline-none"
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
          className="w-full h-[40px] md:h-[60px] px-[15px] md:px-[20px] text-[16px] md:text-[20px] lg:text-[24px] border-b-1 border-background outline-none"
        />
        <span
          ref={phoneErrorRef}
          className="text-[10px] md:text-[14px] text-red-700 hidden"
        >
          Введите корректный номер
        </span>
      </div>

      <button
        className="w-full text-[16px] md:text-[20px] lg:text-[26px] h-[50px] md:h-[60px] xl:h-[80px] rounded-[20px] text-center text-white bg-background cursor-pointer border-2 border-background hover:bg-app-yellow hover:text-background duration-200"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Записаться
      </button>
    </form>
  );
}
