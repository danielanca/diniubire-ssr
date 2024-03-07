// import { useEffect, DependencyList } from 'react';

// export function useDebounceEffect(
//   fn: () => void,
//   waitTime: number,
//   deps?: DependencyList
// ) {
//   useEffect(() => {
//     const t = setTimeout(() => {
//       fn.apply(undefined, deps);
//     }, waitTime);

//     return () => {
//       clearTimeout(t);
//     };
//   }, deps);
// }

import { useEffect, DependencyList } from "react";

export function useDebounceEffect(
  fn: () => void,
  waitTime: number,
  deps?: DependencyList
) {
  useEffect(() => {
    const timer = setTimeout(() => {
      fn();
    }, waitTime);

    return () => {
      clearTimeout(timer);
    };
  }, deps);
}
