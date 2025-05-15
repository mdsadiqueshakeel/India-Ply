import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'


function Founder() {
 useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);

      return (
        <section className="founder-section py-5">
          <div className="container px-4 px-md-5">
            <div className="bg-light-orange rounded shadow-lg p-4 p-md-5" data-aos="fade-up">
              <div className="row">
                {/* Text Content */}
                <div className="col-12">
                  <h2 className="text-brown fw-bold mb-3" data-aos="fade-in">About India Ply</h2>
                  <p>
                    India Ply, established in the year 2010 in Jehanabad, Bihar, has grown into a trusted name in the plywood and interior solutions industry. Founded by Mr. Ehtasham Alam, the company has steadily built a strong reputation for quality, reliability, and customer-centric service.
                  </p>
                  <p>
                    With over a decade of experience and a deep understanding of the local market, India Ply has successfully served more than 500 satisfied clients across residential and commercial projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Founder;
