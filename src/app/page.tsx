import Container from "@/components/container/container";
import Header from "@/components/header/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <Header />

      <section className="bg-[url('/images/main.png')] bg-cover bg-center h-screen">
        <Container>
          <div className="pt-[170px] flex flex-col gap-6">
            <h1 className="text-[60px]">ЖК “Тихая Гавань”</h1>
            <p className="text-[40px]">Территория комфорта</p>
            <div className="flex gap-10 items-center">
              <Link
                href="tel:+79994444449"
                className="text-[20px] max-w-[180px] w-full h-[60px] px-2 flex items-center justify-center bg-[#d4af37] rounded-[85px]"
              >
                Позвонить
              </Link>

              <Link
                href="tel:+79994444449"
                className="text-[20px] max-w-[180px] w-full h-[60px] px-2 flex items-center justify-center bg-transparent border-2 border-[#d4af37] rounded-[85px]"
              >
                Оставить номер
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="">
        <Container>
          <div className="flex items-center justify-between mt-[80px]">
            <h2 className="text-[60px]">О проекте</h2>
            <p className="text-[40px] max-w-[790px] w-full">
              Мы создаем особую атмосферу, где вам будет по-настоящему комфортно
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
