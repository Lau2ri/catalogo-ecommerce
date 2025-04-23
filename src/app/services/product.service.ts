import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private products: Product[] = [
        {
            id: 1,
            name: "Samsung Galaxy S25 Ultra 5G",
            shortDescription: "Smartphone premium con cámara de 200 MP y pantalla AMOLED 6.8''",
            detailedDescription: "El Samsung Galaxy S25 Ultra es el último buque insignia de la marca, ofreciendo una pantalla AMOLED Dinámica de 6.8 pulgadas con tasa de refresco de 120Hz. Incorpora una cámara principal de 200 MP con capacidades de zoom óptico de 10x, grabación 8K, y un potente procesador Exynos 2500. Su batería de 5,500 mAh asegura rendimiento para todo el día, con carga rápida de 65W y carga inalámbrica. Además, incluye resistencia al agua IP68, conectividad 5G y compatibilidad con S-Pen.",
            price: 6999000,
            imageUrl: "assets/images/s25Ultra.jpg",
            category: "Smartphones",
            stock: 25
        },
        {
            id: 2,
            name: "Apple MacBook Air 13'' M3 (2025)",
            shortDescription: "Laptop ultraligera con chip M3 y 18 horas de batería",
            detailedDescription: "La nueva MacBook Air 13'' con chip Apple M3 redefine el rendimiento portátil. Con un diseño delgado de tan solo 1.1 kg, esta laptop ofrece potencia para edición de video, diseño gráfico y trabajo multitarea. Su pantalla Liquid Retina es ideal para contenido visual de alta calidad. Integra 8 núcleos de CPU y 10 de GPU, hasta 18 horas de autonomía, sistema de refrigeración pasiva y compatibilidad con dos monitores externos. Perfecta para profesionales en movimiento.",
            price: 6799000,
            imageUrl: "assets/images/MacBook.jpg",
            category: "Laptops",
            stock: 12
        },
        {
            id: 3,
            name: "Sony WH-1000XM6 Audífonos Inalámbricos",
            shortDescription: "Auriculares con cancelación de ruido líder y audio Hi-Res",
            detailedDescription: "Los Sony WH-1000XM6 mejoran aún más el estándar de los audífonos inalámbricos con cancelación de ruido activa. Gracias a su nuevo procesador QN2e, ofrecen una experiencia sonora inmersiva, personalizable y sin interrupciones. Incluyen compatibilidad con audio Hi-Res, 30 horas de batería, carga rápida (10 min = 5 h), y un diseño ergonómico más ligero. Soporte para asistentes de voz, control táctil y conexión multipunto hacen de estos audífonos una opción premium para usuarios exigentes.",
            price: 1399000,
            imageUrl: "assets/images/Sony.jpg",
            category: "Audífonos",
            stock: 40
        }
    ];

    getProducts(): Product[] {
        return this.products;
    }

    getProductById(id: number): Product | undefined {
        return this.products.find(product => product.id === id);
    }
} 