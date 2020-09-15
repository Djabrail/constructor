export const model = [
  {
    type: "title",
    value: "Test Title",
    options: {
      tag: "h2",
      styles: "background: darkred; color: #fff;text-align:center;"
    }
  },
  {
    type: "text",
    value: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    options: {
      tag: "p",
      styles: "background: darkblue; color: yellow;"
    }
  },
  {
    type: "textColumns",
    value: ["1 title", "2 title", "3 title"],
    options: { styles: "padding: 1rem;" }
  }
];
