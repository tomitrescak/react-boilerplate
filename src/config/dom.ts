export function stringAttribute(e: HTMLElement, name: string): string {
  if (!e.hasAttribute(name)) {
    throw new Error(`Element does not hava an attribute: ${name}`);
  }
  return e.getAttribute(name) as string;
}

export function numberAttribute(e: HTMLElement, name: string): number {
  if (!e.hasAttribute(name)) {
    throw new Error(`Element does not hava an attribute: ${name}`);
  }
  const result = parseFloat(e.getAttribute(name) as string);
  if (isNaN(result)) {
    throw new Error(`Attribute '${result}' is not a number`);
  }
  return result;
}
