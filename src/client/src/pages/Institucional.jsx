
export default function Institucional() {
  return (
        <div className="pagina-institucional">
            <img className="imagen-fondo-institucional" src='src/assets/paisaje-fondo.jpg'/>

            <main>
                <section className="intro">
                    <h1>¿Quienes somos?</h1>
                    <p>Voy.com es más que un hotel, es un hogar lejos de casa.</p>
                </section>
                <section className="container-institucional container-rect-redondeado">
                    <section className="titulo">
                        <h2>Sobre nosotros</h2>
                    </section>
                    <section>
                    <img src="src/assets/img/iconos-quienes-somos/busqueda.png"/>
                    <p><strong>IDW - Check in</strong> es una plataforma online líder en la búsqueda y comparación de hoteles, dedicada a ofrecer a los viajeros la mejor experiencia posible al reservar su alojamiento.</p>
                    </section>
                    <section>
                        <img src="src/assets/img/iconos-quienes-somos/mision.png"/>
                        <p><strong>Nuestra misión</strong> es simplificar y democratizar el proceso de búsqueda de hoteles, brindando a nuestros usuarios acceso a una amplia gama de opciones, precios competitivos y herramientas útiles para tomar la mejor decisión.</p>
                    </section>
                    <section>
                        <img src="src/assets/img/iconos-quienes-somos/vision.png"/>
                        <p><strong>Nuestra visión</strong> es convertirnos en la plataforma de referencia para la reserva de hoteles en todo el mundo, reconocida por nuestra transparencia, confiabilidad y compromiso con la satisfacción del cliente.</p>
                    </section>
                </section>
            </main>
      </div>
  )
}
