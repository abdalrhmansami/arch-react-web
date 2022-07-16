import "./ourTeam.scss";
import TeamCard from "../../../components/team-card/TeamCard";

const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="service-head">
        <h2> Meet the team</h2>
        <p>Maecenas eget ultrices libero fsce sed convallis</p>
      </div>
      <section className="team-section row">
        <TeamCard name={"John Berry"} job={"CEO"} />
        <TeamCard name={"Jan Bruk"} job={"Architect"} />
        <TeamCard name={"Miranda Berry"} job={"Architect"} />
        <TeamCard name={"Elizabeth Wood"} job={"Exterior designer"} />
        <TeamCard name={"Melanie Jones"} job={"Interior designer"} />
        <TeamCard name={"Philip Berg"} job={"Marketing specialist"} />
      </section>
      <div className="service-head">
        <h2>Some numbers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      </div>
      <section className="number-section">
        <div className="number-element">
          <h1 className="number-haed">30</h1>
          <p className="number-caption">Years of experience</p>
        </div>
        <div className="number-element">
          <h1 className="number-haed">600+</h1>
          <p className="number-caption">Finished projects</p>
        </div>
        <div className="number-element">
          <h1 className="number-haed">120</h1>
          <p className="number-caption">Awards</p>
        </div>
        <div className="number-element">
          <h1 className="number-haed">70+</h1>
          <p className="number-caption">Employees</p>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
