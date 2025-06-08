import React from "react";

const DecisionComponent = () => {
  return (
    <div style={styles.container}>
      {/* Background Animation */}
      <div style={styles.animatedBackground}>
        <div className="line left-line" />
        <div className="arrow arrow-left" />
        <div className="line right-line" />
        <div className="arrow arrow-right" />
      </div>

      {/* Content */}
      <div style={styles.content}>
        <h1 style={styles.heading}>MAKE A DECISION</h1>
        <div style={styles.decisionWrapper}>
          {/* Traditional Route */}
          <div style={styles.option}>
            <h2 style={styles.payLabel}>PAY</h2>
            <h1 style={styles.bigNumber}>10,00,000+</h1>
            <p style={styles.description}>
              Follow the traditional route and try 100 different things before eventually giving up, throwing away the time and money of yourself, your partners and your investors.
            </p>
          </div>

          <div style={styles.vs}>VS</div>

          {/* Smart Route */}
          <div style={styles.option}>
            <h2 style={styles.payLabel}>PAY</h2>
            <h1 style={styles.bigNumber}>199</h1>
            <p style={styles.description}>
              Join an ecosystem of success right away, where you will be spoon-fed all the resources you need to succeed on your first attempt and will be surrounded by experts throughout your journey.
            </p>
            <button style={styles.button}>Join Now</button>
          </div>
        </div>
      </div>

      {/* CSS in JSX */}
      <style>{`
        .line {
          position: absolute;
          width: 2px;
          height: 150px;
          background: rgba(255, 215, 0, 0.2);
          animation: pulseLine 2s ease-in-out infinite;
        }

        .left-line {
          left: 20%;
          top: 30%;
        }

        .right-line {
          right: 20%;
          top: 30%;
        }

        .arrow {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 20px solid rgba(255, 215, 0, 0.3);
          animation: floatArrow 2s infinite ease-in-out;
        }

        .arrow-left {
          left: 20%;
          top: 43%;
        }

        .arrow-right {
          right: 20%;
          top: 43%;
        }

        @keyframes pulseLine {
          0%, 100% {
            height: 150px;
            opacity: 0.2;
          }
          50% {
            height: 170px;
            opacity: 0.5;
          }
        }

        @keyframes floatArrow {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    height: "100vh",
    backgroundColor: "#0b0f1a",
    color: "#fff",
    fontFamily: "'Segoe UI', sans-serif",
    overflow: "hidden",
  },
  animatedBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 0,
    opacity: 0.3,
    pointerEvents: "none",
  },
  content: {
    position: "relative",
    zIndex: 2,
    paddingTop: "100px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "50px",
  },
  decisionWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "80px",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  option: {
    width: "300px",
    background: "#111827",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 0 20px rgba(255, 215, 0, 0.2)",
    textAlign: "left",
    transition: "transform 0.3s",
  },
  payLabel: {
    color: "#f5c242",
    fontSize: "1rem",
    marginBottom: "5px",
  },
  bigNumber: {
    fontSize: "2.2rem",
    color: "#fcd34d",
    marginBottom: "10px",
  },
  description: {
    fontSize: "0.95rem",
    lineHeight: 1.5,
    color: "#cbd5e1",
  },
  vs: {
    fontSize: "1.5rem",
    color: "#94a3b8",
    alignSelf: "center",
    fontWeight: "bold",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "#fcd34d",
    color: "#000",
    padding: "10px 25px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.3s ease-in-out",
  },
};

export default DecisionComponent;
