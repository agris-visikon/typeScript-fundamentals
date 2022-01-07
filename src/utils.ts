export type ValidSymbol = '#' | '$';
export interface GenerateConfig { symbol: ValidSymbol, length: number }

export function generateRandomId(symbol: ValidSymbol, length: number): string
export function generateRandomId(options: GenerateConfig): string
export function generateRandomId(optionsOrSymbol: GenerateConfig | ValidSymbol): string {
  if (typeof optionsOrSymbol === 'string') {
    return optionsOrSymbol + Math.random().toString(36)
      .substring(2, length);
  }
  return optionsOrSymbol.symbol + Math.random().toString(36)
      .substring(2, optionsOrSymbol.length);
}

export function Component(options: { id: string }) {
  console.log(options)
  return (target: any) => {
      target.id = options.id
  }
}