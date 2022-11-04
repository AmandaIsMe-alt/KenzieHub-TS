import "./style.css";
import logo from "../../assets/img/Logo.svg";
import { Container, Title1, Title2, Headline, BtnGrey3 } from "../../styles";

function Dashboard({ User, module, setAutenticathed }) {

  return (
    <>
      <header id="headerDashboard">
        <Container className="d-flex justify-content-between align-items-center">
          <img src={logo} alt=""/>
          <BtnGrey3 className="btn-small"
            onClick={() => {
              localStorage.clear();
              setAutenticathed(false);
            }} >Sair</BtnGrey3>
        </Container>
      </header>

    <main id="mainDashboard">
      <section>
        <Container className="d-flex-mobile justify-content-between align-items-center">
          <Title1>Olá, {User}</Title1>
          <Headline>{module}</Headline>
        </Container>
      </section>

      <section>
        <Container>
          <Title1>Que pena! Estamos em desenvolvimento :(</Title1>
          <Title2 className="weight400">Nossa aplicação esta em desenvolvimento, em breve teremos novidades ;)</Title2>
        </Container>
      </section>
    </main>
    </>
  );
}
export default Dashboard;
