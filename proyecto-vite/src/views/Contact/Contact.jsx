import "../Contact/contact.css";
export default function Contact() {
  return (
    <div className="contacto">
      <h1>Feel free to contact us here!</h1>
      <p>
        Para ojos aviesos la verdad puede ocultarse detrás de una mueca. El
        viaje no termina aquí. La muerte solo es un camino que todos tenemos que
        tomar. Un mago nunca llega tarde. Ni pronto, Frodo Bolsón. Llega justo
        cuando se lo propone. Uno debe seguir el camino que la necesidad escoge.
        Para ojos aviesos la verdad puede ocultarse detrás de una mueca. Un mago
        nunca llega tarde. Ni pronto, Frodo Bolsón. Llega justo cuando se lo
        propone. El mundo no esta en los libros y mapas. ¡Esta ahí fuera!. El
        viaje no termina aquí. La muerte solo es un camino que todos tenemos que
        tomar. Solo tú puedes decidir con el tiempo que te has dado. No tengo
        ningún consejo para darle a aquel que desespera. Corred insensatos. El
        mundo no esta en los libros y mapas. ¡Esta ahí fuera!. Es sabiduría
        reconocer la necesidad, cuando todos los otros cursos ya han sido
        considerados, aunque pueda parecer locura a aquellos que se atan a
        falsas esperanzas. Uno debe seguir el camino que la necesidad escoge. No
        tengo ningún consejo para darle a aquel que desespera. Para ojos aviesos
        la verdad puede ocultarse detrás de una mueca. No tengo ningún consejo
        para darle a aquel que desespera. Solo tú puedes decidir con el tiempo
        que te has dado. Sé muchas cosas que solo los sabios saben. El mundo no
        esta en los libros y mapas. ¡Esta ahí fuera!.
      </p>
      <div className="register">
        <h1>Contact us</h1>

        <div className="input-grp">
          <label for="Email"></label>
          <input type="text" placeholder="Name" id="Name" />
          <div className="input-grp">
            <label for="Email"></label>
           

            <div className="input-grp">
              <label for="Email"></label>
              <input type="email" placeholder="Email" id="Email" />
            </div>

            <div className="input-grp">
              <label for="Password"></label>
            </div>

            <textarea placeholder="Tell us how we can help"/>
            <button className="enter " type="button">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
