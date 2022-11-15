const products = [
   {
      id: 1,
      category: 'Samsung',
      name: 'Galaxy S8',
      color: 'Negro',
      price: 45000,
      stock: 3,
      url: 'https://http2.mlstatic.com/D_NQ_NP_784993-MLA51376890102_092022-O.webp',
      info: 'El Samsung Galaxy S8 es el nuevo flagship de Samsung que apuesta fuerte en un frente sin bordes de pantalla. Entre sus características se destaca la pantalla Infinity Super AMOLED dual-edge de 5.8 pulgadas y resolución QHD+, procesador Snapdragon 835 o Exynos 8895, 4GB de RAM, 64GB de almacenamiento interno, resistencia al agua IP68, carga inalámbrica, cámara Dual Pixel de 12 megapixels, cámara frontal de 8 megapixels, lector de huellas dactilares, lector de iris y Android 7.0 Nougat.'
   },
   {
      id: 3,
      category: 'Motorola',
      name: 'Moto G22',
      color: 'Iceberg',
      price: 52000,
      stock: 12,
      url: 'https://http2.mlstatic.com/D_NQ_NP_724765-MLA50262139770_062022-O.webp',
      info: 'El Motorola Moto G22 es el smartphone más económico de la serie Moto G para el 2022. Con una pantalla HD+ de 6.5 pulgadas y tasa de refresco de 90Hz, el Moto G22 está potenciado por un procesador MediaTek Helio G37 con 4GB de RAM y 64GB o 128GB de almacenamiento interno expandible vía microSD. La cámara posterior es cuádruple, con la principal de 50MP y secundarias de 8MP, 2MP y 2MP, y una cámara frontal de 16MP. El Moto G22 se alimenta de una batería de 5000 mAh de carga rápida, tiene lector de huellas y corre Android 12.'
   },
   {
      id: 10,
      category: 'Samsung',
      name: 'Galaxy S20 FE',
      color: 'Blanco',
      price: 160000,
      stock: 20,
      url: 'https://http2.mlstatic.com/D_NQ_NP_716191-MLA44281674442_122020-O.webp',
      info: 'El Samsung Galaxy S20 FE es una reedición del mismo smartphone del 2020 con su software actualizado, conservando las características que incluyen una pantalla Super AMOLED de 6.5 pulgadas a resolución Full HD+ con tasa de refresco de 120Hz, un procesador Snapdragon 865 con 8GB de RAM y 128GB o 256GB de almacenamiento, cámara principal triple con lentes de 12 MP, 8 MP y 12 MP, cámara frontal para selfies de 32 megapixels, una batería de 4500 mAh de carga rápida, y lector de huellas bajo pantalla.'
   },
   {
      id: 7,
      category: 'Apple',
      name: 'iPhone 14 Pro Max',
      color: 'Morado oscuro',
      price: 590000,
      stock: 17,
      url: 'https://http2.mlstatic.com/D_NQ_NP_827849-MLM51559383642_092022-O.webp',
      info: 'El Apple iPhone 14 Pro Max es el iPhone más grande y poderoso de la serie 14. Potenciado por el nuevo procesador Apple A16 Bionic, el iPhone 14 Pro Max cuenta con una pantalla OLED LTPO de 6.7 pulgadas con soporte always-on y un nuevo notch en forma de píldora que se integra a iOS con las notificaciones. La cámara trasera es triple y la cámara principal del conjunto es de 48MP con estabilización por sensor, sumando cámaras ultrawide y telefoto de 12MP. El iPhone 14 Pro Max soporta carga inalámbrica, resiste al polvo y agua, tiene parlantes stereo, soporta el sistema de mensajería de emergencia vía satélite de Apple y corre iOS 16.'
   },
   {
      id: 2,
      category: 'Samsung',
      name: 'Galaxy S8',
      color: 'Negro',
      price: 45000,
      stock: 3,
      url: 'https://http2.mlstatic.com/D_NQ_NP_784993-MLA51376890102_092022-O.webp',
      info: 'El Samsung Galaxy S8 es el nuevo flagship de Samsung que apuesta fuerte en un frente sin bordes de pantalla. Entre sus características se destaca la pantalla Infinity Super AMOLED dual-edge de 5.8 pulgadas y resolución QHD+, procesador Snapdragon 835 o Exynos 8895, 4GB de RAM, 64GB de almacenamiento interno, resistencia al agua IP68, carga inalámbrica, cámara Dual Pixel de 12 megapixels, cámara frontal de 8 megapixels, lector de huellas dactilares, lector de iris y Android 7.0 Nougat.'
   },
   {
      id: 12,
      category: 'Motorola',
      name: 'Moto G22',
      color: 'Blanco',
      price: 52000,
      stock: 12,
      url: 'https://http2.mlstatic.com/D_NQ_NP_724765-MLA50262139770_062022-O.webp',
      info: 'El Motorola Moto G22 es el smartphone más económico de la serie Moto G para el 2022. Con una pantalla HD+ de 6.5 pulgadas y tasa de refresco de 90Hz, el Moto G22 está potenciado por un procesador MediaTek Helio G37 con 4GB de RAM y 64GB o 128GB de almacenamiento interno expandible vía microSD. La cámara posterior es cuádruple, con la principal de 50MP y secundarias de 8MP, 2MP y 2MP, y una cámara frontal de 16MP. El Moto G22 se alimenta de una batería de 5000 mAh de carga rápida, tiene lector de huellas y corre Android 12.'
   },
   {
      id: 11,
      category: 'Samsung',
      name: 'Galaxy S20 FE',
      color: 'Blanco',
      price: 160000,
      stock: 20,
      url: 'https://http2.mlstatic.com/D_NQ_NP_716191-MLA44281674442_122020-O.webp',
      info: 'El Samsung Galaxy S20 FE es una reedición del mismo smartphone del 2020 con su software actualizado, conservando las características que incluyen una pantalla Super AMOLED de 6.5 pulgadas a resolución Full HD+ con tasa de refresco de 120Hz, un procesador Snapdragon 865 con 8GB de RAM y 128GB o 256GB de almacenamiento, cámara principal triple con lentes de 12 MP, 8 MP y 12 MP, cámara frontal para selfies de 32 megapixels, una batería de 4500 mAh de carga rápida, y lector de huellas bajo pantalla.'
   },
   {
      id: 22,
      category: 'Apple',
      name: 'iPhone 14 Pro Max',
      color: 'Morado oscuro',
      price: 590000,
      stock: 17,
      url: 'https://http2.mlstatic.com/D_NQ_NP_827849-MLM51559383642_092022-O.webp',
      info: 'El Apple iPhone 14 Pro Max es el iPhone más grande y poderoso de la serie 14. Potenciado por el nuevo procesador Apple A16 Bionic, el iPhone 14 Pro Max cuenta con una pantalla OLED LTPO de 6.7 pulgadas con soporte always-on y un nuevo notch en forma de píldora que se integra a iOS con las notificaciones. La cámara trasera es triple y la cámara principal del conjunto es de 48MP con estabilización por sensor, sumando cámaras ultrawide y telefoto de 12MP. El iPhone 14 Pro Max soporta carga inalámbrica, resiste al polvo y agua, tiene parlantes stereo, soporta el sistema de mensajería de emergencia vía satélite de Apple y corre iOS 16.'
   },
   {
      id: 18,
      category: 'Samsung',
      name: 'Galaxy S8',
      color: 'Negro',
      price: 45000,
      stock: 3,
      url: 'https://http2.mlstatic.com/D_NQ_NP_784993-MLA51376890102_092022-O.webp',
      info: 'El Samsung Galaxy S8 es el nuevo flagship de Samsung que apuesta fuerte en un frente sin bordes de pantalla. Entre sus características se destaca la pantalla Infinity Super AMOLED dual-edge de 5.8 pulgadas y resolución QHD+, procesador Snapdragon 835 o Exynos 8895, 4GB de RAM, 64GB de almacenamiento interno, resistencia al agua IP68, carga inalámbrica, cámara Dual Pixel de 12 megapixels, cámara frontal de 8 megapixels, lector de huellas dactilares, lector de iris y Android 7.0 Nougat.'
   },
   {
      id: 31,
      category: 'Motorola',
      name: 'Moto G22',
      color: 'Blanco',
      price: 52000,
      stock: 12,
      url: 'https://http2.mlstatic.com/D_NQ_NP_724765-MLA50262139770_062022-O.webp',
      info: 'El Motorola Moto G22 es el smartphone más económico de la serie Moto G para el 2022. Con una pantalla HD+ de 6.5 pulgadas y tasa de refresco de 90Hz, el Moto G22 está potenciado por un procesador MediaTek Helio G37 con 4GB de RAM y 64GB o 128GB de almacenamiento interno expandible vía microSD. La cámara posterior es cuádruple, con la principal de 50MP y secundarias de 8MP, 2MP y 2MP, y una cámara frontal de 16MP. El Moto G22 se alimenta de una batería de 5000 mAh de carga rápida, tiene lector de huellas y corre Android 12.'
   },
   {
      id: 65,
      category: 'Samsung',
      name: 'Galaxy S20 FE',
      color: 'Blanco',
      price: 160000,
      stock: 20,
      url: 'https://http2.mlstatic.com/D_NQ_NP_716191-MLA44281674442_122020-O.webp',
      info: 'El Samsung Galaxy S20 FE es una reedición del mismo smartphone del 2020 con su software actualizado, conservando las características que incluyen una pantalla Super AMOLED de 6.5 pulgadas a resolución Full HD+ con tasa de refresco de 120Hz, un procesador Snapdragon 865 con 8GB de RAM y 128GB o 256GB de almacenamiento, cámara principal triple con lentes de 12 MP, 8 MP y 12 MP, cámara frontal para selfies de 32 megapixels, una batería de 4500 mAh de carga rápida, y lector de huellas bajo pantalla.'
   },
   {
      id: 41,
      category: 'Apple',
      name: 'iPhone 14 Pro Max',
      color: 'Morado oscuro',
      price: 590000,
      stock: 17,
      url: 'https://http2.mlstatic.com/D_NQ_NP_827849-MLM51559383642_092022-O.webp',
      info: 'El Apple iPhone 14 Pro Max es el iPhone más grande y poderoso de la serie 14. Potenciado por el nuevo procesador Apple A16 Bionic, el iPhone 14 Pro Max cuenta con una pantalla OLED LTPO de 6.7 pulgadas con soporte always-on y un nuevo notch en forma de píldora que se integra a iOS con las notificaciones. La cámara trasera es triple y la cámara principal del conjunto es de 48MP con estabilización por sensor, sumando cámaras ultrawide y telefoto de 12MP. El iPhone 14 Pro Max soporta carga inalámbrica, resiste al polvo y agua, tiene parlantes stereo, soporta el sistema de mensajería de emergencia vía satélite de Apple y corre iOS 16.'
   },
   {
      id: 52,
      category: 'Samsung',
      name: 'Galaxy S8',
      color: 'Negro',
      price: 45000,
      stock: 3,
      url: 'https://http2.mlstatic.com/D_NQ_NP_784993-MLA51376890102_092022-O.webp',
      info: 'El Samsung Galaxy S8 es el nuevo flagship de Samsung que apuesta fuerte en un frente sin bordes de pantalla. Entre sus características se destaca la pantalla Infinity Super AMOLED dual-edge de 5.8 pulgadas y resolución QHD+, procesador Snapdragon 835 o Exynos 8895, 4GB de RAM, 64GB de almacenamiento interno, resistencia al agua IP68, carga inalámbrica, cámara Dual Pixel de 12 megapixels, cámara frontal de 8 megapixels, lector de huellas dactilares, lector de iris y Android 7.0 Nougat.'
   },
   {
      id: 63,
      category: 'Motorola',
      name: 'Moto G22',
      color: 'Blanco',
      price: 52000,
      stock: 12,
      url: 'https://http2.mlstatic.com/D_NQ_NP_724765-MLA50262139770_062022-O.webp',
      info: 'El Motorola Moto G22 es el smartphone más económico de la serie Moto G para el 2022. Con una pantalla HD+ de 6.5 pulgadas y tasa de refresco de 90Hz, el Moto G22 está potenciado por un procesador MediaTek Helio G37 con 4GB de RAM y 64GB o 128GB de almacenamiento interno expandible vía microSD. La cámara posterior es cuádruple, con la principal de 50MP y secundarias de 8MP, 2MP y 2MP, y una cámara frontal de 16MP. El Moto G22 se alimenta de una batería de 5000 mAh de carga rápida, tiene lector de huellas y corre Android 12.'
   },
   {
      id: 77,
      category: 'Samsung',
      name: 'Galaxy S20 FE',
      color: 'Blanco',
      price: 160000,
      stock: 20,
      url: 'https://http2.mlstatic.com/D_NQ_NP_716191-MLA44281674442_122020-O.webp',
      info: 'El Samsung Galaxy S20 FE es una reedición del mismo smartphone del 2020 con su software actualizado, conservando las características que incluyen una pantalla Super AMOLED de 6.5 pulgadas a resolución Full HD+ con tasa de refresco de 120Hz, un procesador Snapdragon 865 con 8GB de RAM y 128GB o 256GB de almacenamiento, cámara principal triple con lentes de 12 MP, 8 MP y 12 MP, cámara frontal para selfies de 32 megapixels, una batería de 4500 mAh de carga rápida, y lector de huellas bajo pantalla.'
   },
   {
      id: 74,
      category: 'Apple',
      name: 'iPhone 14 Pro Max',
      color: 'Morado oscuro',
      price: 590000,
      stock: 17,
      url: 'https://http2.mlstatic.com/D_NQ_NP_827849-MLM51559383642_092022-O.webp',
      info: 'El Apple iPhone 14 Pro Max es el iPhone más grande y poderoso de la serie 14. Potenciado por el nuevo procesador Apple A16 Bionic, el iPhone 14 Pro Max cuenta con una pantalla OLED LTPO de 6.7 pulgadas con soporte always-on y un nuevo notch en forma de píldora que se integra a iOS con las notificaciones. La cámara trasera es triple y la cámara principal del conjunto es de 48MP con estabilización por sensor, sumando cámaras ultrawide y telefoto de 12MP. El iPhone 14 Pro Max soporta carga inalámbrica, resiste al polvo y agua, tiene parlantes stereo, soporta el sistema de mensajería de emergencia vía satélite de Apple y corre iOS 16.'
   },
   {
      id: 80,
      category: 'Samsung',
      name: 'Galaxy S8',
      color: 'Negro',
      price: 45000,
      stock: 3,
      url: 'https://http2.mlstatic.com/D_NQ_NP_784993-MLA51376890102_092022-O.webp',
      info: 'El Samsung Galaxy S8 es el nuevo flagship de Samsung que apuesta fuerte en un frente sin bordes de pantalla. Entre sus características se destaca la pantalla Infinity Super AMOLED dual-edge de 5.8 pulgadas y resolución QHD+, procesador Snapdragon 835 o Exynos 8895, 4GB de RAM, 64GB de almacenamiento interno, resistencia al agua IP68, carga inalámbrica, cámara Dual Pixel de 12 megapixels, cámara frontal de 8 megapixels, lector de huellas dactilares, lector de iris y Android 7.0 Nougat.'
   },
   {
      id: 4,
      category: 'Motorola',
      name: 'Moto G22',
      color: 'Blanco',
      price: 52000,
      stock: 12,
      url: 'https://http2.mlstatic.com/D_NQ_NP_724765-MLA50262139770_062022-O.webp',
      info: 'El Motorola Moto G22 es el smartphone más económico de la serie Moto G para el 2022. Con una pantalla HD+ de 6.5 pulgadas y tasa de refresco de 90Hz, el Moto G22 está potenciado por un procesador MediaTek Helio G37 con 4GB de RAM y 64GB o 128GB de almacenamiento interno expandible vía microSD. La cámara posterior es cuádruple, con la principal de 50MP y secundarias de 8MP, 2MP y 2MP, y una cámara frontal de 16MP. El Moto G22 se alimenta de una batería de 5000 mAh de carga rápida, tiene lector de huellas y corre Android 12.'
   },
   {
      id: 5,
      category: 'Samsung',
      name: 'Galaxy S20 FE',
      color: 'Blanco',
      price: 160000,
      stock: 20,
      url: 'https://http2.mlstatic.com/D_NQ_NP_716191-MLA44281674442_122020-O.webp',
      info: 'El Samsung Galaxy S20 FE es una reedición del mismo smartphone del 2020 con su software actualizado, conservando las características que incluyen una pantalla Super AMOLED de 6.5 pulgadas a resolución Full HD+ con tasa de refresco de 120Hz, un procesador Snapdragon 865 con 8GB de RAM y 128GB o 256GB de almacenamiento, cámara principal triple con lentes de 12 MP, 8 MP y 12 MP, cámara frontal para selfies de 32 megapixels, una batería de 4500 mAh de carga rápida, y lector de huellas bajo pantalla.'
   },
   {
      id: 6,
      category: 'Apple',
      name: 'iPhone 14 Pro Max',
      color: 'Morado oscuro',
      price: 590000,
      stock: 17,
      url: 'https://http2.mlstatic.com/D_NQ_NP_827849-MLM51559383642_092022-O.webp',
      info: 'El Apple iPhone 14 Pro Max es el iPhone más grande y poderoso de la serie 14. Potenciado por el nuevo procesador Apple A16 Bionic, el iPhone 14 Pro Max cuenta con una pantalla OLED LTPO de 6.7 pulgadas con soporte always-on y un nuevo notch en forma de píldora que se integra a iOS con las notificaciones. La cámara trasera es triple y la cámara principal del conjunto es de 48MP con estabilización por sensor, sumando cámaras ultrawide y telefoto de 12MP. El iPhone 14 Pro Max soporta carga inalámbrica, resiste al polvo y agua, tiene parlantes stereo, soporta el sistema de mensajería de emergencia vía satélite de Apple y corre iOS 16.'
   },

];

export default products;