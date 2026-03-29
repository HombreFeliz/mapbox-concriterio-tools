import type { FeatureCollection, Point } from "geojson";
import type { Category } from "./constants";

interface POIProperties {
  name: string;
  category: Category;
  description: string;
}

export const poisData: FeatureCollection<Point, POIProperties> = {
  type: "FeatureCollection",
  features: [
    // Restaurantes
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1686, 41.3874] }, properties: { name: "Can Culleretes", category: "restaurante", description: "Uno de los restaurantes más antiguos de Barcelona, fundado en 1786." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1812, 41.3835] }, properties: { name: "7 Portes", category: "restaurante", description: "Restaurante emblemático especializado en arroces y cocina catalana." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1534, 41.3927] }, properties: { name: "Cervecería Catalana", category: "restaurante", description: "Tapas creativas en el corazón del Eixample." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1697, 41.3849] }, properties: { name: "Los Caracoles", category: "restaurante", description: "Cocina tradicional catalana desde 1835 en el Barrio Gótico." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1599, 41.3886] }, properties: { name: "Tickets", category: "restaurante", description: "Tapas de vanguardia por los hermanos Adrià." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1755, 41.3910] }, properties: { name: "El Nacional", category: "restaurante", description: "Espacio gastronómico con cuatro restaurantes bajo un mismo techo." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1648, 41.3815] }, properties: { name: "La Boqueria Bar Central", category: "restaurante", description: "Bar de tapas dentro del mercado más famoso de Barcelona." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1892, 41.3887] }, properties: { name: "Can Paixano (La Xampanyeria)", category: "restaurante", description: "Cava y bocadillos en un ambiente animado en la Barceloneta." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1621, 41.3958] }, properties: { name: "Botafumeiro", category: "restaurante", description: "Marisquería gallega de referencia en Gràcia." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1726, 41.3939] }, properties: { name: "Flax & Kale", category: "restaurante", description: "Cocina flexitariana innovadora con terraza." } },
    // Museos
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1750, 41.3808] }, properties: { name: "Museo Picasso", category: "museo", description: "Colección más extensa de obras de juventud de Pablo Picasso." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1530, 41.3695] }, properties: { name: "Fundació Joan Miró", category: "museo", description: "Museo dedicado a la obra de Joan Miró en Montjuïc." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1687, 41.3803] }, properties: { name: "MACBA", category: "museo", description: "Museo de Arte Contemporáneo de Barcelona en el Raval." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1530, 41.3684] }, properties: { name: "MNAC", category: "museo", description: "Museo Nacional de Arte de Cataluña con colección románica." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1860, 41.3868] }, properties: { name: "Museo de Historia de Barcelona", category: "museo", description: "Recorrido por las ruinas romanas bajo la ciudad." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1533, 41.3735] }, properties: { name: "CaixaForum", category: "museo", description: "Centro cultural en una antigua fábrica modernista." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1688, 41.3875] }, properties: { name: "CCCB", category: "museo", description: "Centro de cultura contemporánea con exposiciones y debates." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1743, 41.3865] }, properties: { name: "Museo del Diseño", category: "museo", description: "Diseño, artes decorativas y moda en un edificio contemporáneo." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1620, 41.4036] }, properties: { name: "CosmoCaixa", category: "museo", description: "Museo de ciencia interactivo con selva tropical interior." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1775, 41.3838] }, properties: { name: "Museo Europeo de Arte Moderno", category: "museo", description: "Arte figurativo contemporáneo en el Born." } },
    // Parques
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1527, 41.4145] }, properties: { name: "Park Güell", category: "parque", description: "Parque diseñado por Gaudí con mosaicos y vistas panorámicas." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1876, 41.3862] }, properties: { name: "Parc de la Ciutadella", category: "parque", description: "El parque más céntrico con lago, fuente monumental y zoo." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1600, 41.3662] }, properties: { name: "Jardines de Montjuïc", category: "parque", description: "Jardines escalonados con vistas al puerto y la ciudad." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1478, 41.4030] }, properties: { name: "Parc del Guinardó", category: "parque", description: "Parque tranquilo con miradores sobre Barcelona." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1269, 41.4027] }, properties: { name: "Jardines del Laberinto de Horta", category: "parque", description: "El jardín más antiguo de Barcelona con un laberinto de cipreses." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1946, 41.4039] }, properties: { name: "Parc del Fòrum", category: "parque", description: "Espacio abierto junto al mar con zona de baño." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1438, 41.3882] }, properties: { name: "Jardines de Joan Brossa", category: "parque", description: "Jardines con juegos y vistas sobre Montjuïc." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1644, 41.3994] }, properties: { name: "Parc de la Creueta del Coll", category: "parque", description: "Antigua cantera convertida en parque con piscina pública." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1771, 41.3972] }, properties: { name: "Turó de la Peira", category: "parque", description: "Colina con vistas 360° de Barcelona y el Tibidabo." } },
    { type: "Feature", geometry: { type: "Point", coordinates: [2.1390, 41.3934] }, properties: { name: "Parc de Cervantes", category: "parque", description: "Rosaleda con más de 10.000 rosales de 2.000 variedades." } },
  ],
};
