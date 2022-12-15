export function Header({logo}) {
    return (
      <header className="container header-inner">
        <img src={logo}/>
        <input className="search" placeholder="search your bike here" />
        <button>Basket</button>
      </header>
    );
  }
