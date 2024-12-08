export function generateImage(length = 10) {
  return Array.from({ length }).map((each, index) => {
    return {
      src: `https://source.unsplash.com/random/800x450?sig=${index}`,
      alt: `Image ${index + 1}`,
    };
  });
}
