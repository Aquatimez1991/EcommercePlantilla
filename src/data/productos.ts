import type { ImageMetadata } from 'astro';
import { imagenes } from './imagenes';

export interface Producto {
  id: string;
  titulo: string;
  imagen: ImageMetadata;
  categoria: {
    nombre: string;
    id: string;
  };
  precio: number;
  descripcion: string;
  detalles: string[];
  talles?: string[];
  colores?: string[];
  estado?: 'nuevo' | 'oferta' | 'agotado';
  stock?: number;
}

export const productos: Producto[] = [
  {
    id: "abrigo-01",
    titulo: "Abrigo Clásico de Lana",
    imagen: imagenes['abrigo-01'],
    categoria: {
      nombre: "Abrigos",
      id: "abrigos"
    },
    precio: 1000,
    descripcion: "Abrigo elegante de lana natural, perfecto para el invierno. Diseño clásico que nunca pasa de moda.",
    detalles: [
      "100% lana natural",
      "Forro interior de seda",
      "Bolsillos laterales",
      "Botones de madera",
      "Cierre frontal con botones"
    ],
    talles: ["S", "M", "L", "XL"],
    colores: ["Negro", "Gris", "Beige"],
    estado: "nuevo",
    stock: 15
  },
  {
    id: "abrigo-02",
    titulo: "Abrigo Moderno Oversize",
    imagen: imagenes['abrigo-02'],
    categoria: {
      nombre: "Abrigos",
      id: "abrigos"
    },
    precio: 1000,
    descripcion: "Abrigo moderno con corte oversize, ideal para un look contemporáneo y cómodo.",
    detalles: [
      "Mezcla de lana y acrílico",
      "Corte oversize",
      "Bolsillos tipo patch",
      "Cierre con cremallera",
      "Capucha desmontable"
    ],
    talles: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Azul Marino"],
    estado: "oferta",
    stock: 8
  },
  {
    id: "abrigo-03",
    titulo: "Abrigo Deportivo",
    imagen: imagenes['abrigo-03'],
    categoria: {
      nombre: "Abrigos",
      id: "abrigos"
    },
    precio: 1000,
    descripcion: "Abrigo deportivo perfecto para actividades al aire libre y uso diario.",
    detalles: [
      "Material impermeable",
      "Forro polar",
      "Bolsillos con cremallera",
      "Capucha ajustable",
      "Cintura elástica"
    ],
    talles: ["S", "M", "L", "XL"],
    colores: ["Negro", "Gris", "Verde"],
    estado: "nuevo",
    stock: 12
  },
  {
    id: "abrigo-04",
    titulo: "Abrigo Elegante de Oficina",
    imagen: imagenes['abrigo-04'],
    categoria: {
      nombre: "Abrigos",
      id: "abrigos"
    },
    precio: 1000,
    descripcion: "Abrigo elegante perfecto para el entorno laboral, combina estilo y profesionalismo.",
    detalles: [
      "Lana merino",
      "Forro de seda",
      "Bolsillos interiores",
      "Botones de nácar",
      "Corte recto"
    ],
    talles: ["S", "M", "L", "XL"],
    colores: ["Negro", "Gris Oscuro", "Azul"],
    estado: "nuevo",
    stock: 20
  },
  {
    id: "abrigo-05",
    titulo: "Abrigo Casual de Algodón",
    imagen: imagenes['abrigo-05'],
    categoria: {
      nombre: "Abrigos",
      id: "abrigos"
    },
    precio: 1000,
    descripcion: "Abrigo casual de algodón, perfecto para días frescos y uso diario.",
    detalles: [
      "100% algodón",
      "Ligero y transpirable",
      "Bolsillos frontales",
      "Cierre con botones",
      "Corte relajado"
    ],
    talles: ["S", "M", "L", "XL"],
    colores: ["Beige", "Gris Claro", "Azul Claro"],
    estado: "agotado",
    stock: 0
  },
  {
    id: "camiseta-01",
    titulo: "Camiseta Básica de Algodón",
    imagen: imagenes['camiseta-01'],
    categoria: {
      nombre: "Camisetas",
      id: "camisetas"
    },
    precio: 1000,
    descripcion: "Camiseta básica de algodón orgánico, cómoda y versátil para cualquier ocasión.",
    detalles: [
      "100% algodón orgánico",
      "Corte regular",
      "Cuello redondo",
      "Manga corta",
      "Sin costuras laterales"
    ],
    talles: ["XS", "S", "M", "L", "XL", "XXL"],
    colores: ["Blanco", "Negro", "Gris", "Azul"],
    estado: "nuevo",
    stock: 25
  },
  {
    id: "camiseta-02",
    titulo: "Camiseta Premium Pima",
    imagen: imagenes['camiseta-02'],
    categoria: {
      nombre: "Camisetas",
      id: "camisetas"
    },
    precio: 1000,
    descripcion: "Camiseta premium de algodón Pima, suave al tacto y de alta calidad.",
    detalles: [
      "Algodón Pima premium",
      "Corte slim fit",
      "Cuello redondo reforzado",
      "Manga corta",
      "Acabado premium"
    ],
    talles: ["S", "M", "L", "XL"],
    colores: ["Blanco", "Negro", "Azul Marino"],
    estado: "oferta",
    stock: 10
  },
  {
    id: "camiseta-03",
    titulo: "Camiseta Deportiva",
    imagen: imagenes['camiseta-03'],
    categoria: {
      nombre: "Camisetas",
      id: "camisetas"
    },
    precio: 1000,
    descripcion: "Camiseta deportiva con tecnología de secado rápido, ideal para entrenamientos.",
    detalles: [
      "Material técnico",
      "Secado rápido",
      "Corte atlético",
      "Cuello redondo",
      "Respirable"
    ],
    talles: ["S", "M", "L", "XL"],
    colores: ["Negro", "Gris", "Azul"]
  },
  {
    id: "camiseta-04",
    titulo: "Camiseta Polo Clásica",
    imagen: imagenes['camiseta-04'],
    categoria: {
      nombre: "Camisetas",
      id: "camisetas"
    },
    precio: 1000,
    descripcion: "Camiseta polo clásica, elegante y versátil para ocasiones casuales y semi-formales.",
    detalles: [
      "Algodón piqué",
      "Cuello polo",
      "Botones de nácar",
      "Manga corta",
      "Corte regular"
    ],
    talles: ["S", "M", "L", "XL"],
    colores: ["Blanco", "Negro", "Azul", "Rojo"]
  },
  {
    id: "camiseta-05",
    titulo: "Camiseta de Manga Larga",
    imagen: imagenes['camiseta-05'],
    categoria: {
      nombre: "Camisetas",
      id: "camisetas"
    },
    precio: 1000,
    descripcion: "Camiseta de manga larga perfecta para días frescos, cómoda y elegante.",
    detalles: [
      "Algodón jersey",
      "Manga larga",
      "Cuello redondo",
      "Corte regular",
      "Suave al tacto"
    ],
    talles: ["S", "M", "L", "XL"],
    colores: ["Negro", "Gris", "Azul Marino"]
  },
  {
    id: "camiseta-06",
    titulo: "Camiseta V-Neck",
    imagen: imagenes['camiseta-06'],
    categoria: {
      nombre: "Camisetas",
      id: "camisetas"
    },
    precio: 1000,
    descripcion: "Camiseta con cuello en V, elegante y moderna para un look contemporáneo.",
    detalles: [
      "Algodón premium",
      "Cuello en V",
      "Manga corta",
      "Corte slim fit",
      "Acabado suave"
    ],
    talles: ["S", "M", "L", "XL"],
    colores: ["Blanco", "Negro", "Gris"]
  },
  {
    id: "camiseta-07",
    titulo: "Camiseta Oversize",
    imagen: imagenes['camiseta-07'],
    categoria: {
      nombre: "Camisetas",
      id: "camisetas"
    },
    precio: 1000,
    descripcion: "Camiseta oversize con estilo urbano, perfecta para un look relajado y moderno.",
    detalles: [
      "Algodón jersey",
      "Corte oversize",
      "Cuello redondo",
      "Manga corta",
      "Estilo urbano"
    ],
    talles: ["S", "M", "L", "XL"],
    colores: ["Negro", "Blanco", "Gris"]
  },
  {
    id: "camiseta-08",
    titulo: "Camiseta Estampada",
    imagen: imagenes['camiseta-08'],
    categoria: {
      nombre: "Camisetas",
      id: "camisetas"
    },
    precio: 1000,
    descripcion: "Camiseta con estampado único, ideal para expresar tu personalidad y estilo.",
    detalles: [
      "Algodón 100%",
      "Estampado único",
      "Cuello redondo",
      "Manga corta",
      "Corte regular"
    ],
    talles: ["S", "M", "L", "XL"],
    colores: ["Blanco", "Negro"]
  },
  {
    id: "pantalon-01",
    titulo: "Pantalón Chino Clásico",
    imagen: imagenes['pantalon-01'],
    categoria: {
      nombre: "Pantalones",
      id: "pantalones"
    },
    precio: 1000,
    descripcion: "Pantalón chino clásico, versátil y elegante para cualquier ocasión.",
    detalles: [
      "Algodón twill",
      "Corte recto",
      "Bolsillos frontales y traseros",
      "Cierre con botón y cremallera",
      "Dobladillo recto"
    ],
    talles: ["28", "30", "32", "34", "36"],
    colores: ["Beige", "Azul", "Negro", "Gris"]
  },
  {
    id: "pantalon-02",
    titulo: "Pantalón Vaquero Premium",
    imagen: imagenes['pantalon-02'],
    categoria: {
      nombre: "Pantalones",
      id: "pantalones"
    },
    precio: 1000,
    descripcion: "Pantalón vaquero premium con denim de alta calidad y acabado perfecto.",
    detalles: [
      "Denim premium",
      "Corte slim fit",
      "5 bolsillos",
      "Cierre con botón y cremallera",
      "Acabado desgastado"
    ],
    talles: ["28", "30", "32", "34", "36"],
    colores: ["Azul Claro", "Azul Oscuro", "Negro"]
  },
  {
    id: "pantalon-03",
    titulo: "Pantalón Deportivo",
    imagen: imagenes['pantalon-03'],
    categoria: {
      nombre: "Pantalones",
      id: "pantalones"
    },
    precio: 1000,
    descripcion: "Pantalón deportivo cómodo y funcional, perfecto para entrenamientos y uso casual.",
    detalles: [
      "Material técnico",
      "Cintura elástica",
      "Bolsillos laterales",
      "Cierre con cordón",
      "Secado rápido"
    ],
    talles: ["S", "M", "L", "XL"],
    colores: ["Negro", "Gris", "Azul"]
  },
  {
    id: "pantalon-04",
    titulo: "Pantalón de Vestir",
    imagen: imagenes['pantalon-04'],
    categoria: {
      nombre: "Pantalones",
      id: "pantalones"
    },
    precio: 1000,
    descripcion: "Pantalón de vestir elegante, perfecto para ocasiones formales y de trabajo.",
    detalles: [
      "Lana merino",
      "Corte recto",
      "Bolsillos frontales",
      "Cierre con botón y cremallera",
      "Dobladillo recto"
    ],
    talles: ["30", "32", "34", "36", "38"],
    colores: ["Negro", "Gris Oscuro", "Azul Marino"]
  },
  {
    id: "pantalon-05",
    titulo: "Pantalón Cargo",
    imagen: imagenes['pantalon-05'],
    categoria: {
      nombre: "Pantalones",
      id: "pantalones"
    },
    precio: 1000,
    descripcion: "Pantalón cargo funcional con múltiples bolsillos, ideal para actividades al aire libre.",
    detalles: [
      "Algodón canvas",
      "Bolsillos cargo",
      "Cintura ajustable",
      "Cierre con botón y cremallera",
      "Corte relajado"
    ],
    talles: ["S", "M", "L", "XL"],
    colores: ["Verde Militar", "Beige", "Negro"]
  }
]; 
