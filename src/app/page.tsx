import Container from "@/components/container/container";
import Header from "@/components/header/header";
import Link from "next/link";
import MainSlider from "@/components/sliders/main-slider/main-slider";
import ApartmentsGallery from "@/components/apartments-gallery/apartments-gallery";
import InstallmentCalculator from "@/components/installment-calculator/installment-calculator";

import Image from "next/image";
import MotionComponent from "@/components/motion-component/motion-component";
import Footer from "@/components/footer/footer";
import { Toaster } from "sonner";
import ConsultationForm from "@/components/consultation-form/consultation-form";
import ConsultationModal from "@/components/modals/consultation-modal/consultation-modal";
import { ModalProvider } from "@/providers/modal-context";
import ModalShowBtn from "@/shared/ui/modal-show-btn";

export default function Home() {
  return (
    <ModalProvider>
      <div className="w-full flex flex-col gap-0 bg-white">
        <Header />

        <section className="rounded-b-[10px] sm:rounded-b-none bg-[url('/images/main.png')] aspect-[16/9] max-h-[278px] sm:max-h-[400px] h-dvh  md:max-h-[700px] bg-cover bg-center lg:max-h-[900px] xl:max-h-[1000px] 2xl:max-h-[1300px]">
          <Container>
            <div className="pt-[90px] lg:pt-[170px] hidden sm:flex flex-col gap-6">
              <h1 className="text-main-title">ЖК “Тихая Гавань”</h1>
              <p className="text-from-40">Территория комфорта</p>
              <div className="flex gap-10 items-center">
                <Link
                  href="tel:+79994444449"
                  className="text-from-20 max-w-[140px] md:max-w-[180px] w-full h-[40px] md:h-[60px] px-2 flex items-center justify-center bg-app-yellow border-2 border-app-yellow rounded-[85px] hover:bg-transparent transition duration-200"
                >
                  Позвонить
                </Link>

                <ModalShowBtn>
                  <button className="text-from-20 max-w-[140px] md:max-w-[180px] w-full h-[40px] md:h-[60px] px-2 whitespace-nowrap cursor-pointer flex items-center justify-center bg-transparent border-2 border-app-yellow rounded-[85px] hover:bg-app-yellow transition duration-200">
                    Оставить номер
                  </button>
                </ModalShowBtn>
              </div>
            </div>
          </Container>
        </section>

        <section className="sm:hidden bg-white text-black font-sans max-h-[230px] py-[40px]">
          <Container>
            <div className=" flex flex-col items-center gap-6">
              <h1 className="text-[32px]">ЖК “Тихая Гавань”</h1>
              <p className="text-from-40">Территория комфорта</p>
              <div className="flex gap-5 items-center">
                <Link
                  href="tel:+79994444449"
                  className="text-[14px] min-w-[120px] h-[40px] px-2 flex items-center justify-center bg-app-yellow rounded-[85px]"
                >
                  Позвонить
                </Link>

                <Link
                  href="tel:+79994444449"
                  className="text-[14px] max-w-[120px] w-full h-[40px] px-2 flex items-center justify-center whitespace-nowrap bg-transparent border-2 border-app-yellow rounded-[85px]"
                >
                  Оставить номер
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="rounded-t-[10px] sm:rounded-t-none bg-background">
          <Container>
            <div className="flex items-center justify-between mt-[20px] sm:mt-[40px] lg:mt-[80px] flex-wrap gap-y-4 md:justify-center media-1115:!justify-between">
              <h2 className="text-[28px] sm:text-[40px] lg:text-[60px] text-center">
                О проекте
              </h2>
              <p className="text-[40px] max-w-[790px] w-full text-center hidden md:block">
                Мы создаем особую атмосферу, где вам будет по-настоящему
                комфортно
              </p>
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-between mt-[30px] sm:mt-[50px] lg:mt-[100px] flex-wrap font-roboto gap-x-7 gap-y-14 max-xl:justify-center">
              <ul className="flex flex-col border-b-2 border-app-yellow max-w-[800px] w-full">
                <li className="py-5 border-t-2 border-app-yellow w-full font-roboto text-xl sm:text-2xl lg:text-3xl">
                  Развитая инфраструктура: рядом школа, детский сад, поликлиника
                </li>
                <li className="py-5 border-t-2 border-app-yellow w-full font-roboto text-xl sm:text-2xl lg:text-3xl">
                  Удобная транспортная развязка, прямой и быстрый выезд из
                  города
                </li>
                <li className="py-5 border-t-2 border-app-yellow w-full font-roboto text-xl sm:text-2xl lg:text-3xl">
                  Охраняемый благоустроенный двор, обустроенная детская площадка
                </li>
                <li className="py-5 border-t-2 border-app-yellow w-full font-roboto text-xl sm:text-2xl lg:text-3xl">
                  Просторный подземный паркинг
                </li>
                <li className="py-5 border-t-2 border-app-yellow w-full font-roboto text-xl sm:text-2xl lg:text-3xl">
                  Терраса на крыше с видом на море и крепость Нарын-Кала
                </li>
                <li className="py-5 border-t-2 border-app-yellow w-full font-roboto text-xl sm:text-2xl lg:text-3xl">
                  Городская набережная в пешей доступности
                </li>
                <li className="py-5 border-t-2 border-app-yellow w-full font-roboto text-xl sm:text-2xl lg:text-3xl">
                  Беспроцентная рассрочка
                </li>
                <li className="py-5 border-t-2 border-app-yellow w-full font-roboto text-xl sm:text-2xl lg:text-3xl">
                  Высокое качество строительства
                </li>
              </ul>

              <div className="flex justify-between xl:flex-col gap-4 md:gap-[45px] xl:gap-[50px] items-center border-1 border-app-yellow max-w-[400px] rounded-[30px] w-full px-[20px] py-[30px] xl:px-[150px] xl:py-[80px]">
                <div className="flex flex-col gap-2 xl:gap-4 items-center">
                  <p className="text-4xl xl:text-6xl">3</p>
                  <span className="text-xl">корпуса</span>
                </div>

                <div className="flex flex-col gap-2 xl:gap-4 items-center">
                  <p className="text-4xl xl:text-6xl">170</p>
                  <span className="text-xl">квартир</span>
                </div>

                <div className="flex flex-col gap-2 xl:gap-4 items-center">
                  <p className="text-4xl xl:text-6xl">8-9</p>
                  <span className="text-xl">этажей</span>
                </div>
              </div>
            </div>

            <p className="hidden font-roboto text-3xl md:block lg:text-[40px] mt-[100px] text-center">
              На территории более 7700 кв. м. мы возводим дом, где продумана
              каждая деталь — от приватного озеленённого двора до современной
              инфраструктуры, обеспечивающей комфорт каждому жителю.
            </p>
          </Container>
        </section>

        <section className="pt-[50px] md:pt-[100px] pb-[80px] bg-background">
          <MainSlider />
        </section>

        <div className="bg-white">
          <section className="bg-[#0F2545] rounded-b-[30px] pb-[80px]">
            <Container>
              <div className="flex items-center justify-between py-5 md:py-[50px] lg:py-[80px] font-sans">
                <h3 className="text-[28px] md:text-4xl lg:text-6xl">
                  Квартиры
                </h3>

                <p className="hidden md:block text-xl lg:text-[40px] max-w-[552px] text-center">
                  Атмосфера тепла и гармонии в каждом метре
                </p>
              </div>

              <ApartmentsGallery />
            </Container>
          </section>

          <InstallmentCalculator />

          <section className="bg-app-yellow rounded-[30px]">
            <Container>
              <div className=" flex flex-col gap-[30px] md:gap-[50px] lg:gap-[100px] xl:gap-[200px] py-[30px] md:py-[50px] lg:py-[80px] font-sans text-black">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <MotionComponent
                    direction="left"
                    className="max-w-[750px] w-full"
                  >
                    <p className="text-[16px] md:text-[25px] lg:text-[32px] media-1400:min-w-[800px]">
                      Наши квартиры спроектированы для жизни: продуманные
                      планировки, качественные материалы и обилие естественного
                      света. Здесь вы обретете не просто метры, а пространство
                      для гармонии, уюта и создания семейных традиций.
                    </p>
                  </MotionComponent>

                  <MotionComponent
                    direction="right"
                    className="max-h-[500px] max-w-[500px] h-full"
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/images/info/1.png"
                      alt="info-image"
                    />
                  </MotionComponent>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <MotionComponent direction="left">
                    <Image
                      width={600}
                      height={400}
                      src="/images/info/2.png"
                      alt="info-image"
                      className="max-w-[600px] max-h-[400px] size-full"
                    />
                  </MotionComponent>

                  <MotionComponent direction="right">
                    <p className="text-[16px] md:text-[25px] lg:text-[32px] max-w-[660px]">
                      Эксклюзивная терраса на крыше открывает панорамные виды на
                      море и историческую крепость. Идеальное место для
                      вечернего отдыха, принятия солнечных ванн и наслаждения
                      величественными пейзажами прямо из вашего дома.
                    </p>
                  </MotionComponent>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <MotionComponent direction="left">
                    <p className="text-[16px] md:text-[25px] lg:text-[32px] max-w-[580px]">
                      Ваше спокойствие — наш приоритет. Охраняемая территория и
                      подземный паркинг обеспечивают полную конфиденциальность и
                      безопасность. А благоустроенный двор с зонами отдыха
                      становится продолжением вашего личного пространства.
                    </p>
                  </MotionComponent>

                  <MotionComponent direction="right">
                    <Image
                      width={600}
                      height={400}
                      src="/images/info/3.png"
                      alt="info-image"
                      className="max-w-[600px] max-h-[400px] size-full"
                    />
                  </MotionComponent>
                </div>
              </div>
            </Container>

            <div className="h-[2px] bg-[#B4B4B4] w-full"></div>

            <Container>
              <div className="flex flex-col media-850:flex-row items-center justify-between gap-y-[40px] md:gap-[50px] py-[30px] md:py-[50px] lg:py-[100px]">
                <Image
                  width={700}
                  height={485}
                  src="/images/info/4.png"
                  alt="info-image"
                  className="max-w-[700px] max-h-[485px] size-full"
                />

                <ConsultationForm />
              </div>
            </Container>
          </section>
        </div>

        <Footer />

        <ConsultationModal />

        <Toaster position="top-right" />
      </div>
    </ModalProvider>
  );
}
