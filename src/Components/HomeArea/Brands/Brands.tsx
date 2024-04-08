import "./Brands.css";

export function Brands(): JSX.Element {

    class Brand {
        public id: number;
        public brandName: string;

        constructor(id: number, brandName: string) {
            this.id = id;
            this.brandName = brandName;
        }

        display(): void {
            console.log("Brand ID: " + this.id + ", Brand Name: " + this.brandName);
        }
    }

    function displayBrand(brand: Brand): void {
        brand.display();
    }

    // Create instances of Brand
    const myBrands: Brand[] = [
        new Brand(1, "Nike"),
        new Brand(2, "Adidas"),
        new Brand(3, "Fila"),
        new Brand(4, "Saucony"),
        new Brand(5, "Vans"),
        new Brand(6, "Converse"),
    ];


    return (
        <div className="Brands">
            <h2>Brands</h2>
            <ul>
                {myBrands.map(brand => (
                    <li key={brand.id}>{brand.brandName}</li>
                ))}
            </ul>
        </div>
    );
}
