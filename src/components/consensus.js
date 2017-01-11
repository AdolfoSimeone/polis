import React from "react";
import Radium from "radium";
import _ from "lodash";
import Comment from "./comment";
import * as globals from "./globals";
import style from "../util/style";

const Consensus = ({conversation, comments, ptptCount, consensus}) => {

  const _comments = _.keyBy(comments, "tid");

  if (!conversation) {
    return <div>Loading Consensus...</div>
  }

  return (
    <div>
      <p style={{fontSize: globals.primaryHeading}}> Consensus </p>
      <p style={globals.paragraph}>
        Across all <span style={style.variable}>{ptptCount}</span> participants, there was general agreement on these comments. Either a majority (more than 60% of those who voted on the comment) agreed or disagreed, and no more than [n%] dissented. These comments were also voted on by greater than [n%] of total voters.
      </p>
      {
        consensus ? consensus.agree.map((c, i) => {
          return <Comment
            conversation={conversation}
            key={i}
            index={i}
            comment={_comments[c.tid]}
            ptptCount={ptptCount}/>
        })
        : "Loading Consensus"
      }
      {
        consensus ? consensus.disagree.map((c, i) => {
          return <Comment
            conversation={conversation}
            key={i}
            index={i}
            comment={_comments[c.tid]}
            ptptCount={ptptCount}/>
        })
        : "Loading Consensus"
      }
    </div>
  );
};

export default Consensus;
