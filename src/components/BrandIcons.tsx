/**
 * Ícones de marca, locais.
 *
 * O lucide removeu os ícones de marca na versão 1 — `Github` e `Linkedin`
 * deixaram de ser exportados. Como são só dois e aparecem em quatro
 * componentes, mantê-los aqui sai mais barato que prender o projeto na 0.x ou
 * puxar um pacote inteiro por causa de dois glifos.
 *
 * A interface imita a do lucide (`size`, `aria-hidden`, `className`), então o
 * uso nos componentes não muda.
 */

interface BrandIconProps {
  size?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}

// Os dois usam `fill` em vez de `stroke`: são logotipos sólidos, diferente dos
// ícones de traço do lucide. `currentColor` mantém a herança de cor igual.
export function Github({ size = 24, ...rest }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M12 .297a12 12 0 0 0-3.793 23.387c.6.111.82-.26.82-.577 0-.286-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.311.468-2.382 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.814 1.103.814 2.222 0 1.605-.015 2.898-.015 3.293 0 .32.216.694.825.576A12 12 0 0 0 12 .297Z" />
    </svg>
  );
}

export function Linkedin({ size = 24, ...rest }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}
