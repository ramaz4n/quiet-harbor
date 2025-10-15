"use client";
import Container from "@/components/container/container";
import { ChangeEvent, useState } from "react";
import ModalShowBtn from "@/shared/ui/modal-show-btn";

export default function InstallmentCalculator() {
  const max_apartments_price = 10_000_000;
  const max_initial_payment = 1_000_000;
  const max_mortgage_term = 20;

  const [bet, setBet] = useState<number>(0); //ставка
  const [apartmentPrice, setApartmentPrice] = useState<number>(0); //стоимость квартиры
  const [initialPayment, setInitialPayment] = useState<number>(0); //первоначальный взнос
  const [mortgageTerm, setMortgageTerm] = useState<number>(0); //срок ипотеки
  const [percentOfInitialPayment, setPercentOfInitialPayment] =
    useState<number>(0); //процент первоначального взноса от общей стоимости
  const [paymentPerMonth, setPaymentPerMonth] = useState<number>(0); //платеж в месяц

  const calcPercentOfInitialPayment = (apartmentPrice: number): void => {
    const newPercentOfInitialPayment = (initialPayment / apartmentPrice) * 100;
    setPercentOfInitialPayment(Number(newPercentOfInitialPayment.toFixed()));
  };

  const calcPaymentPerMonth = (mortgageTerm: number): void => {
    const newPerMonth = (apartmentPrice - initialPayment) / (mortgageTerm * 12);
    setPaymentPerMonth(Number(newPerMonth.toFixed()));
  };

  //стоимость квартиры
  const onApartmentPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    if (!/^\d*$/.test(raw)) return;

    const num = raw === "" ? 0 : Number(raw);

    if (num > max_apartments_price) return;

    setApartmentPrice(num);

    calcPercentOfInitialPayment(Number(raw));
    calcPaymentPerMonth(mortgageTerm);
  };

  //первоначальный взнос
  const onInitialPaymentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    if (!/^\d*$/.test(raw)) return;

    const num = raw === "" ? 0 : Number(raw);

    if (num > max_initial_payment) return;

    setInitialPayment(num);

    calcPercentOfInitialPayment(apartmentPrice);
    calcPaymentPerMonth(mortgageTerm);
  };

  //срок ипотеки
  const onMortgageTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    if (!/^\d*$/.test(raw)) return;

    const num = raw === "" ? 0 : Number(raw);

    if (num > max_mortgage_term) return;

    setMortgageTerm(num);

    calcPaymentPerMonth(Number(raw));
  };

  return (
    <section className="font-roboto py-[20px] md:py-[50px] lg:py-[80px] text-black">
      <Container>
        <h3 className="text-[28px] md:text-[40px] lg:text-6xl">
          Расчет ипотеки
        </h3>
        <div className="flex justify-between flex-col items-center lg:flex-row mt-[20px] md:mt-[40px] lg:mt-[60px] gap-x-6 gap-y-12">
          <div className="flex flex-col gap-[15px] md:gap-[40px] max-w-[600px] w-full">
            <label
              className="flex flex-col gap-[4px] cursor-pointer"
              htmlFor="apartmentPrice"
            >
              <span className="text-[16px] font-light">Стоимость квартиры</span>
              <div className="relative">
                <input
                  id="apartmentPrice"
                  value={apartmentPrice}
                  className="w-full h-[35px] md:h-[60px] py-[16px] px-[20px] border-1 border-background rounded-[11px] text-[16px] md:text-[24px]"
                  type="text"
                  onChange={(e) => onApartmentPriceChange(e)}
                />

                <input
                  type="range"
                  min={0}
                  max={max_apartments_price}
                  value={apartmentPrice}
                  onChange={(e) => onApartmentPriceChange(e)}
                  className="
                      w-full max-w-[88%] h-[1px]
                      bg-app-yellow rounded-lg
                      appearance-none cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-4
                      [&::-webkit-slider-thumb]:h-4
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-app-yellow
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:border-1
                      [&::-moz-range-thumb]:w-4
                      [&::-moz-range-thumb]:h-4
                      [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-app-yellow
                      [&::-moz-range-thumb]:cursor-pointer
                      [&::-moz-range-thumb]:border-2
                      absolute
                      bottom-0
                      left-[6%]
                    "
                />
              </div>
            </label>

            <label
              className="flex flex-col gap-[4px] cursor-pointer"
              htmlFor="initialPayment"
            >
              <span className="text-[16px] font-light">
                Первоначальный взнос
              </span>
              <div className="relative">
                <input
                  id="initialPayment"
                  value={initialPayment}
                  className="w-full h-[35px] md:h-[60px] py-[16px] px-[20px] border-1 border-background rounded-[11px] text-[16px] md:text-[24px]"
                  type="text"
                  onChange={(e) => onInitialPaymentChange(e)}
                />

                <input
                  type="range"
                  min={0}
                  max={max_initial_payment}
                  value={initialPayment}
                  onChange={(e) => onInitialPaymentChange(e)}
                  className="
                      w-full max-w-[88%] h-[1px]
                      bg-app-yellow rounded-lg
                      appearance-none cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-4
                      [&::-webkit-slider-thumb]:h-4
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-app-yellow
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:border-1
                      [&::-moz-range-thumb]:w-4
                      [&::-moz-range-thumb]:h-4
                      [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-app-yellow
                      [&::-moz-range-thumb]:cursor-pointer
                      [&::-moz-range-thumb]:border-2
                      absolute
                      bottom-0
                      left-[6%]
                    "
                />

                <span className="absolute top-1/2 -translate-y-1/2 right-5 text-[16px] md:text-[22px] font-light">
                  {percentOfInitialPayment} %
                </span>
              </div>
            </label>

            <label
              className="flex flex-col gap-[4px] cursor-pointer"
              htmlFor="mortgageTerm"
            >
              <span className="text-[16px] font-light">Срок ипотеки</span>
              <div className="relative">
                <input
                  id="mortgageTerm"
                  value={mortgageTerm}
                  className="w-full h-[35px] md:h-[60px] py-[16px] px-[20px] border-1 border-background rounded-[11px] text-[16px] md:text-[24px]"
                  type="text"
                  onChange={(e) => onMortgageTermChange(e)}
                />

                <input
                  type="range"
                  min={0}
                  max={max_mortgage_term}
                  value={mortgageTerm}
                  onChange={(e) => onMortgageTermChange(e)}
                  className="
                      w-full max-w-[88%] h-[1px]
                      bg-app-yellow rounded-lg
                      appearance-none cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-4
                      [&::-webkit-slider-thumb]:h-4
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-app-yellow
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:border-1
                      [&::-moz-range-thumb]:w-4
                      [&::-moz-range-thumb]:h-4
                      [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-app-yellow
                      [&::-moz-range-thumb]:cursor-pointer
                      [&::-moz-range-thumb]:border-2
                      absolute
                      bottom-0
                      left-[6%]
                    "
                />
              </div>
            </label>
          </div>

          <div className="flex flex-col items-center max-w-[600px] max-h-[412px] w-fit h-full pt-[20px] md:pt-[40px] px-[20px] md:px-[72px] pb-[16] border-1 border-backgroundrounded-[20px]">
            <p className="text-[16px] md:text-[36px] text-center leading-[100%]">
              Предварительный расчет
            </p>

            <div className="flex justify-between mt-[20px] w-full">
              <p className="text-[16px] md:text-[28px]">Ставка</p>

              <div className="flex items-center gap-1">
                <span className="text-[16px] md:text-[30px] font-medium">
                  {bet}
                </span>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-[10px] md:size-[25px]"
                >
                  <path
                    d="M5.93754 11.0413C4.52782 11.0413 3.32469 10.5431 2.32817 9.54655C1.33164 8.55002 0.833374 7.3469 0.833374 5.93717C0.833374 4.52745 1.33164 3.32433 2.32817 2.3278C3.32469 1.33127 4.52782 0.833008 5.93754 0.833008C7.34726 0.833008 8.55039 1.33127 9.54692 2.3278C10.5434 3.32433 11.0417 4.52745 11.0417 5.93717C11.0417 7.3469 10.5434 8.55002 9.54692 9.54655C8.55039 10.5431 7.34726 11.0413 5.93754 11.0413ZM5.93754 8.12467C6.54518 8.12467 7.06191 7.91224 7.48775 7.48738C7.91358 7.06252 8.12601 6.54579 8.12504 5.93717C8.12407 5.32856 7.91164 4.81231 7.48775 4.38842C7.06386 3.96454 6.54712 3.75162 5.93754 3.74967C5.32796 3.74773 4.81171 3.96065 4.38879 4.38842C3.96587 4.8162 3.75296 5.33245 3.75004 5.93717C3.74712 6.5419 3.96004 7.05863 4.38879 7.48738C4.81754 7.91613 5.33379 8.12856 5.93754 8.12467ZM19.0625 24.1663C17.6528 24.1663 16.4497 23.6681 15.4532 22.6715C14.4566 21.675 13.9584 20.4719 13.9584 19.0622C13.9584 17.6525 14.4566 16.4493 15.4532 15.4528C16.4497 14.4563 17.6528 13.958 19.0625 13.958C20.4723 13.958 21.6754 14.4563 22.6719 15.4528C23.6684 16.4493 24.1667 17.6525 24.1667 19.0622C24.1667 20.4719 23.6684 21.675 22.6719 22.6715C21.6754 23.6681 20.4723 24.1663 19.0625 24.1663ZM19.0625 21.2497C19.6702 21.2497 20.1869 21.0372 20.6127 20.6124C21.0386 20.1875 21.251 19.6708 21.25 19.0622C21.2491 18.4536 21.0366 17.9373 20.6127 17.5134C20.1889 17.0895 19.6721 16.8766 19.0625 16.8747C18.453 16.8727 17.9367 17.0856 17.5138 17.5134C17.0909 17.9412 16.878 18.4575 16.875 19.0622C16.8721 19.6669 17.085 20.1836 17.5138 20.6124C17.9425 21.0411 18.4588 21.2536 19.0625 21.2497ZM1.85421 23.1455C1.58685 22.8781 1.45317 22.5379 1.45317 22.1247C1.45317 21.7115 1.58685 21.3712 1.85421 21.1038L21.1042 1.85384C21.3716 1.58648 21.7118 1.4528 22.125 1.4528C22.5382 1.4528 22.8785 1.58648 23.1459 1.85384C23.4132 2.1212 23.5469 2.46148 23.5469 2.87467C23.5469 3.28787 23.4132 3.62815 23.1459 3.89551L3.89587 23.1455C3.62851 23.4129 3.28824 23.5465 2.87504 23.5465C2.46185 23.5465 2.12157 23.4129 1.85421 23.1455Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>

            <div className="flex justify-between mt-[10px] md:mt-[20px] w-full gap-4">
              <p className="text-[16px] md:text-[28px] whitespace-nowrap">
                Платеж в месяц
              </p>

              <span className="text-[16px] md:text-[30px] font-medium whitespace-nowrap">
                {paymentPerMonth} руб.
              </span>
            </div>

            <ModalShowBtn className="max-w-[420px] w-full">
              <button className="bg-background max-w-[420px] w-full min-h-[30px] md:min-h-[50px] px-2 mt-[20px] md:mt-[60px] cursor-pointer flex items-center justify-center text-white text-[14px] md:text-[20px] rounded-[12px] hover:bg-app-yellow duration-200">
                Получить консультацию
              </button>
            </ModalShowBtn>
            <span className="text-center mt-[10px] md:mt-[16px] text-[10px] md:text-[16px] max-w-[362px] leading-[100%]">
              Узнайте об индивидуальных условиях на консультации
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
