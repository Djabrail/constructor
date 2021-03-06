import { col, row } from "../utils";

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error("Метод toHTML должен быть реализован!");
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag, styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), styles);
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag, styles, alt, imageStyles } = this.options;
    return row(
      col(`<${tag} style="${imageStyles}" src="${this.value}" alt="${alt}" />`),
      styles
    );
  }
}

export class TextColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const html = this.value.map(item => {
      return col(item);
    });

    const { styles } = this.options;
    return row(html.join(""), styles);
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag, styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), styles);
  }
}
