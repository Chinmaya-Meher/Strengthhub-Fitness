import "../css/AboutServices.css";

export default function AboutServices() {
  return (
    <>
      {/* 🔥 WHO WE ARE */}
      <section className="who">

        {/* LEFT SIDE */}
        <div className="who-left">
          <h5>WHO WE ARE</h5>

          <h2>
            Empowering you to <br />
            achieve your best self
          </h2>

          <p>
            StrengthHub Fitness is dedicated to helping you reach your fitness
            goals with personalized training, advanced equipment, and expert
            guidance in an energetic and motivating environment.
          </p>
        </div>

        {/* 🔥 RIGHT SIDE STATS */}
        <div className="who-right">
          <div className="stats">

            <div className="stat">
              <h1>850+</h1>
              <p>Success Stories</p>
            </div>

            <div className="stat">
              <h1>30+</h1>
              <p>Certified Trainers</p>
            </div>

            <div className="stat">
              <h1>2.5K+</h1>
              <p>Happy Clients</p>
            </div>

          </div>
        </div>

      </section>

      {/* 🔥 OUR SERVICES */}
      <section className="services">

        <h2>OUR SERVICES</h2>

        <div className="services-grid">

          <div className="service-card">
  <img src="https://images.squarespace-cdn.com/content/v1/5ede457a2188e55de5de09a7/1591889835496-GPGGP2ZIRL0V41HKKOGH/The+Benefits+Of+Personal+Training+At+Home.jpg" alt="Personal Training" />
  <div className="overlay"></div>

  <div className="service-info">
    <h3>Personal Training</h3>
    <p>Tailored 1-on-1 fitness and nutrition coaching</p>
    <button>LEARN MORE</button>
  </div>
</div>

<div className="service-card">
  <img src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800" alt="Fitness Classes" />
  <div className="overlay"></div>

  <div className="service-info">
    <h3>Body Building</h3>
    <p>Build strength and muscles with focused training</p>
    <button>LEARN MORE</button>
  </div>
</div>

<div className="service-card">
  
  <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800" alt="Body Building" />
  <div className="overlay"></div>

  <div className="service-info">
    <h3>Fitness Classes</h3>
    <p>Diverse classes from HIIT to Yoga</p>
    <button>LEARN MORE</button>
  </div>
</div>

<div className="service-card">
  <img src="https://images.stockcake.com/public/c/1/a/c1a3febf-5421-4396-8814-668de424a8bf_large/intense-gym-workout-stockcake.jpg" alt="Group Workouts" />
  <div className="overlay"></div>

  <div className="service-info">
    <h3>Group Workouts</h3>
    <p>Push your limits with motivating Gym sessions</p>
    <button>LEARN MORE</button>
  </div>
</div>

        </div>
      </section>
    </>
  );
}