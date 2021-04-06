import React from 'react';
import './css/UserInfo.css';
import './css/cta.css';


export default function Marquee(props){
    return(
        <div className = "page-ui"> 
            <div className = 'user-info'>
                <div className = 'headline'>
                    {props.Headline}
                </div>
                <div className = 'subhead'>
                    {props.Subhead}
                </div>
            </div>
            <div className = 'cta-container'>
                <div className = 'cta-context'>
                    {props.cta}
                </div>
                <div className = 'lets-talk'>
                    LET'S TALK.
                </div>
            </div>
       </div>
    );
}