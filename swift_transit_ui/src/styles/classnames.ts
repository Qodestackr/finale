/**
 * Dynamic CSS Injection
 * :: Dynamically inject CSS styles into a web page using JavaScript | TypeScript.
 * functions to create and append style tags with custom CSS definitions.
 *
 * @module classnames.ts
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine and merge CSS classes.
 *
 * @function
 * @param {...ClassValue} inputs - CSS classes to combine.
 * @returns {string} - Combined CSS classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Represents a definition for CSS styles.
 *
 * @typedef {Object} StyleDefinition
 * @property {string} key - CSS selector.
 * @property {string} value - CSS style properties and values.
 */
type StyleDefinition = {
  [key: string]: string;
};


/**
 * Options for the style tag.
 *
 * @typedef {Object} StyleTagOptions
 * @property {string} className - CSS class name for the style tag.
 * @property {string} media - Media query for the style tag.
 * @property {string} id - ID for the style tag.
 */
type StyleTagOptions = {
  className?: string;
  media?: string;
  id?: string;
};


/**
 * Injects custom CSS styles into the document head.
 *
 * @param {StyleDefinition} styles - CSS styles to inject.
 * @param {StyleTagOptions} [options] - Options for the style tag.
 */
export const injectStyles = (
  styles: StyleDefinition,
  options?: StyleTagOptions
) => {
  const styleTag = makeStyleTag(styles, options);

  if (document.head) {
    document.head.appendChild(styleTag);
  }
};


/**
 * Creates a style tag with custom CSS styles.
 *
 * @param {StyleDefinition} styles - CSS styles to include in the tag.
 * @param {StyleTagOptions} [options] - Options for the style tag.
 * @returns {HTMLStyleElement} - The created style tag.
 * 
 * @example Example usage:

const customStyles = {

  ".container": "width: 100%; height: 100vh;",
  ".header": "background-color: #f1f1f1; color: #333; font-size: 24px;",
  ".button":
    "padding: 10px 20px; background-color: #007bff; color: #fff; border: none; cursor: pointer;",
};
// Inject the custom styles into the document head.
injectStyles(customStyles);
 */
export const makeStyleTag = (
  styles: StyleDefinition,
  options?: StyleTagOptions
): HTMLStyleElement => {
  const { className, media, id } = options || {};

  const styleTag = document.createElement("style");

  if (id) {
    styleTag.id = id;
  }

  if (media) {
    styleTag.media = media;
  }

  if (className) {
    styleTag.classList.add(className);
  }

  let css = "";

  for (const key in styles) {
    const value = styles[key];
    css += `${key}:${value};`;
  }

  styleTag.textContent = css;
  return styleTag;
};
