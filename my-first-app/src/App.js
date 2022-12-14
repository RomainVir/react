import './imagenes/canyon3.jpeg'
import './App.css';
import Card  from '../src/components/card/Card'
import { Header } from '../src/components/card/Header'
//import { ButtonBuy } from './components/card/Button';

const products =[
  {  id:"1",
    img:"https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw8ff9df37/images/full/full_2022_/2022/full_2022_neuron-5_3155_gy-bk_P5.jpg?sw=737&sfrm=png&q=90&bgcolor=F4F4F4",
    title:"Velo 1",
    price:"2419€",
    buy:"Buy",
    details:"Details"
  },
  {id:"2",
    img:"https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw72a8d2a3/images/full/full_2022_/2022/full_2022_neuron-on-6_3121_bk-bk_P5.jpg?sw=737&sfrm=png&q=90&bgcolor=F4F4F4",
    title:"Velo 2",
    price:"4519€",
    buy:"Buy",
    details:"Details"
  },
  {id:"3",
    img:"https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw1f472b87/images/full/full_2022_/2022/full_2022_neuron-5_3155_rd_P5.jpg?sw=874&sfrm=png&q=90&bgcolor=F4F4F4",
    title:"Velo 3",
    price:"1219€",
    buy:"Buy",
    details:"Details"
  }
]
function App() {
  return (
    <div className="App">
    <div className="header">
      <Header 
      logo="https://cdn.shopify.com/s/files/1/0571/9919/8395/products/009_f0214598-aef2-423a-9912-3a7d4fe76e54_1392x928.jpg?v=1649251481"
      input="search"
      />
    </div>
  <div className="velos">
    {products.map(({img, title, price, buy, details}) => (
      <Card 
      img={img}
      title={title}
      price={price}
      buy={buy}
      details={details}
      /> 
   ))};
  </div>
  </div>
)}

export default App;
