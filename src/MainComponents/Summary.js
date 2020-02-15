import React from "react";
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";

//components
import ProgressRing from "./SubComponents/ProgressRing";
import CustomCard from "./SubComponents/CustomCard";

//helper
import FormatToThousands from "./HelperFunctions/FormatToThousands";
import DateFormat from "./HelperFunctions/DateFormat";

function Summary({ user }) {
  const percent = x => (x * 100).toFixed(1) + "%";
  let progressSectionCards = [
    {
      title: "Currently Saved",
      text: FormatToThousands(user.currentlySaved)
    },
    { title: "Leftover Amount", text: FormatToThousands(user.remaining) },
    {
      title: "Monthly Savings",
      text: FormatToThousands(user.monthlySaving)
    },
    { title: "Date Created", text: DateFormat(user.dateCreated) },
    { title: "Expected End Date", text: DateFormat(user.expectedCompletion) },
    {
      title: "Currently Saved",
      text: FormatToThousands(user.currentlySaved)
    }
  ].map((info, i) => <CustomCard info={info} key={i} />);

  let planDetailsSectionCards = [
    {
      title: "House Cost",
      text: FormatToThousands(user.house_cost)
    },
    {
      title: "Down Payment %",
      text: percent(user.downPaymentPercent)
    },
    {
      title: "Mortgage Rate",
      text: percent(user.mortgageRate)
    },
    {
      title: "Mortgage Length",
      text: `${user.mortgageLength} year${user.mortgageLength > 2 ? "s" : ""}`
    }
  ].map((info, i) => <CustomCard info={info} key={i} />);
  return (
    <div id="summary">
      <section id="progress">
        <div className="customHeading">Summary</div>
        <ProgressRing
          progressPercent={user.progressPercent}
          mortgageLength={user.mortgageLength}
        />
        {progressSectionCards}
      </section>

      <section id="advisor">
        <div className="customHeading">Advisor</div>
        <div className="advisorCard">
          <div>
            <div>{user.advisor.name}</div>
            <div className="advisorTitle">{user.advisor.title}</div>
          </div>
          <div className="iconContainers">
            <img className="icon" src="/images/message.png" alt="message" />
            <div className="spacer"></div>
            <img
              className="icon"
              src="/images/call_button.png"
              alt="call button"
            />
          </div>
        </div>
      </section>

      <section id="planDetails">{planDetailsSectionCards}</section>
      
      <section className="flex">
        <LinkContainer to="/modify">
          <button type="button" className="modifyButton">
            Modify Plan
          </button>
        </LinkContainer>
      </section>
    </div>
  );
}

export default Summary;
