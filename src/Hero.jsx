import { Button, Col, Container, Row } from "reactstrap";
import image from "./images/heroimgmain.webp";
import noun from "./images/noun 1.webp";
import ntel from "./images/ntel 1.webp";
import sportlag from "./images/Sporting lagos 2.webp";
import pricep from "./images/Pricepally 1.webp";
import releaf from "./images/releaf 2.webp";
import talentq from "./images/talent ql 1.webp";
import productimg from "./images/product display with circle behind last edit.webp";
import google from "./images/google logo editable 1 (1).webp";
import flutterwave from "./images/flutterwave logo webp 1.webp";
import startups from "./images/500 startups.webp";
import zedcrest from "./images/Zedcrest-Group-logo webp 1.webp";
import providus from "./images/ProvidusBankeditable1.webp";
import paga from "./images/pagawebp.webp";
import approval from "./images2/Approvalworkflowicon.webp";
import bulk from "./images2/Bulkpaymenticon.webp";
import expense from "./images2/Expensetracking2.webp";
import overd from "./images2/overdrafticon.webp";
import subw from "./images2/Subwalletsicon2.webp";
import virtual from "./images2/virtualcardsicon2.webp";
import securityimg from "./images2/securitysectionimg.webp";
import guardian from "./images2/TheGuardianLogo.webp";
import disrupt from "./images2/DisruptAfricalogo.webp";
import techp from "./images2/Techpoint1.webp";
import techc from "./images2/techcaballogo.webp";
import buisness from "./images2/businessday1.webp";
import whatsapp from "./images2/whatsappicon.webp";
import call from "./images2/phoneicon.webp";
import email from "./images2/emailicon.webp";
import facebook from "./images2/facebooksocial2.webp";
import twitter from "./images2/twittericon.webp";
import instagram from "./images2/instagramicon.webp";
import linkedin from "./images2/linkedinlogo.webp";
import youtube from "./images2/youtubesocials2.webp";
import contactus from "./images2/contactusimage.webp";
import logo from "./images/Flex (4).webp";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import Slides from "./Slides";

