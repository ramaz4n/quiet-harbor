import Container from "@/components/container/container";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full bg-background  md:rounded-b-[30px] fixed top-0 z-99">
      <Container>
        <div className="md:h-[60px] flex items-center justify-between h-[40px] lg:h-[100px]">
          <Link href="/" className="text-amber-50 text-5xl">
            Logo
          </Link>

          <div className="md:flex items-center gap-[80px] hidden">
            <Link href="tel:+79994444449" className="text-[28px]">
              +7 (999) 444-44-49
            </Link>

            <div className="flex items-center ">
              <Link href="mailto:">
                <Image src="icons/mail.svg" alt="mail" width={60} height={60} />
              </Link>

              <Link href="https://wa.me/+79994444449">
                <Image
                  src="icons/whatsapp.svg"
                  alt="whatsapp"
                  width={60}
                  height={60}
                />
              </Link>

              <Link href="https://t.me/">
                <Image
                  src="icons/telegram.svg"
                  alt="mail"
                  width={60}
                  height={60}
                />
              </Link>
            </div>
          </div>

          <button className="md:hidden cursor-pointer">
            <Image src="icons/burger.svg" alt="burger" width={16} height={14} />
          </button>
        </div>
      </Container>
    </div>
  );
}
