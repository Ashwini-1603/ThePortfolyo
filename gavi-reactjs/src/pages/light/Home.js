import React from 'react';
import { Helmet } from 'react-helmet';
import ProgressScroll from '../../components/Common/ProgressScroll';
import Cursor from '../../components/Common/cusor';
import LoadingScreen from '../../components/Common/loader';
import Blog from '../../components/light/home/blog';
import ContactUs from '../../components/light/contact/ContactUs';
import Info from '../../components/light/contact/info';
import Footer from '../../components/light/home/footer';
import NavTop from '../../components/light/home/nav-top';
import Navbar from '../../components/light/home/navbar';
import Portfolio from '../../components/light/home/portfolio';
import Price from '../../components/light/home/price';
import Profile from '../../components/light/home/profile';
import Services from '../../components/light/home/services';
import Skills from '../../components/light/home/skills';
import Testimonials from '../../components/light/home/testimonials';
import Lines from '../../components/Common/Lines';
function HomeLight(prop) {
  
  return (
    <div>
      <Helmet>
        <title>Gavi - Light</title>
        <link rel="icon" href="/light/assets/imgs/favicon.ico" />
        <link rel="shortcut icon" href="/light/assets/imgs/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/style.css"
        />
      </Helmet>
      <Cursor />
      <ContactUs />
      <Lines />
      <LoadingScreen />
      <ProgressScroll />
      <div>
        <NavTop data={prop.data}/>
        <main className="container">
          <Profile data={prop.data} />
          <Navbar />
          <section className="in-box">
            <Services data={prop.data}/>
            <Skills data={prop.data}/>
            <Portfolio data={prop.data}/>
            <Testimonials data={prop.data}/>
            <Price />
            <Info data={prop.data}/>
            <Blog />
          </section>
        </main>
        <Footer />
      </div>
      <script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <script
        src="/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />
      <script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <script src="/assets/js/scripts.js" strategy="beforeInteractive" />
      <script src="/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}

export default HomeLight;
