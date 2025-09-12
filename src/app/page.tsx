import Container from "@/components/container/container";
import Header from "@/components/header/header";
import Link from "next/link";
import MainSlider from "@/components/sliders/main-slider/main-slider";
import ApartmentsGallery from "@/components/apartments-gallery/apartments-gallery";
import InstallmentCalculator from "@/components/installment-calculator/installment-calculator";

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
          <div className="flex items-center justify-between mt-[80px] flex-wrap gap-y-4 [@media(max-width:1115px)]:justify-center">
            <h2 className="text-[60px] text-center">О проекте</h2>
            <p className="text-[40px] max-w-[790px] w-full text-center">
              Мы создаем особую атмосферу, где вам будет по-настоящему комфортно
            </p>
          </div>

          <div className="flex items-center justify-between mt-[100px] flex-wrap font-roboto gap-x-7 gap-y-12 [@media(max-width:1280px)]:justify-center">
            <ul className="flex flex-col border-b-2 border-[#d4af37] max-w-[800px] w-full">
              <li className="py-5 border-t-2 border-[#d4af37] w-full font-roboto text-3xl">
                Развитая инфраструктура: рядом школа, детский сад, поликлиника
              </li>
              <li className="py-5 border-t-2 border-[#d4af37] w-full font-roboto text-3xl">
                Удобная транспортная развязка, прямой и быстрый выезд из города
              </li>
              <li className="py-5 border-t-2 border-[#d4af37] w-full font-roboto text-3xl">
                Охраняемый благоустроенный двор, обустроенная детская площадка
              </li>
              <li className="py-5 border-t-2 border-[#d4af37] w-full font-roboto text-3xl">
                Просторный подземный паркинг
              </li>
              <li className="py-5 border-t-2 border-[#d4af37] w-full font-roboto text-3xl">
                Терраса на крыше с видом на море и крепость Нарын-Кала
              </li>
              <li className="py-5 border-t-2 border-[#d4af37] w-full font-roboto text-3xl">
                Городская набережная в пешей доступности
              </li>
              <li className="py-5 border-t-2 border-[#d4af37] w-full font-roboto text-3xl">
                Беспроцентная рассрочка
              </li>
              <li className="py-5 border-t-2 border-[#d4af37] w-full font-roboto text-3xl">
                Высокое качество строительства
              </li>
            </ul>

            <div className="flex flex-col gap-[50px] items-center border-1 border-[#d4af37] max-w-[400px] rounded-[30px] w-full px-[150px] py-[80px]">
              <div className="flex flex-col gap-4 items-center">
                <p className="text-6xl">3</p>
                <span className="text-xl">корпуса</span>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <p className="text-6xl">170</p>
                <span className="text-xl">квартир</span>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <p className="text-6xl">8-9</p>
                <span className="text-xl">этажей</span>
              </div>
            </div>
          </div>

          <p className="font-roboto text-[40px] mt-[100px] text-center">
            На территории более 7700 кв. м. мы возводим дом, где продумана
            каждая деталь — от приватного озеленённого двора до современной
            инфраструктуры, обеспечивающей комфорт каждому жителю.
          </p>
        </Container>
      </section>

      <section className="mt-[100px]">
        <MainSlider />
      </section>

      <div className="bg-white">
        <section className="mt-[80px] bg-[#0F2545] rounded-b-[30px] pb-[80px]">
          <Container>
            <div className="flex items-center justify-between pt-[80px] pb-[80px] font-sans">
              <h3 className="text-6xl">Квартиры</h3>

              <p className="text-[40px] max-w-[552px] text-center">
                Атмосфера тепла и гармонии в каждом метре
              </p>
            </div>

            <ApartmentsGallery />
          </Container>
        </section>

        <InstallmentCalculator />
      </div>
    </div>
  );
}
