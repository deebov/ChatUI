import React from 'react';

interface CarouselItemProps {
  width: string | number;
  children?: React.ReactNode;
}

export const CarouselItem = (props: CarouselItemProps) => {
  const { width, children } = props;

  return (
    <div className="Carousel-item" style={{ width }}>
      {children}
    </div>
  );
};
