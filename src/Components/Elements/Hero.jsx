import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Hero() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
  <div className="Hero">
    <div className="par ">
    <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            "fullScreen": {
              "enable": false,
              "zIndex": 1
            },
            "particles": {
              "number": {
                "value": 10,
                "density": {
                  "enable": false,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#fff"
              },
              "shape": {
                "type": "circle",
                "options": {
                  "sides": 5
                }
              },
              "opacity": {
                "value": 0.4,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 4,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 600,
                "color": "#FFFFFF",
                "opacity": 0.4,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": ["grab"]
                },
                "onclick": {
                  "enable": false,
                  "mode": "bubble"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true,
            "background": {
              "color": "",
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "contain"
            }
          }}
        />
    </div>
    
    <div >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h1>
                Decentralized Spot and
                <br /> Futures Trading on BSC
              </h1>
            </div>
            <div>
              <p>
                Automated market maker powered, taking De-Fi game to the next
                level. Make instant spot exchange, leveraged trades, provide
                liquidity to earn returns and rewards.
              </p>
            </div>
            <div>
              <a
                className="btn btn-warning btn-lg pl-4 pr-4 "
                href="https://app.porkswap.finance/swap?network=56"
              >
                Spot Trading Platform Launched 🚀
              </a>
            </div>
            <hr />
            <div>
              <a
                className="btn btn-danger"
                href="https://staking.porkswap.finance/"
              >
                Earn PSWAP
              </a>
              &nbsp;&nbsp;
              <a
                className="btn btn-danger"
                href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x42539f50c5f8a0c929e7895eb265391f58b22a19"
              >
                Trade on PCS
              </a>
              &nbsp;&nbsp;
              <a
                className="btn btn-danger"
                href="https://voting.porkswap.finance/"
              >
                Governance
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img
                className="img-fluid"
                src="Assests/porkswap-pink.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
