import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return ( <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Nuestro Menú</h3>
                    <Link href="#">Salado</Link>
                    <Link href="#">Dulce</Link>
                    <Link href="#">Bebidas</Link>
                    <Link href="#">Adiciones</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Atención al Cliente</h3>
                    <Link href="#">Contáctanos</Link>
                    <Link href="#">FAQs</Link>
                    <Link href="#">Política de Datos</Link>

                </FooterList>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-base font-bold mb-2">Acerca de Nosotros</h3>
                <p className="mb-2">Somos tu restaurante virtual de confianza para comer rico, saludable y al mejor precio en la UN</p>
                </div>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">
                        Síguenos en
                    </h3>
                    <div className="flex space-x-2">
                    <Link href="#">
                        <AiFillInstagram size={24}/>
                    </Link>
                    <Link href="#">
                        <AiFillGithub size={24}/>
                    </Link>
                    </div>
                </FooterList>
            </div>
        </Container>
    </footer> );
}
 
export default Footer;