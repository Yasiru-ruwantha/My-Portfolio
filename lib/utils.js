/**
 * Joins class names together, skipping falsy values.
 * Usage: cn("btn", isActive && "btn-active", className)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
