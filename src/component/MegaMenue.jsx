import "../component/MegaMenu.css";
import React from "react";
import megaOne from "../asset/megaP-one.png";
import megatwo from "../asset/mega-p2.png";
import { Link, useNavigate } from "react-router-dom";

function MegaMenue() {
  return (
    <>
      <section className="mega-menue-parent ">
        <section className="mega-menue container ">
          <section>
            <div>
              <span className="text-sm">Hot Sale</span>
              <ul>
                <li>Hoodies & Sweatshirts</li>
                <li>T-Shirts</li>
                <li>Shirts</li>
                <li>Casual Shorts</li>
                <li>Men's Sets</li>
                <li>Jackets</li>
              </ul>
            </div>
            <div>
              <span className="text-sm">Novelty & Special Use</span>
              <ul>
                <li>Hoodies & Sweatshirts</li>
                <li>T-Shirts</li>
                <li>Shirts</li>
                <li>Casual Shorts</li>
                <li>Casual Shorts</li>
                <li>Hoodies & Sweatshirts</li>
                <li>T-Shirts</li>
              </ul>
            </div>
            <div>
              <div className="text border-2 ">
                <span className="text-sm mx-2 my-2 ">Basic Tshirt</span>
                <img
                  src="https://ae01.alicdn.com/kf/Hd5d1e40095a84906a8fcd95ae216bf9dD.png"
                  alt=""
                  className="w-10 ml-2"
                />
              </div>
            </div>
          </section>
          <section>
            <div>
              <span className="text-sm">Men's Watches </span>
              <ul>
                <li>Mechanical</li>
                <Link to="./productpage">
                  {" "}
                  <li> Watches Quartz </li>
                </Link>

                <li>Watches Digital</li>
                <li> Watches Dual </li>
                <li>Casual Shorts</li>
                <li>Dual Display Watches Sports</li>
              </ul>
            </div>

            <div>
              <span className="text-sm">Bottom</span>
              <ul>
                <li>Hoodies & Sweatshirts</li>
                <li>T-Shirts</li>

                <li>Men's Sets</li>
                <li>Jackets</li>
              </ul>
            </div>
            <div>
              <div className="text border-2 ">
                <span className="text-sm mx-2 my-2 ">Basic Tshirt</span>
                <img
                  src="https://ae01.alicdn.com/kf/Hd5d1e40095a84906a8fcd95ae216bf9dD.png"
                  alt=""
                  className="w-10 ml-2"
                />
              </div>
            </div>
          </section>
          <section>
            <div>
              <span className="text-sm">Accessories</span>
              <ul>
                <li>Hoodies & Sweatshirts</li>
                <li>T-Shirts</li>
                <li>Shirts</li>
                <li>Casual Shorts</li>
              </ul>
            </div>
            <div>
              <span className="text-sm">Underwear & Loungewear</span>
              <ul>
                <li>Hoodies & Sweatshirts</li>
                <li>T-Shirts</li>
                <li>Shirts</li>
                <li>Casual Shorts</li>
                <li>Men's Sets</li>
                <li>Jackets</li>
                <li>Casual Shorts</li>
                <li>Men's Sets</li>
                <li>Jackets</li>
              </ul>
            </div>
            <div>
              <div className="text border-2 ">
                <span className="text-sm mx-2 my-2 ">Basic Tshirt</span>
                <img
                  src="https://ae01.alicdn.com/kf/Hd5d1e40095a84906a8fcd95ae216bf9dD.png"
                  alt=""
                  className="w-10 ml-2"
                />
              </div>
            </div>
          </section>

          <section className="flex justify-between">
            <div className="">
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megaOne}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megatwo}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megaOne}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megatwo}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megaOne}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megatwo}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megaOne}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megaOne}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megatwo}
                alt=""
              />
            </div>
            <div className="">
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megaOne}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megatwo}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megaOne}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megatwo}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megaOne}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megatwo}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megaOne}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megatwo}
                alt=""
              />
              <img
                style={{ backgroundColor: "#F2F2F2" }}
                className="w-[8vw] mx-2 my-2"
                src={megatwo}
                alt=""
              />
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default MegaMenue;
