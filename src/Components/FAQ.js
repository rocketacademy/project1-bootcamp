import React from "react";
import backgroundWide2 from "../images/backgroundWide2.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "./FAQ.css";

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faq: null,
    };
  }
  faqAns = {
    "What is the price and structure of each dinner and how do I book?": (
      <div className="side-answers answers">
        <p className="answer-topline">
          Our menu starts from $118/pax for 4 starters, 2 to 3 mains, sides and
          a dessert. Reservations are only confirmed upon receipt of your
          payment to Celina Tan via PayNow 98360223. PayNow within 5 days from
          reservation, after which the date will be released.
        </p>
        <p>We only host 1 group per night. Min 6pax. Max 12pax.</p>
        <p>For 8 pax & more, additional Mains as indicated on menu.</p>
        <p>Dinner service is from 7pm to 10:30pm.</p>
      </div>
    ),
    "Can I make adjustments to the menu?": (
      <div className="side-answers answers">
        <p className="answer-topline">
          We serve 1 menu for the whole group, no kids menu or pricing.
        </p>
        <p>
          If you have dietary restrictions, let us know prior to reservations.
        </p>
        <p>
          As a small private kitchen, we may not be able to accommodate all
          restrictions. Menu is not suitable for vegetarians or vegans.
        </p>
      </div>
    ),
    "Is there any corkage charges if I bring my own drinks?": (
      <div className="side-answers answers">
        <p className="answer-topline">
          BYOB no corkage. We only provide 1 wine glass per guest and enough ice
          for 1 wine ice bucket. If you need more ice, please BYO.
        </p>
      </div>
    ),
    "Can we change our reservation or get a refund?": (
      <div className="side-answers answers">
        <p className="answer-topline">
          No refunds. Rescheduling is accepted more than 5 weeks in advance.
          After that time, if you are not able to make it, please find a
          replacement to take your date. You can change group size until 2 weeks
          before dinner date.
        </p>
      </div>
    ),
  };

  clickHandler = (event) => {
    if (this.state.faq === event.nativeEvent.srcElement.innerHTML) {
      this.setState({ faq: null });
    } else {
      this.setState({
        faq: event.nativeEvent.srcElement.innerHTML,
      });
    }
  };

  render() {
    return (
      <>
        <div className="col-lg-6 col-12 questions">
          <h1 className="faq-header">Frequently Asked Questions</h1>
          <h5>
            {window.innerWidth < 992 ? "Tap " : "Click "}the questions below to
            see the answers.
          </h5>
          {Object.keys(this.faqAns).map((questions, number) => (
            <div key={"question " + number}>
              <div className="faq-item" onClick={this.clickHandler}>
                {questions}
              </div>
              <div className="d-lg-none">
                {questions === this.state.faq && this.faqAns[this.state.faq]}
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-6 d-lg-block d-none p-0">
          <div
            className="faq-placeholder"
            style={{
              backgroundImage: `url(${backgroundWide2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {this.faqAns[this.state.faq] && this.faqAns[this.state.faq]}
          </div>
        </div>
      </>
    );
  }
}

export default FAQ;
