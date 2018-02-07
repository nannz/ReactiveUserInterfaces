import React, {Component} from 'react';
import './App.css';
import Article from './Article.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Article articleId="1"
                         date="Feb. 6, 2018"
                         title="The Times Answers Your Questions About the Market Turmoil"
                         summary="Tempted to sell? Answer these six questions first, including ones about your timing, your goals, your predictive skills and your overall anxiety level."
                         author="TARA SIEGEL BERNARD"
                         imgSource = "https://static01.nyt.com/images/2018/02/01/world/01taiwan-1/01taiwan-1-mediumThreeByTwo210.jpg"
                         storyLink = "https://www.nytimes.com/2018/02/01/technology/amazon-apple-holiday-sales.html?rref=collection%2Fsectioncollection%2Fbusiness"
                />
                <Article articleId="2"
                         date="Jan. 31, 2018"
                         title="Taiwan Citizens Accused of Violating U.N. Sanctions on North Korea"
                         summary="The case comes after another Taiwanese citizen has faced accusations of conducting trade in violation of United Nations sanctions against North Korea."
                         author="CHRIS HORTON"
                         imgSource = "https://static01.nyt.com/images/2018/02/01/world/01taiwan-1/01taiwan-1-mediumThreeByTwo210.jpg"
                         storyLink = "https://www.nytimes.com/2018/02/01/technology/amazon-apple-holiday-sales.html?rref=collection%2Fsectioncollection%2Fbusiness"
                />
                <Article articleId="3"
                         date="Jan. 30, 2018"
                         title="Complaint Accuses Contractor of Underpayment at Medicare Call Centers"
                         summary="The Communications Workers of America said in a complaint filed on Friday that a large government information technology contractor could owe workers as much as $100 million in back wages."
                         author="JIM TANKERSLEY"
                         imgSource = "https://static01.nyt.com/images/2018/01/31/us/politics/31dc-wagetheft/merlin_133114271_ec906296-f6b1-42bb-b5c9-c8a8a236aa28-mediumThreeByTwo210.jpg"
                         storyLink = "https://www.nytimes.com/2018/02/01/technology/amazon-apple-holiday-sales.html?rref=collection%2Fsectioncollection%2Fbusiness"
                />
                {/*Below are the last week's original codes, which I may have too many components.*/}
                {/*<Article articleId = "1">*/}
                {/*<Date date="Jan. 31, 2018"/>*/}
                {/*<a href = "https://www.nytimes.com/2018/02/01/technology/amazon-apple-holiday-sales.html?rref=collection%2Fsectioncollection%2Fbusiness" target="_blank">*/}
                {/*<StoryLinkArea>*/}
                {/*<Content*/}
                {/*title = "Taiwan Citizens Accused of Violating U.N. Sanctions on North Korea"*/}
                {/*summary = "The case comes after another Taiwanese citizen has faced accusations of conducting trade in violation of United Nations sanctions against North Korea."*/}
                {/*author = "CHRIS HORTON"/>*/}
                {/*<Thumb imgSource="https://static01.nyt.com/images/2018/02/01/world/01taiwan-1/01taiwan-1-mediumThreeByTwo210.jpg"/>*/}
                {/*</StoryLinkArea>*/}
                {/*</a>*/}
                {/*</Article>*/}


            </div>
        );
    }
}

export default App;
