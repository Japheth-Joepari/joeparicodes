import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <Accordion>
          <h2 style={{ textAlign: "center" }} theme={theme}>
            <b>Work and Experiences 👨‍⚕️</b>
          </h2>
          {this.props.sections.map((section) => {
            return (
              <div
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                      border: `1px solid`,
                      borderRadius: `5px`,
                      borderColor: `${theme.headerColor}`,
                      marginBottom: `3px`,
                      fontFamily: "Google Sans Regular",
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} />
                  );
                })}
              </div>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
