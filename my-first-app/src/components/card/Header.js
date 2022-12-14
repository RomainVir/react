export function Header({ logo, input }) {
  return (
    <header className="container header-inner">
      <span>{logo}</span>
      <input className="search" placeholder="search your bike here" />
    </header>
  );
}
