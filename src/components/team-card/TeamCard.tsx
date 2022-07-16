import pic from "../../assets/team-photo/achievement.jpeg";
import "./teamCard.scss";

const TeamCard = ({ name, job }: any) => {
  return (
    <div className="col-4 col-cm-6 col-md-12">
      <div className="team-card">
        <img src={pic} alt="pic-card" />
        <div>
          <p className="member-name">{name}</p>
          <p className="member-job">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
