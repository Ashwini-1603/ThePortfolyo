import React from 'react';

function Profile(props) {
  return (
    <section className="intro-profile md-mb50">
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img">
                <img src={props.data.user && props.data.user.about.avatar.url} alt="" />
                <span className="icon">
                  <img src="/light/assets/imgs/header/icon1.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/light/assets/imgs/header/icon2.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/light/assets/imgs/header/icon4.png" alt="" />
                </span>
              </div>
              <div className="info text-center mt-30">
                <h5>{props.data.user && props.data.user.about.name}</h5>
                <p className="fz-13 text-u">{props.data.user && props.data.user.about.title}</p>
              </div>
              <div className="social text-center mt-20">
              {
                  props.data.user && props.data.user.social_handles.map(item => {
                    return (
                      <a href={item.url}>
                        <img src={item.image.url} />
                      </a>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 content main-bg">
          <h1>
            Hello, I’m <span className="main-color">{props.data.user && props.data.user.about.name}</span>
            {/* , Front-end
            Developer and{' '} */}
            <span className="bord">
            {props.data.user && props.data.user.about.title} <i></i>
            </span>{' '}
            Based in {props.data.user && props.data.user.about.address}.
          </h1>
          <div className="stauts mt-80">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>{props.data.user && props.data.user.about.exp_year}</h2>
                  <p>
                    Years <br /> of Experance
                  </p>
                </div>
              </div>
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>6k</h2>
                  <p>
                    Clients <br /> Worldwide
                  </p>
                </div>
              </div>
              <div>
                <div className="butn-presv">
                  <a href="#0" className="butn butn-md butn-bord radius-5 skew">
                    <span>Dwonload C.V</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
