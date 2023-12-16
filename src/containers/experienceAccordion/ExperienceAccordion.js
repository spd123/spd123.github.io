import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { experience } from "../../portfolio.js";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <ExperienceCard index={0} totalCards={this.props.sections[0]["experiences"].length} experience={this.props.sections[0]["experiences"][0]} theme={theme} />
        <ExperienceCard index={1} totalCards={this.props.sections[0]["experiences"].length} experience={this.props.sections[0]["experiences"][1]} theme={theme} />
        <ExperienceCard index={2} totalCards={this.props.sections[0]["experiences"].length} experience={this.props.sections[0]["experiences"][2]} theme={theme} />
        {/* <Accordion>
          {this.props.sections.map((section) => {
            return (
              <Panel
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
                      color: `${theme.text}`,
                      ":hover": {
                        color: `${theme.secondaryText}`,
                      },
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                    }),
                  },
                }}
              >
{section["experiences"].map((experience,index) => {
                  return (
                    <ExperienceCard index={index} totalCards={section["experiences"].length} experience={experience} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion> */}
      </div>
    );
  }
}

export default ExperienceAccordion;
