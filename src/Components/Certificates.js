import React, { useEffect, useState } from "react";
import certificateData from "./Data/certificate.json";
import LazyLoad from "react-lazy-load";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    setCertificates(certificateData);
  }, []);

  return (
    <div className="container certificates" id="certificates">
      <h1>Certificates</h1>
      {certificates.map((company) => (
        <LazyLoad key={company.id} height={200} offset={100}>
          <div className="certificate-item text-center my-5" data-aos="zoom-in" data-aos-duration="1000">
            <h2 style={{ fontSize: "40px", color: "yellowgreen" }}>{company.company}</h2>
            <ul>
              {company.Certificate.map((cert) => (
                <li key={cert.id}>
                  {cert.name}
                </li>
              ))}
            </ul>
          </div>
        </LazyLoad>
      ))}
    </div>
  );
};

export default Certificates;