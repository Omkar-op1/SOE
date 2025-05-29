export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Project Timeline</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Week 1-2: Discovery</h3>
              <p>Understanding your business needs and gathering requirements</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Week 3-4: Design</h3>
              <p>Creating wireframes, mockups, and finalizing the visual design</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Week 5-8: Development</h3>
              <p>Building the application with regular progress updates</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Week 9-10: Testing & Launch</h3>
              <p>Quality assurance, final testing, and project deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
