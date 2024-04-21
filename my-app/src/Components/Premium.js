import React from "react";
import image from "../images/image-10.png";

const Premium = () => {
  return (
    <div>
      <section>
        <div className="row align-items-start color">
          <div className="col-lg-6">
            <div className="container">
              <div className="row ">
                <div className=" gy-5 gx-5">
                  <form>
                    <div>
                      <div className="row">
                        <div className="col-lg-6 ">
                          <div className="form-group">
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control "
                              placeholder=" First Name *"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              id="form_lastname"
                              type="text"
                              name="surname"
                              className="form-control"
                              placeholder="Last Name *"
                              required
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Phone *"
                              required
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              id="form_lastname"
                              type="text"
                              name="surname"
                              className="form-control"
                              placeholder="Email *"
                              required
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              id="form_lastname"
                              type="text"
                              name="surname"
                              className="form-control"
                              placeholder="City *"
                              required
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              id="form_phone"
                              type="tel"
                              name="phone"
                              className="form-control"
                              placeholder="Country *"
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder="Message *"
                          rows="4"
                          required
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>

                

                      <input
                        type="submit"
                        className="btn btn-success btn-send"
                        value="SEND"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={image} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Premium;
