import "./ourTeam.scss";
import TeamCard from "../../../components/team-card/TeamCard";
import { teamData } from "../../../constant/team-data";
import { statisticsData } from "../../../constant/statistics-data";

const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="service-head">
        <h2> Meet the team</h2>
        <p>Maecenas eget ultrices libero fsce sed convallis</p>
      </div>
      <section className="team-section row">
        {teamData.map((item) => (
          <TeamCard
            key={item.id}
            name={item.name}
            job={item.job}
            image={item.image}
          />
        ))}
      </section>
      <div className="service-head">
        <h2>Some numbers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      </div>
      <section className="number-section">
        {statisticsData.map((item) => (
          <div key={item.id} className="number-element">
            <h1 className="number-haed">{item.number}</h1>
            <p className="number-caption">{item.caption}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OurTeam;
