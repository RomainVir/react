export function Header (logo, text) {
    return(
        <header className="container header-inner">
        <span>{logo}</span>
      <button className="search"
      >{text}
    </button>
      
    </header>
    )
}