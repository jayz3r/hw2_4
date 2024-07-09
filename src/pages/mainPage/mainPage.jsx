import Title from "../../components/title/title";
import About from "../../components/about/About";

export default function mainPage() {
  return (
    <div>
      <About info={{title: "Some Title", body:"Some body"}} />
      <Title />
    </div>
  );
}
