// js/plural.js
// En la pantalla no debe leerse "materia(s)": quien mira es un estudiante o un
// profesor, y el número ya se sabe cuándo se cuenta. La palabra se escribe con
// el número que le toca. "palabra" es UNA palabra en singular: se le agrega la s.

export function plural(cantidad, palabra) {
  const n = Number(cantidad);
  return `${cantidad} ${n === 1 ? palabra : palabra + "s"}`;
}
