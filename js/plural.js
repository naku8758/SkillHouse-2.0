// js/plural.js
// En la pantalla no debe leerse "materia(s)": quien mira es un estudiante o un
// profesor, y el número ya se sabe cuándo se cuenta. La palabra se escribe con
// el número que le toca. "palabra" es UNA palabra en singular: si termina en
// vocal se le agrega la s (materia -> materias) y si termina en consonante se
// le agrega es (profesor -> profesores).

export function plural(cantidad, palabra) {
  const n = Number(cantidad);
  if (n === 1) return `${cantidad} ${palabra}`;
  const sufijo = "aeiou".includes(palabra.slice(-1).toLowerCase()) ? "s" : "es";
  return `${cantidad} ${palabra}${sufijo}`;
}
