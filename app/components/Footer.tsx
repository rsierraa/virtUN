import Link from "next/link";
import Container from "./Container";
import FooterList from "./FooterList";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mt-16 text-sm bg-slate-700 text-slate-200">
      <Container>
        <div className="flex flex-col justify-between pt-16 pb-8 md:flex-row">
          <FooterList>
            <h3 className="mb-2 text-base font-bold">Shop Categories</h3>
            <Link href="#">SmartPhone</Link>
            <Link href="#">Portátiles</Link>
            <Link href="#">Pc de escritorio</Link>
            <Link href="#">Relojes</Link>
            <Link href="#">TVs</Link>
            <Link href="#">Accesorios</Link>
          </FooterList>
          <FooterList>
            <h3 className="mb-2 text-base font-bold">Atención al Cliente</h3>
            <Link href="#">Contáctanos</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Política de Datos</Link>
          </FooterList>
          <div className="w-full mb-6 md:w-1/3 md:mb-0">
            <h3 className="mb-2 text-base font-bold">Acerca de Nosotros</h3>
            <p className="mb-2">
              Somos tu chaza virtual de tecnología, al mejor precio, dentro de la Nacho
            </p>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} virtUN. Todos los derechos reservados.
            </p>
          </div>
          <FooterList>
          <h3 className="mb-2 text-base font-bold">
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
    </footer>
  );
};

export default Footer;
