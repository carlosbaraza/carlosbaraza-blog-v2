import type { BlogPost } from "@/lib/types";

export const post: BlogPost = {
  title: "Hopefully simple WebAssembly starting guide",
  slug: "hopefully-simple-webassembly-starting-guide",
  datePublished: "2019-04-29T00:00:00.000Z",
  dateUpdated: "2020-07-08T01:18:00.000Z",
  tags: ["software-engineering", "open-source"],
  draft: false,
  summary:
    "Today we'd be writing our first WebAssembly module to solve the widely known Conway's Game of Life.",
  images: ["/content/images/2020/07/web-assembly-logo-3.png"],
  translations: {
    es: {
      title: "Gu\u00eda para empezar con WebAssembly, esperemos que sencilla",
      summary:
        "Hoy escribiremos nuestro primer m\u00f3dulo de WebAssembly para resolver el famoso Juego de la Vida de Conway.",
    },
  },
};
