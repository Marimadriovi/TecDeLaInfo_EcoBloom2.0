// 1. DICCIONARIO ÚNICO DE TRADUCCIONES
const traducciones = {
    //ESPAÑOL (es) 
    es: {
        // Menú de navegación
        "inicio": "Inicio",
        "productos": "Productos",
        "galeria": "Galería",
        "contacto": "Contacto",
        "personalización": "Personalización",
        "carrito": "Carrito",
        "informacion": "Información",
        "login": "Iniciar Sesión",

        // Títulos según página
        "titulo-galeria": "Galería de Imágenes",
        "titulo-principal": "EcoBloom: Belleza Natural",
        "titulo-carrito": "Tu Carrito de Compras",
        "titulo-pestana": "EcoBloom | Información",
        "descripcion-principal": "Un producto 100% orgánico para el cuidado de tu piel y bienestar.",

        // Beneficios (Página de Inicio)
        "benef1-titulo": "Hidratación Profunda",
        "benef1-desc": "Penetra en las capas de la piel para una nutrición completa.",
        "benef2-titulo": "Aroma Natural",
        "benef2-desc": "Delicada fragancia sin químicos artificiales.",

        // Sección RA / 3D
        "titulo-ra": "Visualizador 3D / RA",
        "desc-ra": "Escanea el código QR con tu celular para ver tu jabón en Realidad Aumentada:",
        "nota-ra": "Proyecta el modelo en tu mesa o mano antes de comprar.",

        // Sección Personalizador
        "titulo-personalizar": "Personaliza tu Jabón",
        "label-aroma": "Aroma / Esencia:",
        "opt-limon": "Limón Orgánico",
        "opt-lavanda": "Lavanda y Manzanilla",
        "opt-menta": "Menta y Eucalipto",

        "label-piel": "Tipo de Piel:",
        "opt-sensible": "Piel Sensible",
        "opt-grasa": "Piel Grasa / Acné",
        "opt-seca": "Piel Seca / Hidratante",

        "label-exfoliante": "Exfoliante Natural:",
        "lbl-avena": "Con Hojuelas de Avena",
        "lbl-sin-exfoliante": "Sin exfoliante (Suave)",

        "btn-carrito": "Agregar Jabón Personalizado al Carrito",

        // Sección Carrito de Compras
        "th-producto": "Producto",
        "th-cantidad": "Cantidad",
        "th-precio": "Precio",
        "th-subtotal": "Subtotal",
        "th-accion": "Acción",
        "lbl-total": "Total:",
        "btn-finalizar": "Finalizar Compra",
        "carrito-vacio": "Tu carrito está vacío.",

        // Textos de la Página de Información (Títulos y Párrafos)
        "titulo1": "Problemática",
        "contenido1": "La idea de crear EcoBloom surge a partir de un análisis general, ya que muchas personas presentan problemas de caspa, irritación capilar por el uso de algún champú, jabón entre otros. La exposición constante a la contaminación, radiación solar, más lo que provoca el uso constante de productos químicos, han desencadenado que las personas decidan cuidar más su piel y cabello, manteniendo una apariencia más saludable, así como también un cabello más cuidado, suave y ligero.  Gracias a eso optan por buscar productos con ingredientes naturales y sin químicos que cuiden tanto su cuero cabelludo como su piel. EcoBloom es una forma de enseñarle a la población la importancia de revisar los productos que se aplican en la piel  y optar por probar diferentes variantes para mantener una vida ecológica y saludable.  Se debe tener precaución, porque las fórmulas que se utilizan deben tener conocimiento de las características de la población a la que se dirige, 'aunque no hay datos precisos, se estima que cerca del 10% de la población sufre de dermatitis atópica en algún momento, lo que refleja la relevancia de esta enfermedad en la región.' (H. Fonseca. 2024. párr. 6) Esto solo para comentar una de las afecciones comunes que vive la población nacional en tema de cabello, pero también están otros tipos de dermatitis y calvicie, permitiendo confirmar que la población normally no se fija a qué tipo de químicos se están exponiendo, abriendo las puertas a muchas malas prácticas o simplemente, no prestar atención al resguardo del pelo, lo que significa a futuro, problemas mayores.  Otro tema importante es que si no se contribuye con el medio ambiente podrían causar problemas como la contaminación del agua, los productos químicos pueden llegar a los sistemas acuáticos a través de los desagües y contaminar ríos, lagos y océanos.  En el área de plásticos, la gran mayoría de champús están envasados en botellas plásticas, lo que genera un problema de residuos que tarda mucho en descomponerse y puede llegar a contaminar la flora y fauna por los químicos de los champús y con esto puede afectar negativamente a la vida, incluyendo peces, insectos y plantas, algunos de los productos más dañinos son los sulfatos, siliconas y parabenos llegan a afectar la calidad del agua; así también como las fragancias sintéticas, ya que son persistent y bioaccumulables (se acumulan en organismos vivos).",
        
        "titulo2": "Oportunidad",
        "contenido2": "EcoBloom busca innovar con productos naturales que cuiden la piel y el medio ambiente, ofreciendo champús sólidos adaptados a distintos tipos de cabello. Más que un producto, la marca pretende concientizar a las nuevas generaciones sobre el respeto a la naturaleza y el amor propio. Su propuesta incluye reducir el uso de envases plásticos, lo que hace el producto más económico, fácil de transportar y sostenible. Con ingredientes naturales, ofrece beneficios como hidratación, nutrición y control de la caspa, sin efectos nocivos para la salud. La tendencia actual hacia el cuidado personal y la sostenibilidad, tanto en la población general como en sectores como hoteles, spas y aerolíneas, representa una oportunidad para posicionar a EcoBloom como una alternativa ecológica, práctica y revolucionaria.",
        
        "titulo3": "Aspecto Social",
        "contenido3": "'La mayoría de los champús son un 80 por ciento agua y los acondicionadores pueden tener hasta un 95 por ciento de este elemento. ¿Por qué pagar por agua cuando puedes añadirla tú mismo?' (Ecoleo. 2020. párr. 5)  'En marcas de champú sólido como Ecoleo emplean SCI (Cocoil isetionato de sodio), SCS (Sulfato de coco sódico) y SLSA (Lauril Sulfoacetato de sodio) como tensoactivos, estos tensoactivos o surfactantes son los ingredientes principales de un champú sólido, son derivados sulfatados de ácidos grasos del aceite de coco y se encargan de eliminar la suciedad del cabello.' (Ecoleo. 2020. párr. 8). 'Esta otra marca se llama Carrefour Soft Green, este producto no contiene (Lauril éter sulfato de sodio) que suele resecar bastante el cuero cabelludo.   En lugar de, se utiliza el agente Cocoil de sodio que deja la piel y el cabello más suaves.' (Essencialis. 2023. párr. 4) Y por último está “Florina que hace un champú sólido suave para todo tipo de cabello ultra espumante y es tan eficaz como un champú en botella.' (Florina. 2025. párr. 1). En este tipo de emprendimientos hay mucha variedad, pero ninguno tiene como envoltura una esponja vegetal (luffa), lo cual hace que EcoBloom sea un producto innovador hoy en día.",
        
        "titulo4": "Aspecto Económico",
        "contenido4": "En el aspecto económico el champú sólido suele ser más caro que el champú líquido por ser un producto artesanal que incluye ingredientes naturales;  en cambio, el champú líquido al tener químicos derivados del petróleo suele tener un precio más económico y es más fácil de conseguir, en supermercados como por ejemplo Masxmenos el precio de los champús líquidos en botella están entre los ₡2.000 hasta los ₡13.090 dependiendo de la marca.  En cambio, los champús sólidos van costando alrededor de unos ₡5.500 hasta los ₡7.000 dependiendo de la marca.  Una competencia directa podría ser el champú sólido Florina, y una indirecta sería Head & Shoulders, que tiene el mismo propósito pero de una manera distinta.  Los productos que utiliza EcoBloom, son naturales, siendo así más fácil la adquisición de dichos ingredientes.  Se podrían conseguir en cualquier supermercado de la zona, o simplemente se cosechan de siembras en hogares.  Gracias a esto, tenemos una gran reducción de costos, siendo un gran beneficio para la empresa.",
        
        "titulo5": "Aspecto Tecnológico",
        "contenido5": " Utilizar un canal web para promocionar un negocio es una estrategia esencial en el entorno digital actual. Un canal web bien gestionado no solo aumenta la visibilidad del negocio, sino que también permite conectar directamente con los clientes, generar confianza y convertir visitantes en clientes.  Contar con un sitio web profesional es fundamental.  Permite compartir contenido relevante y mejorar el posicionamiento de la empresa en buscadores.  Es muy sencillo crear un canal para transmitir información relevante, como un perfil de Instagram, Facebook, Twitter, LinkedIn u otros. A veces los emprendedores creen que no es necesario tener un canal de comunicación con el cliente, y no es así, las redes sociales son una herramienta muy útil que tiene ventajas muy convenientes para cualquier emprendedor, por ejemplo: - Da credibilidad a la empresa.  - Desarrolla el negocio.  - Brinda un canal para transmitir información relevante.  Entre otras.",
        
        "titulo6": "Aspecto Ambiental",
        "contenido6": " Uno de los principales beneficios de los champús sólidos es la reducción de residuos plásticos, el transporte de los champús líquidos es más costoso y menos eficiente en términos de emisiones de carbono debido a su peso y volumen, en cambio con productos como EcoBloom al ser sólidos son más ligeros y compactos lo que significa que el  transporte requiere menos energía o recursos.  También las  fórmulas concentradas hacen que se consuma menos agua durante el proceso de fabricación.",
        
        "titulo7": "Pertinencia del Proyecto",
        "contenido7": "El nombre del producto tiene su propio significado, el término Eco es la abreviación de Ecológico que da a entender el respeto que se le debe dar al  medio ambiente, mientras que el término Bloom que en inglés significa florecer, les abre las puertas a las personas a encontrar sinónimos como la naturaleza, la frescura, y la belleza.  Se procura trabajar una visión por cuidar el medio ambiente y el cuidado de la piel.  Las tabletas de champú EcoBloom son un producto innovador y ecológico; ya que tanto la luffa(espuma vegetal) y el champú son biodegradables.  Este producto sirve para concientizar a las personas sobre el cuidado del planeta y evitar la utilización de plásticos de un solo uso.  Otra cualidad que ofrece EcoBloom son las combinaciones de ingredientes para un aroma agradable, son mezclas innovadoras con un aroma delicioso, como por ejemplo la combinación de romero y jengibre que son  ideales para el cabello graso dando una sensación refrescante y estimulantes.  También está la menta y el limón que desintoxica y revitaliza el cuero cabelludo.  Todas estas combinaciones hacen que el producto sea mucho más interesante, ya que son ingredientes naturales y cada uno de ellos contiene un fabuloso aroma para cada una de las necesidades de los clientes.  Se utilizan productos 100 por ciento naturales para contribuir con el medio ambiente y cuidar de él.  Si este producto no tuviera estos ingredientes causaría muchos problemas de contaminación para la salud de las personas en su cuero cabelludo, por ejemplo algunas pastillas dejan residuos del mismo, producto lo cual da un aspecto opaco y pesado, “pueden ser difíciles de enjuagar, causando caspa o dermatitis seborreica, suelen contener alta alcalinidad porque tienden a tener un PH de hasta 9 y 10 de elevación, también algunas pastillas pueden eliminar los aceites del cuero cabelludo, y con el tiempo esto puede debilitar el tallo capilar y hacer que el cabello se sienta rígido e indomable.” (The Solidbar Company. 2025. párr. 4).  En un futuro puede llegar a expandirse con pastillas que cumplan con función de acondicionador o mascarillas para el cabello. A cierta edad se empieza a caer el cabello, es más probable en hombres que en mujeres.   EcoBloom aporta buena nutrición lo que hace que el cabello se fortalezca y no se debilite al punto de caerse.   En el caso de los hombres hay pastillas con aroma a perfume masculino y cumple con cada necesidad que la persona requiera, para citar más beneficios, el aceite de coco tiene propiedades  que dan hidratación, brillo, reducción de la rotura, protege contra el calor y el sol, y mejora la salud del cuero cabelludo, el bicarbonato de sodio limpia y elimina residuos, combate la caspa, le agrega suavidad al cabello y fortalecer el folículo piloso.  El aguacate puede ayudar a hidratar el cabello seco, fortalece la fibra capilar, reduce el encrespamiento, aumenta el brillo y previene la rotura.  La linaza activa la circulación en el cuero cabelludo, lo que ayuda a el crecimiento saludable del cabello.  Por último, el romero ofrece diversos beneficios como fortalecer, reducir la caída, estimular el crecimiento y combatir la caspa, todos estos productos al ser naturales ofrecen propiedades que ningún producto químico lo puede replicar.",
        
        "titulo8": "Objetivo del modelo de negocio",
        "contenido8": "Posicionar a EcoBloom como una alternativa sostenible en el mercado, mediante la realización de una estrategia de marketing digital donde se expongan los beneficios positivos de la marca y a la vez eduque a los consumidores sobre los beneficios ecológicos del jabón sólido mediante el contenido en redes, permitiendo llegar a los 500 seguidores en un plazo de 6 meses.",
        
        "titulo9": "Propuesta de Valor",
        "contenido9": "EcoBloom es un producto ecológico, hecho a base de productos naturales que además de dar un buen olor y frescura, fortalecen el cabello, como: aceite de coco que hidrata el cuero cabelludo, el romero que acelera el crecimiento del cabello, y el aguacate que tiene antioxidantes que nutren y reparan el cabello seco y dañado.  Dichos productos satisfacen necesidades como la reducción de caspa, disminución de caída o nutrición y reparación del cabello.  La glicerina también conocida como glicerol, es un compuesto orgánico, un tipo de alcohol que se encuentra en todas las grasas naturales tanto de origen vegetal como animal.  En la zona de San Carlos existen aproximadamente 100 hoteles.   La exposición constante a la contaminación, radiación solar, más lo que provoca el uso constante de productos químicos ha desencadenado que las personas decidan cuidar más su piel y cabello.",
        
        "titulo10": "Segmento de Clientes",
        "contenido10": " El producto va dirigido a personas con un rango entre 15 y 65 años que estén interesadas en el cuidado de su piel y su cabello sin importar su género. EcoBloom is dirigido a personas de clase media o cualquier persona que desee probar este producto. También es un producto que va dirigido a la zona turística como por ejemplo: hoteles, spa y en el ámbito comercial.",
        
        "titulo11": "Canales",
        "contenido11": "Los medios en los cuales se podrán ver la información del producto, se podrá ver por medio de las plataformas Instagram, Facebook, Tik Tok, también se transmitirá la información por medio de páginas web, videos y anuncios de la página original de EcoBloom entre otras.  Compartir información sobre el producto alrededor de la zona como vecinos, familiares, amigos y tiendas cercanas.",
        
        "titulo12": "Relación con Clientes",
        "contenido12": "Para posicionar el producto como primera opción ante los clientes será necesario cumplir con la calidad, con lo que promete el producto y  con lo que el cliente requiere.",
        
        "titulo13": "Fuente de Ingresos",
        "contenido13": "Hacer publicidad sobre EcoBloom y poder generar ventas para adquirir ganancias.",
        
        "titulo14": "Recursos Clave",
        "contenido14": "-Tecnológicos: Se utilizaran las redes sociales o páginas web como medio de información para generar ventas. \n- Financiero:  Realizar rifas y utilizar ahorros para cumplir con los requisitos del producto y del local. \n- Estructural/Materiales: Se necesitarán computadoras, internet, para fabricar el producto se necesitan moldes, glicerina, aceites o esencias, jabón a base natural y espuma de luffa. \n- Humanos: Personal que genera el producto.",
        
        "titulo15": "Actividades Clave",
        "contenido15": " Poner en marcha el proceso de fabricación del producto, la publicidad en redes sociales como videos informativos, anuncios, charlas educativas sobre la importancia de los productos sostenibles, y lo necesario para empezar con la comercialización.",
        
        "titulo16": "Alianza Clave",
        "contenido16": " La publicidad es muy importante para un producto como EcoBloom, ya que al ser un producto sostenible tiene mayor impacto en la economía.   Las asociaciones clave esperadas de EcoBloom son los supermercados, farmacias, hoteles, compañías de turismo interesadas en tener este producto en sus instalaciones.  Las ganancias que se adquieren son beneficios económicos para beneficio de EcoBloom y sus empresas aliadas.  Algunas actividades clave que realizan los socios es la distribución del producto, el marketing, entre otros.",
        
        "titulo17": "Estructura de Costos",
        "contenido17": " Algunos de los recursos de mayor costo son la glicerina, un envase de aproximadamente 1000 ml tiene un costo de ¢7,880 y el galón de 3785 L tiene un costo de ¢17,660 por otro lado se puede conseguir el producto en otra zona a mejor precio. La actividad clave más difícil es realizar el producto.",

        "titulo-login": "Iniciar Sesión",
        "label-correo": "Correo Electrónico:",
        "label-password": "Contraseña:",
        "btn-enviar": "Entrar",
        "texto-registro": '¿No tienes una cuenta? <a href="#">Regístrate aquí</a>',
        "btn-cerrar": "Cerrar Sesión",
        
        // Pie de página
        "pie-pagina": "© Mariangel y Francis 2026, Tecnologías de la Información."
    },

    // INGLÉS (en)
    en: {
        // Menú de navegación
        "inicio": "Home",
        "productos": "Products",
        "galeria": "Gallery",
        "contacto": "Contact",
        "personalización": "Customization",
        "carrito": "Cart",
        "informacion": "Information",
        "login": "Sign In",

        // Títulos según página
        "titulo-galeria": "Image Gallery",
        "titulo-principal": "EcoBloom: Natural Beauty",
        "titulo-carrito": "Your Shopping Cart",
        "titulo-pestana": "EcoBloom | Information",
        "descripcion-principal": "A 100% organic product for your skin care and well-being.",

        // Beneficios (Página de Inicio)
        "benef1-titulo": "Deep Hydration",
        "benef1-desc": "Penetrates the skin layers for complete nourishment.",
        "benef2-titulo": "Natural Scent",
        "benef2-desc": "Delicate fragrance without artificial chemicals.",

        // Sección RA / 3D
        "titulo-ra": "3D / AR Viewer",
        "desc-ra": "Scan the QR code with your phone to see your soap in Augmented Reality:",
        "nota-ra": "Project the model on your table or hand before buying.",

        // Sección Personalizador
        "titulo-personalizar": "Customize your Soap",
        "label-aroma": "Scent / Essence:",
        "opt-limon": "Organic Lemon",
        "opt-lavanda": "Lavender & Chamomile",
        "opt-menta": "Mint & Eucalyptus",

        "label-piel": "Skin Type:",
        "opt-sensible": "Sensitive Skin",
        "opt-grasa": "Oily / Acne-Prone Skin",
        "opt-seca": "Dry / Moisturizing Skin",

        "label-exfoliante": "Natural Exfoliant:",
        "lbl-avena": "With Oatmeal Flakes",
        "lbl-sin-exfoliante": "No Exfoliant (Gentle)",

        "btn-carrito": "Add Customized Soap to Cart",

        // Sección Carrito de Compras
        "th-producto": "Product",
        "th-cantidad": "Quantity",
        "th-precio": "Price",
        "th-subtotal": "Subtotal",
        "th-accion": "Action",
        "lbl-total": "Total:",
        "btn-finalizar": "Checkout",
        "carrito-vacio": "Your cart is empty.",

        // Textos traducidos al Inglés (Información)
        "titulo1": "Problem Statement",
        "contenido1": "The idea of creating EcoBloom arises from a general analysis, as many people present problems of dandruff, hair irritation due to the use of a shampoo, soap among others. Constant exposure to pollution, solar radiation, plus what the constant use of chemical products causes, have triggered people to decide to take more care of their skin and hair, maintaining a healthier appearance, as well as more cared for, soft and light hair. Thanks to that, they choose to look for products with natural ingredients and without chemicals that take care of both their scalp and skin. EcoBloom is a way to teach the population the importance of checking the products they apply to the skin and choosing to try different variants to maintain an ecological and healthy life. Caution must be taken, because the formulas used must be aware of the characteristics of the target population, 'although there is no precise data, it is estimated that about 10% of the population suffers from atopic dermatitis at some point, which reflects the relevance of this disease in the region.' (H. Fonseca. 2024. para. 6) This is just to comment on one of the common conditions experienced by the national population regarding hair, but there are also other types of dermatitis and baldness, allowing to confirm that the population normally doesn't pay attention to what kind of chemicals they are exposing themselves to, opening the doors to many bad practices or simply, not paying attention to hair protection, which means major problems in the future. Another important issue is that if the environment is not protected, it could cause problems such as water pollution, chemicals can reach aquatic systems through drains and contaminate rivers, lakes and oceans. In the area of plastics, the vast majority of shampoos are packaged in plastic bottles, which generates a waste problem that takes a long time to decompose and can contaminate flora and fauna due to the chemicals in shampoos and thus negatively affect life, including fish, insects and plants, some of the most harmful products are sulfates, silicones and parabens that affect water quality; as well as synthetic fragrances, since they are persistent and bioaccumulative (accumulate in living organisms).",
        
        "titulo2": "Opportunity",
        "contenido2": "EcoBloom seeks to innovate with natural products that care for the skin and the environment, offering solid shampoos adapted to different hair types. More than a product, the brand aims to raise awareness among new generations about respect for nature and self-love. Its proposal includes reducing the use of plastic containers, which makes the product more economical, easy to transport and sustainable. With natural ingredients, it offers benefits such as hydration, nutrition and dandruff control, without harmful health effects. The current trend toward personal care and sustainability, both in the general population and in sectors such as hotels, spas and airlines, represents an opportunity to position EcoBloom as an ecological, practical and revolutionary alternative.",
        
        "titulo3": "Social Aspect",
        "contenido3": "'Most shampoos are 80 percent water and conditioners can have up to 95 percent of this element. Why pay for water when you can add it yourself?' (Ecoleo. 2020. para. 5) 'In solid shampoo brands like Ecoleo they use SCI (Sodium Cocoyl Isethionate), SCS (Sodium Coco Sulfate) and SLSA (Sodium Lauryl Sulfoacetate) as surfactants, these surfactants or surface-active agents are the main ingredients of a solid shampoo, they are sulfated derivatives of fatty acids from coconut oil and are responsible for removing dirt from hair.' (Ecoleo. 2020. para. 8). 'This other brand is called Carrefour Soft Green, this product does not contain (Sodium Lauryl Ether Sulfate) which tends to dry out the scalp quite a bit. Instead, the Sodium Cocoyl agent is used which leaves skin and hair softer.' (Essencialis. 2023. para. 4) And finally there is 'Florina which makes a gentle solid shampoo for all hair types that is ultra-foaming and as effective as a bottled shampoo.' (Florina. 2025. para. 1). In this type of ventures there is much variety, but none has a vegetable sponge (luffa) as a wrapper, which makes EcoBloom an innovative product today.",
        
        "titulo4": "Economic Aspect",
        "contenido4": "Economically, solid shampoo tends to be more expensive than liquid shampoo because it is an artisanal product that includes natural ingredients; on the other hand, liquid shampoo having petroleum-derived chemicals tends to have a cheaper price and is easier to get, in supermarkets such as Masxmenos the price of bottled liquid shampoos ranges from ₡2,000 to ₡13,090 depending on the brand. In contrast, solid shampoos cost around ₡5,500 to ₡7,000 depending on the brand. A direct competition could be Florina solid shampoo, and an indirect one would be Head & Shoulders, which has the same purpose but in a different way. The products used by EcoBloom are natural, making the acquisition of these ingredients easier. They could be obtained in any local supermarket, or simply harvested from home crops. Thanks to this, we have a great reduction in costs, being a great benefit for the company.",
        
        "titulo5": "Technological Aspect",
        "contenido5": " Using a web channel to promote a business is an essential strategy in today's digital environment. A well-managed web channel not only increases business visibility, but also allows direct connection with customers, building trust and converting visitors into customers. Having a professional website is essential. It allows sharing relevant content and improving the company's search engine ranking. It is very simple to create a channel to transmit relevant information, such as an Instagram, Facebook, Twitter, LinkedIn profile or others. Sometimes entrepreneurs believe that it is not necessary to have a communication channel with the customer, and that is not the case, social networks are a very useful tool that has very convenient advantages for any entrepreneur, for example: - Gives credibility to the company. - Develops the business. - Provides a channel to transmit relevant information. Among others.",
        
        "titulo6": "Environmental Aspect",
        "contenido6": " One of the main benefits of solid shampoos is the reduction of plastic waste, the transport of liquid shampoos is more costly and less efficient in terms of carbon emissions due to their weight and volume, whereas with products like EcoBloom being solid they are lighter and more compact meaning transport requires less energy or resources. Also, concentrated formulas mean less water is consumed during the manufacturing process.",
        
        "titulo7": "Project Relevance",
        "contenido7": "The product name has its own meaning, the term Eco is the abbreviation for Ecological which implies the respect that must be given to the environment, while the term Bloom means to flower in English, opening doors for people to find synonyms like nature, freshness, and beauty. A vision is sought to care for the environment and skin care. EcoBloom shampoo bars are an innovative and ecological product; since both luffa (vegetable sponge) and shampoo are biodegradable. This product serves to raise awareness about caring for the planet and avoiding the use of single-use plastics. Another quality offered by EcoBloom is the combinations of ingredients for a pleasant aroma, they are innovative mixtures with a delicious scent, such as the combination of rosemary and ginger which are ideal for oily hair giving a refreshing and stimulating sensation. There is also mint and lemon which detoxifies and revitalizes the scalp. All these combinations make the product much more interesting, since they are natural ingredients and each of them contains a fabulous aroma for each customer's needs. 100 percent natural products are used to contribute to the environment and take care of it. If this product did not have these ingredients, it would cause many pollution problems for people's scalp health, for example some bars leave product residue which gives a dull and heavy appearance, 'can be difficult to rinse, causing dandruff or seborrheic dermatitis, tend to contain high alkalinity because they tend to have a PH of up to 9 and 10 elevation, also some bars can strip oils from the scalp, and over time this can weaken the hair shaft and make hair feel stiff and unruly.' (The Solidbar Company. 2025. para. 4). In the future it can expand with bars that fulfill the function of conditioner or hair masks. At a certain age hair begins to fall out, it is more likely in men than in women. EcoBloom provides good nutrition which makes the hair strengthen and not weaken to the point of falling out. In the case of men there are bars with a masculine perfume scent and it fulfills every need the person requires, to cite more benefits, coconut oil has properties that provide hydration, shine, reduction of breakage, protects against heat and sun, and improves scalp health, baking soda cleans and removes residue, fights dandruff, adds softness to hair and strengthens the hair follicle. Avocado can help moisturize dry hair, strengthens the hair fiber, reduces frizz, increases shine and prevents breakage. Flaxseed activates circulation in the scalp, which helps healthy hair growth. Finally, rosemary offers various benefits such as strengthening, reducing hair loss, stimulating growth and fighting dandruff, all these products being natural offer properties that no chemical product can replicate.",
        
        "titulo8": "Business Model Objective",
        "contenido8": "Position EcoBloom as a sustainable alternative in the market, by carrying out a digital marketing strategy that exposes the positive benefits of the brand while educating consumers about the ecological benefits of solid soap through network content, allowing to reach 500 followers within a period of 6 months.",
        
        "titulo9": "Value Proposition",
        "contenido9": "EcoBloom is an ecological product, made from natural products that in addition to giving a good smell and freshness, strengthen the hair, such as: coconut oil that moisturizes the scalp, rosemary that accelerates hair growth, and avocado that has antioxidants that nourish and repair dry and damaged hair. These products satisfy needs such as dandruff reduction, hair fall decrease or hair nutrition and repair. Glycerin also known as glycerol, is an organic compound, a type of alcohol found in all natural fats of both vegetable and animal origin. In the San Carlos area there are approximately 100 hotels. Constant exposure to pollution, solar radiation, plus what the constant use of chemical products causes has triggered people to decide to take more care of their skin and hair.",
        
        "titulo10": "Customer Segment",
        "contenido10": " The product is aimed at people ranging between 15 and 65 years old who are interested in skin and hair care regardless of gender. EcoBloom is aimed at middle-class people or anyone who wants to try this product. It is also a product aimed at the tourist zone such as: hotels, spas and in the commercial field.",
        
        "titulo11": "Channels",
        "contenido11": "The media in which product information can be seen will be through Instagram, Facebook, Tik Tok platforms, information will also be transmitted through websites, videos and advertisements of the original EcoBloom page among others. Share information about the product around the area such as neighbors, family, friends and nearby stores.",
        
        "titulo12": "Customer Relationship",
        "contenido12": "To position the product as the first option for customers, it will be necessary to meet quality standards, fulfill what the product promises, and satisfy what the customer requires.",
        
        "titulo13": "Source of Income",
        "contenido13": "Advertise EcoBloom and generate sales to make a profit.",
        
        "titulo14": "Key Resources",
        "contenido14": "-Technological: Social networks or websites will be used as a medium of information to generate sales. \n- Financial: Hold raffles and use savings to meet product and local requirements. \n- Structural/Materials: Computers, internet will be needed; to manufacture the product, molds, glycerin, oils or essences, naturally based soap and luffa sponge are needed. \n- Human: Personnel who produce the item.",
        
        "titulo15": "Key Activities",
        "contenido15": " Launch the product manufacturing process, social media advertising such as informative videos, announcements, educational talks on the importance of sustainable products, and what is necessary to start commercialization.",
        
        "titulo16": "Key Partnerships",
        "contenido16": " Advertising is very important for a product like EcoBloom, since being a sustainable product it has a greater impact on the economy. The expected key partnerships of EcoBloom are supermarkets, pharmacies, hotels, tourism companies interested in having this product in their facilities. The profits acquired are economic benefits for EcoBloom and its allied companies. Some key activities performed by partners include product distribution, marketing, among others.",
        
        "titulo17": "Cost Structure",
        "contenido17": " Some of the highest cost resources are glycerin, a container of approximately 1000 ml has a cost of ¢7,880 and the 3785 L gallon has a cost of ¢17,660; on the other hand, the product can be obtained in another area at a better price. The most difficult key activity is making the product.",

        "titulo-login": "Sign In",
        "label-correo": "Email Address:",
        "label-password": "Password:",
        "btn-enviar": "Log In",
        "texto-registro": 'Don\'t have an account? <a href="#">Register here</a>',

        "btn-cerrar": "Sign Out",

        // Pie de página
        "pie-pagina": "© Mariangel and Francis 2026, Information Technology."
    }
};

