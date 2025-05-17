import React from 'react';


function Partners() {
    const partners = [
        { name: "Century Plyboards", logo: "/media/images/century-ply.png" },
        { name: "Greenply Industries", logo: "/media/images/greenply.png" },
        { name: "Kitply Plywood", logo: "/media/images/kitply.png" },
        { name: "Fevicol Adhesives", logo: "/media/images/fevicol.png" },
        { name: "Hettich Hardware", logo: "/media/images/hettich.png" },
        { name: "Godrej Interio", logo: "/media/images/godrej.png" },
        { name: "Duro Plywood", logo: "/media/images/duro.png" },
        { name: "Sarda Plywood", logo: "/media/images/sarda.png" }
    ];

    return (
        <div className="partners-section">
            <div className="section-header">
                <h2 className="section-title">Our Trusted Partners</h2>
                <div className="title-decoration">
                    <div className="deco-line"></div>
                    <div className="deco-icon">✦</div>
                    <div className="deco-line"></div>
                </div>
                <p className="section-subtitle">Collaborating with industry leaders to bring you the best</p>
            </div>
            
            <div className="marquee-container">
                <div className="marquee-track">
                    {[...partners, ...partners].map((partner, index) => (
                        <div key={index} className="partner-card">
                            <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                className="partner-logo"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = "/media/images/placeholder.png";
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Partners;