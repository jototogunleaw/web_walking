import React from "react";
import tw from "../../images/tw-2.png";
import fb from "../../images/fb-2.png";
import yt from "../../images/yt-2.png";
import ig from "../../images/ig-2.png";

const Content1 = () => {
  return (
    <div className="container-contact-content1">
      <div className="contact-topic">
        <p>Fill out the form and a member from our team will get back to you</p>
        <p className="minusmargin">
          within 24 houts or scroll down for more ways to get in touch
        </p>
      </div>
      <div className="contact-form">
        <div className="contact-form-box-1">
          <div className="contact-form-topic">Contact Business Solutions</div>
          <div className="contact-from-subtopic">
            Already a customer or need help with a billing issue?
          </div>
          <div className="box-footer2 box-contact-footer">
            <p className="topic-footer2 topic-contact-footer">Information About</p>
            <p className="text-footer2 text-contact-footer">999 Phuttamonthon 4 Road, Salaya,</p>
            <p className="text-footer2 text-contact-footer">Nakhon Parhom 73170 Thailand</p>
            <p className="text-footer2 text-contact-footer">
              College of Sports Science and Technology
            </p>
            <p className="text-footer2 text-contact-footer">02-441-4295-8</p>
            <div className="icon-footer">
              <div className="icon-box">
                <a href="/twiter">
                  <img src={tw} alt="TW" className="img-footer img-contact-footer"></img>
                </a>
              </div>
              <div className="icon-box">
                <a href="/facebook">
                  <img src={fb} alt="FB" className="img-footer img-contact-footer"></img>
                </a>
              </div>
              <div className="icon-box">
                <a href="/youtube">
                  <img src={yt} alt="YT" className="img-footer img-contact-footer"></img>
                </a>
              </div>
              <div className="icon-box">
                <a href="Instagram">
                  <img src={ig} alt="IG" className="img-footer img-contact-footer"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-box-2">
          <form>
            <div className="contact-form-d-block">
              {/* 1st line */}
              <div className="contact-form-d-flex">
                <div className="form-group-contact">
                  <label htmlFor="FormFristNameInput">Frist Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="FormFristNameInput"
                    placeholder="Frist Name"
                  />
                </div>
                <div className="form-group-contact">
                  <label htmlFor="FormLastNameInput">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="FormLastNameInput"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              {/* 2nd line */}
              <div className="contact-form-d-flex">
                <div className="form-group-contact">
                  <label htmlFor="FormEmailInput">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="FormEmailInput"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="form-group-contact">
                  <label htmlFor="FormPhoneInput">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="FormPhoneInput"
                    placeholder="Phone"
                  />
                </div>
              </div>
              {/* 3rd line */}
              <div className="contact-form-d-flex">
                <div className="form-group-contact">
                  <label htmlFor="FormCompanyNameInput">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="FormCompanyNameInput"
                    placeholder="Company Name"
                  />
                </div>
                <div className="form-group-contact">
                  <label htmlFor="FormIndustryInput">Industry</label>
                  <input
                    type="text"
                    className="form-control"
                    id="FormIndustryInput"
                    placeholder="Select an Industry"
                  />
                </div>
              </div>
              {/* 4st line */}
              <div className="contact-form-d-flex">
                <div className="form-group-contact">
                  <label htmlFor="FormAnnualRevenusInput">Annual Revenus</label>
                  <input
                    type="text"
                    className="form-control"
                    id="FormAnnualRevenusInput"
                    placeholder="Select Revenus"
                  />
                </div>
                <div className="form-group-contact">
                  <label htmlFor="FormCountryInput">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    id="FormCountryInput"
                    placeholder="Select a Country"
                  />
                </div>
              </div>
            </div>
          </form>
          <button type="submit" className="btn btn-info">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Content1;
