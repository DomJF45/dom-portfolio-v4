import type { Dispatch, SetStateAction } from "react";

export interface CarouselProps {
  imgList: { title: string; img: string }[];
  children: React.ReactNode;
}

export interface ImgsProps {
  imgList: {
    title: string;
    img: string;
  }[];
  imgIndex: number;
}

export interface DotsProps extends ImgsProps {
  setImgIndex: Dispatch<SetStateAction<number>>;
}
