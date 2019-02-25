import qs from 'querystring';

declare namespace PlaceHolder {
}

type PlaceHolderSupportExtension = 'gif' | 'jpeg' | 'jpg' | 'png' | 'webp'

interface PlaceHolderDimension {
  width: number
  height: number
}

export interface PlaceHolderConfig {
  dimension?: PlaceHolderDimension | number
  background?: string
  textColor?: string
  text?: string
  extension?: PlaceHolderSupportExtension
}

class PlaceHolder {
  private _width: number      = 1440;
  private _height?: number;
  private _text?: string;
  private _textColor?: string;
  private _backgroundColor?: string;
  private _extension?: PlaceHolderSupportExtension;
  public readonly url: string = 'https://via.placeholder.com/';

  set width(value: number) {
    this._width = value;
  }

  set height(value: number) {
    this._height = value;
  }

  set text(value: string) {
    this._text = value;
  }

  set textColor(value: string) {
    this._textColor = value;
  }

  set backgroundColor(value: string) {
    this._backgroundColor = value;
  }

  set extension(value: PlaceHolderSupportExtension) {
    this._extension = value;
  }

  setDimension(dimension?: PlaceHolderDimension | number) {
    if (typeof dimension === 'undefined') {
      this._height = this._width;
    } else if (typeof dimension === 'number') {
      this._width  = dimension;
      this._height = dimension;
    } else {
      this._width  = dimension.width;
      this._height = dimension.height;
    }
  }

  build(): string {
    let url = this.url;

    if (this._width) {
      url += `${this._width}x${this._height}`;
    }

    if (this._extension) {
      url += `.${this._extension}`;
    }

    if (this._backgroundColor) {
      url += `/${this._backgroundColor}`;
    }

    if (this._textColor) {
      url += `/${this._textColor}`;
    }

    if (this._text) {
      url += `?text=${this._text}`;
    }

    return url;
  }
}

export const imgPlaceholder = (config?: PlaceHolderConfig) => {

  const instance = new PlaceHolder();

  if (config) {
    const {
            background,
            dimension,
            extension,
            text,
            textColor,
          } = config;
    instance.setDimension(dimension);
    if (extension) instance.extension = extension;
    if (background) instance.backgroundColor = background;
    if (textColor) instance.textColor = textColor;
    if (text) instance.text = text;
  } else {
    instance.setDimension();
  }

  return instance.build();
};
