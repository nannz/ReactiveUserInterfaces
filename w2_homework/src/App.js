import React, { Component } from 'react';
import './App.css';
import Article from './Article.js';
import Content from './Content'
import Date from './Date'
import StoryLinkArea from './StoryLinkArea'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Article articleId = "1">
              <Date date="Jan. 31, 2018"/>
              <StoryLinkArea>
                <Content
                  title = "Taiwan Citizens Accused of Violating U.N. Sanctions on North Korea"
                  summary = "The case comes after another Taiwanese citizen has faced accusations of conducting trade in violation of United Nations sanctions against North Korea."
                  author = "CHRIS HORTON"/>
                <img src="https://static01.nyt.com/images/2018/02/01/world/01taiwan-1/01taiwan-1-mediumThreeByTwo210.jpg" className="thumb" />
              </StoryLinkArea>
          </Article>

          <Article articleId = "2">
              <Date date="Jan. 30, 2018"/>
              <StoryLinkArea>
              <Content
                  title = "Complaint Accuses Contractor of Underpayment at Medicare Call Centers"
                  summary = "The Communications Workers of America said in a complaint filed on Friday that a large government information technology contractor could owe workers as much as $100 million in back wages."
                  author = "JIM TANKERSLEY"/>
              <img src="https://static01.nyt.com/images/2018/01/31/us/politics/31dc-wagetheft/merlin_133114271_ec906296-f6b1-42bb-b5c9-c8a8a236aa28-mediumThreeByTwo210.jpg" className="thumb" />
              </StoryLinkArea>
          </Article>

          <Article articleId = "3">
              <Date date="Jan. 29, 2018"/>
              <StoryLinkArea>
              <Content
                  title = "Volkswagen Suspends Top Lobbyist Amid Inquiry Into Diesel Tests on Monkeys"
                  summary = "Thomas Steg, a former top aide to Chancellor Angela Merkel of Germany, exemplified what critics say are the cozy ties between her government and the country’s carmakers."
                  author = "JACK EWING"/>
              <img src="https://static01.nyt.com/images/2018/01/31/business/31EUROPEDIESEL/merlin_133099070_acb0dd40-e277-43a9-ac6a-7c9aa447fa51-mediumThreeByTwo210.jpg" className="thumb" />
              </StoryLinkArea>
          </Article>

      </div>
    );
  }
}

export default App;
