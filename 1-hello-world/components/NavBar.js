import Link from "next/link";

export default function NavBar(){
    return(
        <>
            <ul className="bg-black text-white flex gap-6 p-2">
            <Link href="/" className=" hover:bg-slate-800 p-2 rounded">Home</Link>
            <br/>
            <Link href="/products" className=" hover:bg-slate-800 p-2 rounded">Produtos</Link>
            <br/>
            <Link href="/about" className=" hover:bg-slate-800 p-2 rounded">Sobre nós</Link>
            </ul>
        </>
    )
}