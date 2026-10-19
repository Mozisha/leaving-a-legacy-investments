/**
 * Combine class names, filtering out falsy values.
 * A lightweight alternative to `clsx` for simple conditional className composition.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
