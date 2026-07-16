import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>WebGIS Developer Intern</h4>
                <h5>TerrAqua UAV Pvt. Ltd.</h5>
              </div>
              <h3>Jun '25</h3>
            </div>
            <p>
              Built a WebGIS platform (React.js + Leaflet) that projects remote
              sensing imagery onto a live map for real-time object detection,
              integrating the Segment Anything Model (SAM) for automated image
              segmentation. Shipped GeoJSON/KML export, deployed a scalable AWS
              backend, and built a native Android app (Capacitor) for offline
              field data collection.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer Intern</h4>
                <h5>Biofuel Logistics · IIT Kanpur</h5>
              </div>
              <h3>Jan–Apr '26</h3>
            </div>
            <p>
              Co-built and publicly deployed an end-to-end UCO route
              optimization platform (React, Node.js/Express, PostgreSQL,
              Leaflet) in a 6-member team. Designed a Capacitated VRP with Time
              Windows (CVRPTW) solver minimizing carbon emission per litre
              collected, plus real-time GPS tracking and a dynamic rerouting
              engine — scaling logistics across 50+ cities and 110K+ food
              outlets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software & Data Engineering Intern</h4>
                <h5>I'mBesideYou Inc. · Japan</h5>
              </div>
              <h3>May–Jul '26</h3>
            </div>
            <p>
              Built a full-stack AI sales-intelligence platform (React 18,
              FastAPI, Firestore, Cloud Run) with LLM circuit-breakers and a
              multi-model AI fallback pipeline (Gemini/Claude/GPT-4o) that parses
              Zoom transcripts for meeting intelligence. Shipped a live 5-signal
              deal-health scoring engine and warm-intro algorithms across 119
              enterprise accounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
