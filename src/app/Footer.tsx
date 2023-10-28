//from DaisyUI
import Link from "next/link";
import {MdFacebook} from "react-icons/md"
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="p-10 bg-neutral text-neutral-content">
      <div className="m-auto footer max-w-7xl">
        <div>
          <span className="footer-title">Servicios</span>
          <a className="link-hover link">Branding</a>
          <a className="link-hover link">Diseño</a>
          <a className="link-hover link">Marketing</a>
          <a className="link-hover link">Contacto Publicidad</a>
          <a className="font-bold text-left">Hecho con ❤️ en la Universidad Nacional de Colombia</a>
        </div>
        <div>
          <span className="footer-title">Compañía</span>
          <a className="link-hover link">Conócenos</a>
          <a className="link-hover link">Contáctanos</a>
          <a className="link-hover link">Trabaja Con Nosotros</a>
          <a className="link-hover link">Redes Sociales</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link-hover link">Terminos de Uso</a>
          <a className="link-hover link">Políticas de Privacidad</a>
          <a className="link-hover link">Cookies</a>
        </div>
        <div>
          <span className="footer-title">Siguenos</span>
          <div className="flex gap-2">
          <Link href="#">
            <MdFacebook size={20}/>
          </Link>
          <Link href="#">
            <AiFillTwitterCircle size={20}/>
          </Link>
          <Link href="#">
            <AiFillInstagram size={20}/>
          </Link>
          <Link href="#">
            <AiFillYoutube size={20}/>
          </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