// 2. FUNCIÓN PRINCIPAL PARA CAMBIAR EL IDIOMA
function cambiarIdioma(idioma) {
    if (!traducciones[idioma]) return;

    // Recorrer todas las llaves del diccionario
    for (let id in traducciones[idioma]) {
        // MEJORA: Intenta buscar por ID primero, y si no existe, busca por clase (.)
        let elemento = document.getElementById(id) || document.querySelector("." + id);
        
        if (elemento) {
            if (id === "texto-registro") {
                elemento.innerHTML = traducciones[idioma][id];
            } else if (id === "carrito") {
                elemento.innerHTML = `<i class='bx bx-cart'></i> ${traducciones[idioma][id]}`;
            } else {
                elemento.innerText = traducciones[idioma][id];
            }
        }
    }

    // Traducciones adicionales del menú y formularios de login
    const menuLogin = document.getElementById("login") || document.querySelector(".btn-login"); 
    if (menuLogin) {
        menuLogin.innerText = traducciones[idioma]["login"];
    }

    const tituloLogin = document.querySelector(".titulo-login");
    if (tituloLogin) {
        tituloLogin.innerText = traducciones[idioma]["titulo-login"];
    }

    const labelCorreo = document.querySelector("label[for='correo']") || document.querySelector(".label-correo");
    if (labelCorreo) {
        labelCorreo.innerText = traducciones[idioma]["label-correo"];
    }

    const labelPassword = document.querySelector("label[for='password']") || document.querySelector(".label-password");
    if (labelPassword) {
        labelPassword.innerText = traducciones[idioma]["label-password"];
    }

    const btnEnviar = document.querySelector(".btn-enviar");
    if (btnEnviar) {
        btnEnviar.innerText = traducciones[idioma]["btn-enviar"];
    }

    const textoRegistro = document.querySelector(".texto-registro");
    if (textoRegistro) {
        textoRegistro.innerHTML = traducciones[idioma]["texto-registro"];
    }

    // Guardar preferencia
    localStorage.setItem("idiomaEcoBloom", idioma);
}

// 3. CARGAR AUTOMÁTICAMENTE EL ÚLTIMO IDIOMA
window.onload = function() {
    let idiomaGuardado = localStorage.getItem("idiomaEcoBloom") || "es";
    cambiarIdioma(idiomaGuardado);
};