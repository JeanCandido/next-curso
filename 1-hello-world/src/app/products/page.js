import Link from "next/link";

export default function Products() {
    return (
        <main>
            <h1>Pagina de Produtos</h1>
            <Link href="products/shirt">Camisa</Link>
            <br/>
            <Link href="products/paints">Calças</Link>
        </main>

    )
}