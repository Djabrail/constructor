import { row, col } from "./utils";

function title(block) {
  const { tag, styles } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), styles);
}

function text(block) {
  const { tag, styles } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), styles);
}

function textColumns(block) {
  const html = block.value.map(item => {
    return col(item);
  });

  const { styles } = block.options;
  return row(html.join(""), styles);
}

export const templates = { title, text, textColumns };
