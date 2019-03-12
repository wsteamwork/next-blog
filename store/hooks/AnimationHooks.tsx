import {useState} from 'react';

interface MouseElementHover {
  onMouseOver(): void
  onMouseLeave(): void
}

export const useElementHover = (): [boolean, MouseElementHover] => {
  const [hover, setHover] = useState<boolean>(false);
  return [hover, {
    onMouseOver: () => setHover(true),
    onMouseLeave: () => setHover(false),
  }];
};
