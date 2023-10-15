//from DaisyUI

export default function Footer() {
  return (
    <footer className="bg-neutral p-10 text-neutral-content">
      <div className="footer m-auto max-w-7xl">
        <div>
          <span className="footer-title">Servicios</span>
          <a className="link-hover link">Branding</a>
          <a className="link-hover link">Diseño</a>
          <a className="link-hover link">Marketing</a>
          <a className="link-hover link">Contacto Publicidad</a>
          <a className="text-left font-bold">Hecho con ❤️ en la Universidad Nacional de Colombia</a>
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
      </div>
    </footer>
  );
}
