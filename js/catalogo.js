export const MATERIAS = [
  {
    id: "matematicas",
    nombre: "Matemáticas",
    temas: [
      { id: "Operaciones", nombre: "operaciones" },
      { id: "Fraccionarios", nombre: "fraccionarios" },
      { id: "Perimetro", nombre: "perimetro" },
      { id: "Area", nombre: "area" },
    ]
  },
  {
    id: "espanol",
    nombre: "Español",
    temas: [
      { id: "comprension-lectora", nombre: "Comprensión lectora" },
      { id: "gramatica", nombre: "Gramática" },
      { id: "ortografia", nombre: "Ortografía" }
    ]
  },
  {
    id: "ciencias",
    nombre: "Ciencias",
    temas: [
      { id: "animales", nombre: "Animales" },
      { id: "cuerpo-humano", nombre: "Cuerpo humano" },
      { id: "sistema-solar", nombre: "Sistema solar" }
    ]
  }
];


export const DIFICULTADES = [
  { id: 1, nombre: "Nivel 1 - Fácil" },
  { id: 2, nombre: "Nivel 2 - Intermedio" },
  { id: 3, nombre: "Nivel 3 - Difícil" }
];

export function obtenerMateria(materiaId) {
  return MATERIAS.find((materia) => materia.id === materiaId);
}

export function obtenerTema(materiaId, temaId) {
  const materia = obtenerMateria(materiaId);
  return materia?.temas.find((tema) => tema.id === temaId);
}
