import {
  TitleBlock,
  ImageBlock,
  TextColumnsBlock,
  TextBlock
} from "./classes/blocks";

import image from "./images/NYC.jpg";

export const model = [
  new TitleBlock("Test Title", {
    tag: "h2",
    styles:
      "background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;"
  }),

  new ImageBlock(image, {
    tag: "img",
    styles: "padding: 2rem 0;",
    alt: "Hello",
    imageStyles: "max-width:160px"
  }),

  new TextColumnsBlock(["1 title", "2 title", "3 title"], {
    styles: "padding: 2rem 0;display: flex;justify-content: center;"
  }),

  new TextBlock("Lorem ipsum dolor sit, amet consectetur adipisicing elit.", {
    tag: "p",
    styles:
      "background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;"
  })
];
