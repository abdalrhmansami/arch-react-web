import Card from "../../../components/card/Card";
import "./service.scss";
import pic from "../../../assets/joel.jpeg";

const Services = () => {
  return (
    <div className="service-page">
      <div className="service-head">
        <h2>Our main service</h2>
        <p>
          Nullam mattis sed justo quis sollicitudin. Maecenas lobortis fermentum
          fringilla. Vivamus in diam erat.
        </p>
      </div>
      <section className="service-cards">
        <Card />
        <Card />
        <Card />
      </section>
      <section className="view-project">
        <section className="section-view1">
          <p className="address-project">68 High street, London, England</p>
          <p className="land-p">
            23 floor office <br /> building in the heart of London city
          </p>
          <button className="land-button">View Project</button>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <p className="land-small-p">
            “Sed ultrices dignissim orci, vel porta justo placerat quis.
            Vestibulum quis tempor erat ”
          </p>
          <br />
          <div className="personal-service">
            <img
              style={{ width: "90px", minHeight: "90px", borderRadius: "100%" }}
              src={pic}
            />
            <div>
              <p className="personal-name">Kate Wilkinson</p>
              <p className="personal-job">architect</p>
            </div>
          </div>
        </section>
        <div className="service-image"></div>
      </section>
      <section className="view-project2">
        <div className="service-image2"></div>
        <section className="section-view2">
          <p className="address-project">68 North area 23, Los Angeles, USA</p>
          <p className="land-p">Award winning private luxury house</p>
          <button className="land-button">View Project</button>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <p className="land-small-p">
            “Sed ultrices dignissim orci, vel porta justo placerat quis.
            Vestibulum quis tempor erat ”
          </p>
          <br />
          <div className="personal-service2">
            <img
              style={{ width: "90px", minHeight: "90px", borderRadius: "100%" }}
              src={pic}
            />
            <div>
              <p className="personal-name2">John Doe</p>
              <p className="personal-job2">architect</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Services;
