import { useEffect } from "react";
import type { Swiper as SwiperClass } from "swiper";
import type { SwiperRef } from "swiper/react";

/**
 * Хук для обновления Swiper при изменении deps
 */
export function useSwiperUpdate(
  swiperRef: React.RefObject<SwiperRef | null>,
  deps: React.DependencyList,
) {
  useEffect(() => {
    if (swiperRef.current?.swiper) {
      (swiperRef.current.swiper as SwiperClass).update();
    }
  }, deps);
}
