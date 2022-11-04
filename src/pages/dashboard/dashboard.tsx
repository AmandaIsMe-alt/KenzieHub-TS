import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { IoIosAdd } from "react-icons/io";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

import { UserContext } from "../../context/UserContext";
import { TechContext } from "../../context/TechContext";

import { AddTech } from "../../components/Modal/AddTech";
import { EditTech } from "../../components/Modal/EditTech";

import logo from "../../assets/img/Logo.svg"
import { Container, Title1, Title2, Title3, Headline, BtnGroup, BtnGrey4, BtnGrey3 } from "../../styles";
import { HeaderDashboard, MainDashboard, Tecnologias } from "./stylesDashboard";


export const Dashboard = () => {
  const token = localStorage.getItem("KenzieHub:token");

  const {getProfile, getTechs} = useContext(UserContext);

  const {
    onOpenAdd,
    handleDeleteTeach,
    onOpenTech,
    setGetId,
  } = useContext(TechContext);

  const navigate = useNavigate();

  const toLogin = () => {
    window.localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      {token ? (
        <>
          <HeaderDashboard>
            <Container className="d-flex justify-content-between align-items-center">
              <img src={logo} alt=""/>
              <BtnGrey3 className="btn-small"
                onClick={() => toLogin()} >Sair</BtnGrey3>
            </Container>
          </HeaderDashboard>

          <MainDashboard>
            <section>
                <Container className="d-flex-mobile justify-content-between align-items-center">
                  {getProfile.map((item) => (
                    <>
                      <Title1>Olá, {item.name}</Title1>
                      <Headline>{item.course_module}</Headline>
                    </>
                  ))}
                </Container>
            </section>

            <section>
              <Container>

                <div className="d-flex justify-content-between align-items-center">
                  <Title2>Tecnologias</Title2>

                  <BtnGrey3 className="btn-small" onClick={onOpenAdd}>
                    <IoIosAdd size={22} color="#F8F9FA" />
                  </BtnGrey3>
                </div>

                <Tecnologias>
                  <>
                    {getTechs.map((tech) => (
                      <>
                        {tech ? (
                          <li key={tech.id} onClickCapture={() => setGetId(tech.id)}>
                            
                            <figure>
                              <Title3>{tech.title}</Title3>
                              <figcaption>
                                <Headline>{tech.status}</Headline>

                                <BtnGroup>
                                  <BtnGrey4 className="btn-small" onClick={onOpenTech}>
                                    <AiOutlineEdit size={15} color="#868E96" />
                                  </BtnGrey4>

                                  <BtnGrey4 className="btn-small" onClick={() =>  handleDeleteTeach(tech.id)}>
                                    <BsTrash size={17} color="#868E96" />
                                  </BtnGrey4>
                                </BtnGroup>
                              </figcaption>
                            </figure>
                          </li>
                          ) : (
                            <li></li>
                          )}
                        </>
                      ))}
                  </>
                </Tecnologias>
              </Container>
            </section>
          </MainDashboard>
        </>
      ) : (
        <Navigate to="/" replace />
      )}
      <AddTech />
      <EditTech />
    </>
  );
};
