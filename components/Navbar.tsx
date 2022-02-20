import Image from "next/image";
import Link from "next/link";
import foto from '../public/foto.jpg';

function Navbar() {
    return(
        <div>  
            <header className=' bg-fuchsia-600 px-4 py-4 flex justify-between items-center'>
                <div className="text-white capitalize text-xl">
                    <Link href={"/"}>
                        <a>Abdukarimov bobur</a>
                    </Link>
                </div>
                    <div className="flex items-center">
                    <p className="text-white capitalize font-semibold ">bobur</p>
                    <Image src={foto}  width={30} height={30} className="rounded-full object-cover ml-2" />
          </div>
            </header>
        </div>
    )
}
export default Navbar;