const Hero = () => {
  return (
    <>
      <Row>
        <div className="center-align hero-bg px-3 px-sm-4 py-3 py-sm-5">
          <div className="row justify-content-center ">
            <Col sm={12} xs="12" md="6">
              <div className="col-md text center text-md-start">
                <h1>
                  <div className="display-2 hero-headingone">Save time & money on your business spending</div>
                </h1>
                <p className="lead my-5 hero-para">
                  Flex empowers your business with all the tools needed to manage your company's spending on one platform, Gain 100% visibility and control over
                  every money spent.
                </p>
                <Button className=" mx-2 hero-firstbtn hero-firstbtn:hover my-1">Sign Up Now</Button>
                <Button outline className="mx-2  hero-sndbtn hero-sndbtn:hover my-1">
                  {" "}
                  ▶ Watch How It Works{" "}
                </Button>
              </div>
            </Col>
            <Col sm={12} xs="12" md="6">
              <div className="col-md-12 text-center m-3 mt-sm-5">
                <img className="img-fluid hero-img" src={image} alt="ladyyellow" />
              </div>
            </Col>
          </div>
        </div>
      </Row>

      <Row md={6} xs={3} sm={3} className="p-3 brands-bg">
        <Col>
          <img src={noun} alt="noun" className="brands" />
        </Col>
        <Col>
          <img src={ntel} alt="ntel" className="brands" />
        </Col>
        <Col>
          <img src={sportlag} alt="sportlag" className="brands" />
        </Col>
        <Col>
          <img src={pricep} alt="pricep" className="brands" />
        </Col>
        <Col>
          <img src={releaf} alt="releaf" className="brands" />
        </Col>
        <Col>
          <img src={talentq} alt="talentq" className="brands" />
        </Col>
      </Row>

      <h3>
        <div className="py-5 txt-brands text-center mt-4">Manage all your company's spending across mobile, web & corporate cards</div>
      </h3>
      <div className="row justify-content-center mx-auto big-img">
        <img src={productimg} alt="productimage" />
      </div>
      <h2>
        <div className="py-5 my-1 txt-brands text-center mt-3 display-6">Take control of your spending</div>
      </h2>
      <div>
        {/*code for first set of cards*/}
        <Container className="mb-3">
          <Row md="3" xs="1" sm="1">
            <Col>
              {/*card 1*/}
              <Card
                style={{
                  backgroundColor: "rgb(255, 251, 242)",
                }}
                className="body-fstcards p-4 "
              >
                <CardBody>
                  <CardTitle className="title-fstcards mb-4" tag="h4">
                    Real-time visibility
                  </CardTitle>
                  <CardText className="text-fstcards text-muted ">
                    You no longer need to wait till the end of the month. Know how money leaves your business in real-time and get actionable insights to make
                    decisions.
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col>
              {/*card 2*/}
              <Card
                style={{
                  backgroundColor: "#e6fff6",
                }}
                className="body-fstcards p-4  "
              >
                <CardBody>
                  <CardTitle className="title-fstcards mb-4" tag="h4">
                    Reliable payments
                  </CardTitle>
                  <CardText className="text-fstcards text-muted ">
                    Sending a payment to one or a thousand? We help you fulfil all your payments with a 99.9% success rate at the best fees.
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col>
              {/*card 3*/}
              <Card
                style={{
                  backgroundColor: "#f2f7ff",
                }}
                className="body-fstcards p-4"
              >
                <CardBody>
                  <CardTitle className="title-fstcards mb-4" tag="h4">
                    Security
                  </CardTitle>
                  <CardText className="text-fstcards text-muted ">
                    Manage your company's spending with bank-grade security and seamless approval workflow. Say goodbye to manual, error-prone processes
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        <div className="text-center">
          <Button className="mt-3 mb-5 hero-firstbtn hero-firstbtn:hover btn-fstcards">Sign Up Now</Button>
        </div>

        {/*code for our partners*/}
        <div className="row justify-content-center partners-bg">
          <h2>
            <div className="mt-5 pt-3 txt-brands display-5">Our partners</div>
          </h2>
          <p>
            <div className="text-fstcards text-muted ">
              As a Leading Spend Management Platform, we are backed by global funds and have reliable payment partners.
            </div>
          </p>

          <Row md={6} xs={3} sm={3}>
            <Col>
              <img src={google} alt="google" className="partners-brand p-2" />
            </Col>
            <Col>
              <img src={startups} alt="startups" className="partners-brand p-2" />
            </Col>
            <Col>
              <img src={flutterwave} alt="flutterwave" className="partners-brand p-2" />
            </Col>
            <Col>
              <img src={paga} alt="paga" className="partners-brand p-2" />
            </Col>
            <Col>
              <img src={providus} alt="providus" className="partners-brand p-2" />
            </Col>
            <Col>
              <img src={zedcrest} alt="zedcrest" className="partners-brand p-2" />
            </Col>
          </Row>
        </div>
        {/*for carousel*/}
        <div className="slides-div px-5 ">
          <Slides />

          {/*code for features card*/}
        </div>
        <h2>
          <div className="py-5 txt-brands display-5 text-center ">Features</div>
        </h2>
        <Container className="">
          <Row md="3" sm="1" xs={1}>
            <Col>
              {/*card 1*/}
              <Card className="features-card mb-2">
                <img
                  alt="approval"
                  src={approval}
                  style={{
                    width: 50,
                  }}
                />
                <CardBody>
                  <CardTitle tag="h6" className="features-cardtitle py-3">
                    Approval Workflow
                  </CardTitle>

                  <CardText className=" text-muted py-3" tag="h6">
                    Manage your requesters, approvers and disbursers in one place.
                  </CardText>
                  <a href="approval-workflow" className="features-anchor features-anchor:hover py-5">
                    View More
                  </a>
                </CardBody>
              </Card>
            </Col>

            <Col>
              {/*card 2*/}
              <Card className="features-card mb-2 ">
                <img
                  alt="bulk"
                  src={bulk}
                  style={{
                    width: 50,
                  }}
                />
                <CardBody>
                  <CardTitle tag="h6" className="features-cardtitle py-3">
                    Bulk Payment
                  </CardTitle>

                  <CardText className=" text-muted py-3" tag="h6">
                    Instantly transfer money to 1,000 people at once.
                  </CardText>
                  <a href="approval-workflow" className="features-anchor features-anchor:hover py-5">
                    View More
                  </a>
                </CardBody>
              </Card>
            </Col>

            <Col>
              {/*card 3*/}
              <Card className="features-card mb-2 ">
                <img
                  alt="expense"
                  src={expense}
                  style={{
                    width: 50,
                  }}
                />
                <CardBody>
                  <CardTitle tag="h6" className="features-cardtitle py-3">
                    Expense Cards
                  </CardTitle>

                  <CardText className=" text-muted py-3" tag="h6">
                    Issue virtual dollar cards to teams for smooth international payments.
                  </CardText>
                  <a href="approval-workflow" className="features-anchor features-anchor:hover py-5">
                    View More
                  </a>
                </CardBody>
              </Card>
            </Col>

            <Col>
              {/*card 4*/}
              <Card className="features-card mt-2">
                <img
                  alt="subw"
                  src={subw}
                  style={{
                    width: 50,
                  }}
                />
                <CardBody>
                  <CardTitle tag="h6" className="features-cardtitle py-3">
                    Sub-accounts
                  </CardTitle>

                  <CardText className=" text-muted py-3" tag="h6">
                    Create and manage sub-accounts for teams and departments.
                  </CardText>
                  <a href="approval-workflow" className="features-anchor features-anchor:hover py-5">
                    View More
                  </a>
                </CardBody>
              </Card>
            </Col>

            <Col>
              {/*card 5*/}
              <Card className="features-card mt-2">
                <img
                  alt="virtual"
                  src={virtual}
                  style={{
                    width: 50,
                  }}
                />
                <CardBody>
                  <CardTitle tag="h6" className="features-cardtitle py-3">
                    Expense Tracking
                  </CardTitle>

                  <CardText className=" text-muted py-3" tag="h6">
                    Flex automatically categorizes transfers and expense requests in real time.
                  </CardText>
                  <a href="approval-workflow" className="features-anchor features-anchor:hover py-5">
                    View More
                  </a>
                </CardBody>
              </Card>
            </Col>

            <Col>
              {/*card 6*/}
              <Card className="features-card mt-2">
                <img
                  alt="overdraft"
                  src={overd}
                  style={{
                    width: 50,
                  }}
                />
                <CardBody>
                  <CardTitle tag="h6" className="features-cardtitle py-3">
                    Overdraft
                  </CardTitle>

                  <CardText className=" text-muted py-3" tag="h6">
                    Get Instant Access to credit for your business in the best interest of the country.
                  </CardText>
                  <a href="approval-workflow" className="features-anchor features-anchor:hover py-5">
                    View More
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <div>
          {/*code for security polygon*/}
          <Row className="security-poly ">
            <Col sm="12" md="6">
              <div className="center-align ">
                <div className="row justify-content-center ">
                  <div className="text-md-start text-sm-center security-polytxt mt-5 ms-5 me-sm-3 ms">
                    <h2>
                      <div className="display-6 hero-headingone mt-md-5 ms-md-5 ms-sm-3 me-sm-3">Bank Grade Security</div>
                    </h2>
                    <h3 className="hero-para ms-md-5 ms-sm-2 me-sm-5 ">
                      Banking services provided by Providus Bank which is regulated by Central Bank of Nigeria
                    </h3>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm="12" md="6">
              <div className="col-md-12 text-center m-5  ">
                <img className="img-fluid security-img" src={securityimg} alt="ladyyellow" />
              </div>
            </Col>
          </Row>
          {/*code for news polygon*/}
          <div className="news-poly py-5">
            <h2>
              <div className="py-5 txt-brands display-5 text-center">We are in the news</div>
            </h2>

            <Row md={6} xs={3} sm={3} className="ms-4">
              <Col>
                <img src={guardian} alt="noun" className="news-brand py-2" />
              </Col>
              <Col>
                <img src={disrupt} alt="ntel" className="news-brand py-2" />
              </Col>
              <Col>
                <img src={techp} alt="sportlag" className="news-brand py-2" />
              </Col>
              <Col>
                <img src={techc} alt="pricep" className="news-brand py-2" />
              </Col>
              <Col>
                <img src={buisness} alt="releaf" className="news-brand py-2" />
              </Col>
              <Col>
                <img src={talentq} alt="talentq" className="news-brand py-2" />
              </Col>
            </Row>
          </div>
          {/*code for contact us div*/}
          <Row className="contact-box m-4">
            <Col sm="6">
              <h2>
                <div className="my-3 py-3 txt-brands display-6 contact-title">Contact Us</div>
              </h2>
              <p className="contact-para text-muted">Join over 2,500 business today and start spending smarter</p>
              <Row sm="4">
                <a href="https://wa.me/2348090557742" className="contact-nums my-3 p-2 mx-1 ">
                  <img src={whatsapp} alt="whasapp_icon" className="contact-numsimg my-1 " />
                  <h3>+2348090557742</h3>
                </a>
                <a href="+234-809-055-7742" className="contact-nums my-3 p-2 mx-2 ">
                  <img src={call} alt="whasapp_icon" className="contact-numsimg my-1 " />
                  <h3>+2348090557742</h3>
                </a>
                {/*email*/}
                <a href="gethelp@flexfinance.ai" className="contact-email my-1 p-1">
                  <img src={email} alt="whasapp_icon" className="contact-numsimg my-1 " />
                  <h3>gethelp@flexfinance.ai</h3>
                </a>
              </Row>

              <div>
                {/*social media icons*/}
                <a href="www.facebook.com" className="contact-socials m-3">
                  <img
                    src={facebook}
                    alt="socialmediaicon"
                    style={{
                      width: 38,
                    }}
                  />
                </a>
                <a href="www.instagram.com" className="contact-socials m-3">
                  <img
                    src={instagram}
                    alt="socialmediaicon"
                    style={{
                      width: 38,
                    }}
                  />
                </a>
                <a href="www.twitter.com" className="contact-socials m-3">
                  <img
                    src={twitter}
                    alt="socialmediaicon"
                    style={{
                      width: 38,
                    }}
                  />
                </a>
                <a href="www.linkedin.com" className="contact-socials m-3">
                  <img
                    src={linkedin}
                    alt="socialmediaicon"
                    style={{
                      width: 38,
                    }}
                  />
                </a>
                <a href="www.youtube.com" className="contact-socials m-3 ">
                  <img
                    src={youtube}
                    alt="socialmediaicon"
                    style={{
                      width: 38,
                    }}
                  />
                </a>
              </div>
            </Col>
            <Col sm="6">
              <div className="col-md-12">
                <img
                  className="img-fluid contact-img float-end"
                  src={contactus}
                  alt="contactus"
                  style={{
                    width: 500,
                    height: 400,
                  }}
                />
              </div>
            </Col>
          </Row>

          {/*join poly*/}
          <div className="join-poly">
            <Row className="ms-md-3">
              <Col sm="12" lg="6" md="6" xl="6" xxl="6">
                <h2 className="join-heading mx-5 display-6">Join over 2,500 business today and start spending smarter.</h2>
              </Col>

              <Col sm="12" lg="6" md="6" xl="6" xxl="6">
                <a href="https://app.flexfinance.ai/#/sign-up/">
                  <Button className="hero-firstbtn hero-firstbtn:hover join-btn mt-md-3 ms-md-5 ms-sm-5 mt-sm-3 ">Sign Up Now</Button>
                </a>
              </Col>
            </Row>
          </div>

          {/*footer poly*/}
          <div className="footer-poly ">
            <Row>
              <Col>
                <Row>
                  <Col sm="12" md="4">
                    <h3>
                      <div className="footer-header mt-5 ms-4">COMPANY</div>
                    </h3>
                    <ul className="footer-ul ">
                      <li>About Us</li>
                      <li>Products</li>
                      <li>Industries </li>
                      <li>Solutions</li>
                    </ul>
                  </Col>

                  <Col sm="12" md="4">
                    <h3>
                      <div className="footer-header mt-5 ms-4">PRODUCTS</div>
                    </h3>
                    <ul className="footer-ul">
                      <li>Approval Workflow</li>
                      <li>Bulk Payments</li>
                      <li>Expense Cards</li>
                      <li>Sub-accounts</li>
                      <li>Expense</li>
                      <li>Overdraft</li>
                    </ul>
                  </Col>

                  <Col sm="12" md="4">
                    <h3>
                      <div className="footer-header mt-5 ms-4">RESOURCES</div>
                    </h3>
                    <ul className="footer-ul ">
                      <li>Sign Up Now</li>
                      <li>Contact Us</li>
                      <li>Sign In</li>
                      <li>Pricing</li>
                      <li>Blog</li>
                      <li>FAQ</li>
                    </ul>
                  </Col>
                </Row>
              </Col>

              <Col md="6" sm="12">
                <div className="float-md-end mt-5 ms-sm-3" style={{ paddingRight: "15%" }}>
                  <div className="d-flex justify-content-end">
                    <img src={logo} alt="flex-footer" className="footer-logo " />
                  </div>
                  <h6 className="m-2 ">Built with ❤ for buisnesses in Africa</h6>

                  <div className="d-flex justify-content-center">
                    <a href="www.facebook.com" className="contact-socials m-2 ">
                      <img
                        src={facebook}
                        alt="socialmediaicon"
                        style={{
                          width: 30,
                        }}
                      />
                    </a>
                    <a href="www.instagram.com" className="contact-socials m-2">
                      <img
                        src={instagram}
                        alt="socialmediaicon"
                        style={{
                          width: 30,
                        }}
                      />
                    </a>
                    <a href="www.twitter.com" className="contact-socials m-2">
                      <img
                        src={twitter}
                        alt="socialmediaicon"
                        style={{
                          width: 30,
                        }}
                      />
                    </a>
                    <a href="www.linkedin.com" className="contact-socials m-2">
                      <img
                        src={linkedin}
                        alt="socialmediaicon"
                        style={{
                          width: 30,
                        }}
                      />
                    </a>
                    <a href="www.youtube.com" className="contact-socials m-2 ">
                      <img
                        src={youtube}
                        alt="socialmediaicon"
                        style={{
                          width: 30,
                        }}
                      />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="final-footer text-center">
            <p className="final-footerpara pb-3 ">Flex Financial Technologies Ltd 2024, All right reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
