import { useState } from "react";
import "../Allproducts/allproducts.css";
import velo from "../../assets/canyon3.jpeg";
export default function Allproducts() {
  const [title, setTitle] = useState("products");
  return (
    <div className="allproducts">
      <div className="change">
        <h1>Here are all the {title}</h1>
        <button onClick={() => setTitle("services")}>Change title</button>
        <h2>Try to change {title}</h2>
        <button onClick={() => setTitle("services")}>Change again</button>
        <p>
          Para ojos aviesos la verdad puede ocultarse detrás de una mueca. El
          viaje no termina aquí. La muerte solo es un camino que todos tenemos
          que tomar. Un mago nunca llega tarde. Ni pronto, Frodo Bolsón. Llega
          justo cuando se lo propone. Uno debe seguir el camino que la necesidad
          escoge. Para ojos aviesos la verdad puede ocultarse detrás de una
          mueca. Un mago nunca llega tarde. Ni pronto, Frodo Bolsón. Llega justo
          cuando se lo propone. El mundo no esta en los libros y mapas. ¡Esta
          ahí fuera!. El viaje no termina aquí. La muerte solo es un camino que
          todos tenemos que tomar. Solo tú puedes decidir con el tiempo que te
          has dado. No tengo ningún consejo para darle a aquel que desespera.
          Corred insensatos. El mundo no esta en los libros y mapas. ¡Esta ahí
          fuera!. Es sabiduría reconocer la necesidad, cuando todos los otros
          cursos ya han sido considerados, aunque pueda parecer locura a
          aquellos que se atan a falsas esperanzas. Uno debe seguir el camino
          que la necesidad escoge. No tengo ningún consejo para darle a aquel
          que desespera. Para ojos aviesos la verdad puede ocultarse detrás de
          una mueca. No tengo ningún consejo para darle a aquel que desespera.
          Solo tú puedes decidir con el tiempo que te has dado. Sé muchas cosas
          que solo los sabios saben. El mundo no esta en los libros y mapas.
          ¡Esta ahí fuera!.
        </p>
      </div>
      <div className="cards">
        <img src={velo} alt="velo" />
        <h3>Canyon</h3>
        <h4>1239 €</h4>
        <button>Buy</button>
        <button>Details</button>
      </div>
      <div className="cards">
        <img src={velo} alt="velo" />
        <h3>Canyon</h3>
        <h4>1239 €</h4>
        <button>Buy</button>
        <button>Details</button>
      </div>
    </div>
  );
}
