import React from 'react';
import Marquee from './Marquee';
import './css/App.css';

export default class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            content:[],
            currIndex:1,
            currTitle:'Services'
        }
    }

    componentDidMount(){
        fetch('https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json')
           .then(response=> response.json())
           .then(result => this.setState({content: result.pages}));
    }

    render(){
        
        //mapping of the title to its index in the context array for easy acess.
        const GetIndex = {
            'Industries':0,
            'Services':1,
            'About Us':2 
        }

        const {currTitle, currIndex, content} = this.state;

        //make sure that content is not empty. 
        let imageSrc = content.length>0? content[currIndex].blocks[0].background: '';
        let headline = content.length>0? content[currIndex].blocks[0].headline: '';
        let subhead = content.length>0? content[currIndex].blocks[0].subhead:'';
        let cta = content.length>0? content[currIndex].blocks[0].cta:'';

        return(
            <div className = 'container' 
                style={{  backgroundImage: `url(/${imageSrc})`, backgroundSize: 'cover',minWidth:'100vw',
                minHeight:'100vh' }}
            >
                {/* className name lets me know which element form the menu is active so can change color of text */}
                <div className = 'Layout-ui'>
                    <ul className="menu">
                        <li className = {currTitle === 'Industries'? 'active': ''}
                            onClick={()=> this.setState({currTitle:'Industries', currIndex:GetIndex['Industries']})}>
                            Industries
                        </li>
                        <li className ={currTitle === 'Services'? 'active': ''}
                            onClick={()=> this.setState({currTitle:'Services', currIndex:GetIndex['Services']})}>
                            Services
                        </li>
                        <li className ={currTitle === 'About Us'? 'active': ''}
                            onClick={()=> this.setState({currTitle:'About Us', currIndex:GetIndex['About Us']})}>
                            About Us
                        </li>
                    </ul>
                    <button>
                        Contact Us
                    </button>
                </div>

                <Marquee Headline = {headline} Subhead = {subhead} cta = {cta}/>

            </div>
        );
    }
}