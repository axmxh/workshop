import React from "react";
import "./style.scss";
import { Pin } from "../icons/pin";
import { Eye } from "../icons/eye";
import { Info } from "../icons/info";
import { Face } from "../icons/face";
import { Phone } from "../icons/phone";
import { Hand } from "../icons/hand";

function index() {
  return (
    <div className="helped">
      <div className="container">
        <div className="row pt-5 mb-5 helped__header">
          <h2 className="col-12">How we have helped</h2>
          <p className="col-12">
            See how Al Foundation have promoted change locally and to the world
          </p>
        </div>
        <div className="row boxes mt-5 ">
          <div className="col-lg-3 col-md-4 col-6">
            <div className="box">
              <div className="box__inner">
                <Pin width="35" />
                <p>Find place</p>
                <p>+</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="box">
              <div className="box__inner">
                <Eye width="40" />
                <p>A’awen</p>
                <p>+</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="box">
              <div className="box__inner">
                <Info width="40" />
                <p>Find place</p>
                <p>+</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 offset-lg-1 offset-sm-0">
            <div className="box">
              <div className="box__inner">
                <Face width="55" />
                <p>Tofoula</p>
                <p>+</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="box">
              <div className="box__inner">
                <Phone width="45" />
                <p>Fundraising</p>
                <p>+</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="box">
              <div className="box__inner">
                <Hand width="55" />
                <p>Zakat</p>
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row boxes second"></div>
      </div>
    </div>
  );
}

export default index;
