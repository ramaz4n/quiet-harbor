import Container from "@/components/container/container";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-white">
      <Container>
        <div className="flex flex-col py-[30px] md:py-[50px] lg:py-[100px] text-black ">
          <p className="text-[24px]  md:text-3xl lg:text-4xl xl:text-6xl w-full text-center font-semibold">
            Приезжайте к нам в офис:
          </p>

          <div className="flex flex-col md:flex-row justify-between gap-y-[30px] gap-x-[80px] mt-[30px] md:mt-[50px] lg:mt-[100px]">
            <div className="flex flex-col justify-end gap-[170px]">
              <div className="flex items-center justify-between gap-y-4 gap-x-8 flex-wrap">
                <div className="flex items-center gap-[20px]">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-[20px] md:size-[40px] lg:size-[60px] xl:size-[80px]"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="39"
                      fill="white"
                      stroke="black"
                      strokeWidth="2"
                    />
                    <path
                      d="M40 23.333C32.6483 23.333 26.6666 29.3147 26.6666 36.658C26.6183 47.3997 39.4933 56.3063 40 56.6663C40 56.6663 53.3816 47.3997 53.3333 36.6663C53.3333 29.3147 47.3516 23.333 40 23.333ZM40 43.333C36.3166 43.333 33.3333 40.3497 33.3333 36.6663C33.3333 32.983 36.3166 29.9997 40 29.9997C43.6833 29.9997 46.6666 32.983 46.6666 36.6663C46.6666 40.3497 43.6833 43.333 40 43.333Z"
                      fill="#D4AF37"
                    />
                  </svg>

                  <p className="text-[14px] font-semibold md:text-[20px] lg:text-[32px] leading-[100%] whitespace-nowrap">
                    г. Дербент <br />
                    ул. Магомеда Далгата, д.1Ак1
                  </p>
                </div>

                <p className="text-[12px] md:text-[16px] lg:text-[24px] text-center leading-[100%] whitespace-nowrap">
                  пн-пт: <br />
                  09:00 - 16:00
                </p>
              </div>
              <div className="hidden md:flex items-center gap-[80px] w-full justify-between">
                <Link
                  href="tel:+79994444449"
                  className="text-[14px] md:text-[18px] lg:text-[28px] whitespace-nowrap"
                >
                  +7 (999) 444-44-49
                </Link>

                <div className="flex items-center ">
                  <Link href="mailto:">
                    <Image
                      src="icons/mail-black.svg"
                      alt="mail"
                      width={60}
                      height={60}
                    />
                  </Link>

                  <Link href="https://wa.me/+79994444449">
                    <Image
                      src="icons/whatsapp-black.svg"
                      alt="whatsapp"
                      width={60}
                      height={60}
                    />
                  </Link>

                  <Link href="https://t.me/">
                    <Image
                      src="icons/telegram-black.svg"
                      alt="mail"
                      width={60}
                      height={60}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <iframe
              src="https://yandex.com/map-widget/v1/?ll=48.285695%2C42.087041&mode=search&sll=48.285662%2C42.087044&text=42.087044%2C48.285662&z=17.27"
              frameBorder="1"
              allowFullScreen={true}
              className="border-1 border-app-yellow rounded-[20px] w-full h-[200px] md:w-[300px] md:h-[300px] xl:w-[500px] xl:h-[500px]"
            ></iframe>
          </div>

          <div className="flex items-center gap-[20px] w-full justify-between md:hidden mt-[30px]">
            <Link
              href="tel:+79994444449"
              className="text-[14px] md:text-[18px] lg:text-[28px] whitespace-nowrap"
            >
              +7 (999) 444-44-49
            </Link>

            <div className="flex items-center ">
              <Link href="mailto:">
                <Image
                  src="icons/mail-black.svg"
                  alt="mail"
                  width={60}
                  height={60}
                />
              </Link>

              <Link href="https://wa.me/+79994444449">
                <Image
                  src="icons/whatsapp-black.svg"
                  alt="whatsapp"
                  width={60}
                  height={60}
                />
              </Link>

              <Link href="https://t.me/">
                <Image
                  src="icons/telegram-black.svg"
                  alt="mail"
                  width={60}
                  height={60}
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
