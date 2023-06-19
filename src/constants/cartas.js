const imagens = [
    "macaco1.png",
    "macaco2.jpg",
    "macaco3.jpg",
    "macaco4.jpg",
    "macaco5.jpg",
    "macaco6.jpg",
]


const cartasUnicas = imagens.map((imagem, idDoPar) => ({ imagem, idDoPar }));

export const paresDeCartas = [...cartasUnicas, ...cartasUnicas].map(
  (props, id) => ({ ...props, id })
);