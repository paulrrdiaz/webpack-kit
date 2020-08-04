export default (
  url = "https://placeimg.com/640/480/any",
  width = 200,
  height = 200
) => {
  const image = document.createElement("img");

  image.src = url;
  image.width = width;
  image.height = height;

  return image;
};
