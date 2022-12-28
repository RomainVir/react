import "../About/Aboutus.css";
import team from "../../assets/team.jpeg";
export default function About() {
  return (
    <div className="about">
      <h1>About us</h1>
      <div className="image"></div>
      <img src={team} width="640px" alt="light" />
    </div>
  );
}
