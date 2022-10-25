import React from "react";
import bgImage from "../../img/svg/Group 1.svg";
import chartIcon from "../../img/svg/Chart.svg";
import Polygon1 from "../../img/svg/Polygon 1.svg";
import Polygon2 from "../../img/svg/Polygon 2.svg";

const About = () => {
  return (
    <div className="about">
      <svg
        className="about__bgImage"
        width="1897"
        height="1833"
        viewBox="0 0 1897 1833"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <path
            d="M1192.57 916.5C1192.57 1046.72 1083.32 1152.32 948.5 1152.32C813.679 1152.32 704.426 1046.72 704.426 916.5C704.426 786.285 813.679 680.684 948.5 680.684C1083.32 680.684 1192.57 786.285 1192.57 916.5Z"
            stroke="url(#paint0_linear_1_384)"
            stroke-opacity="0.7"
            stroke-width="1.4"
          />
          <path
            d="M1393.12 916.5C1393.12 1153.74 1194.08 1346.1 948.5 1346.1C702.918 1346.1 503.876 1153.74 503.876 916.5C503.876 679.261 702.918 486.9 948.5 486.9C1194.08 486.9 1393.12 679.261 1393.12 916.5Z"
            stroke="url(#paint1_linear_1_384)"
            stroke-opacity="0.7"
            stroke-width="1.4"
          />
          <path
            d="M1500.86 929.662C1500.86 1297.57 1192.19 1595.86 811.374 1595.86C430.559 1595.86 121.889 1297.57 121.889 929.662C121.889 561.753 430.559 263.462 811.374 263.462C1192.19 263.462 1500.86 561.753 1500.86 929.662Z"
            stroke="url(#paint2_linear_1_384)"
            stroke-opacity="0.7"
            stroke-width="1.4"
          />
          <path
            d="M1896.3 916.5C1896.3 1422.26 1471.98 1832.3 948.5 1832.3C425.022 1832.3 0.7 1422.26 0.7 916.5C0.7 410.74 425.022 0.7 948.5 0.7C1471.98 0.7 1896.3 410.74 1896.3 916.5Z"
            stroke="url(#paint3_linear_1_384)"
            stroke-opacity="0.7"
            stroke-width="1.4"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_384"
            x1="703.726"
            y1="679.984"
            x2="1203.76"
            y2="691.342"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#91E4FF" stop-opacity="0.6" />
            <stop offset="0.295443" stop-color="#E77FFA" stop-opacity="0.79" />
            <stop offset="0.540308" stop-color="#362962" />
            <stop offset="0.9375" stop-color="#9D71FB" stop-opacity="0.71" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_384"
            x1="1045.26"
            y1="486"
            x2="1303.18"
            y2="1100.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#91E4FF" stop-opacity="0.6" />
            <stop offset="0.295443" stop-color="#E77FFA" stop-opacity="0.79" />
            <stop offset="0.540308" stop-color="#362962" />
            <stop offset="0.9375" stop-color="#9D71FB" stop-opacity="0.71" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_384"
            x1="975.408"
            y1="212.001"
            x2="1417.21"
            y2="1055.22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#91E4FF" stop-opacity="0.6" />
            <stop offset="0.295443" stop-color="#E77FFA" stop-opacity="0.79" />
            <stop offset="0.540308" stop-color="#362962" />
            <stop offset="0.9375" stop-color="#9D71FB" stop-opacity="0.71" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_384"
            x1="920.039"
            y1="0.000290146"
            x2="1464.51"
            y2="1105.22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#91E4FF" stop-opacity="0.6" />
            <stop offset="0.295443" stop-color="#E77FFA" stop-opacity="0.79" />
            <stop offset="0.540308" stop-color="#362962" />
            <stop offset="0.9375" stop-color="#9D71FB" stop-opacity="0.71" />
          </linearGradient>
        </defs>
      </svg>
      <div className="about__inner">
        <h4 className="about__title">about us</h4>
        <h2 className="about__subtitle">Global technologies</h2>
      </div>
      <div className="about__row">
        <div className="about__chart-image">
          <img src={chartIcon} alt="" />
        </div>
        <div className="about__content">
          <h2 className="about__content-title">Level 1</h2>
          <div className="about__content-item">
            <img className="about__polygon" src={Polygon1} alt="" />
            <p className="about__content-text">
              Deploy a multi-legged futures strategy by simultaneously placing
              orders to buy and sell from the same order ticket.
            </p>
          </div>
          <div className="about__content-item">
            <img className="about__polygon" src={Polygon2} alt="" />
            <p className="about__content-text">
              Place and manage orders based on the Level 2 order book, which
              provides a live display of all bids and offers waiting to be
              executed.
            </p>
          </div>
          <div className="about__start">
            <div className="about__start-btn">Start Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
