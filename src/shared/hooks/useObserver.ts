import { useEffect, useRef } from "react"

interface Observer {
  ref: React.RefObject<HTMLElement>;
  canload: string,
  isLoading: boolean;
  callback: (limit: number) => Promise<void>;
}

export const useObserver = ({ ref, canload, isLoading, callback }: Observer) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const obs = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entries[0].isIntersecting && !canload) {
        setTimeout(() => {
          callback(15);
        }, 1000);
      }
    };

    const options = {
      threshold: 1,
    }

    observer.current = new IntersectionObserver(obs, options);
    if (ref.current) {
      observer.current.observe(ref.current);
    }
    return () => {
      if (observer.current) observer.current.disconnect();
    };

  }, [isLoading])
}