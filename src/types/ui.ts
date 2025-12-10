type TChildren = React.ReactNode;
type TClassName = string;
type TReviewsCount = string;
type TRating = string;
type TTrailer = string;

export interface IBaseUI {
  children?: TChildren;
  className?: TClassName;
  props?: React.HTMLAttributes<HTMLElement>;
}

export interface IInputUI extends IBaseUI {
  placeholder?: string;
}

export interface IPosterUI extends IBaseUI {
  alt: string;
  src: string | undefined;
  ref?: React.Ref<HTMLImageElement>;
}

export interface IRatingUI extends IBaseUI {
  reviewsCount?: TReviewsCount;
  rating?: TRating;
}

export interface IVideoPlayerUI extends IBaseUI {
  trailer?: TTrailer;
}
