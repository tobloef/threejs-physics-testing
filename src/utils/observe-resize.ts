export const observeResize = <T extends HTMLElement>(
  element: T,
  callback: (e: T) => void,
): Dispose => {
  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry.target as T);
    });
  });

  resizeObserver.observe(element);

  return () => {
    resizeObserver.disconnect();
  };
};
