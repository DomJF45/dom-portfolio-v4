import { createContext } from "react";

interface iCarouselContext {
  imgList: { title: string; img: string }[];
  imgIndex: number;
}

export const CarouselContext = createContext<iCarouselContext>({
  imgList: [{ title: "", img: "" }],
  imgIndex: 0,
});
