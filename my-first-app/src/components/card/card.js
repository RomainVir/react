export default function card({img, title, price, buy, details}) {
  return (
<div className ="cards">
      <img
       src={img} alt="velo"/>
      <h3>{title}</h3>
      <h4>{price}</h4> 
      <button>{buy}</button>
      <button>{details}</button>
       </div>
  )
};

