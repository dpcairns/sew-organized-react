import React, { Component } from 'react'
import Nav from './Nav.js';
import Header from './Header.js';

export default class About extends Component {
    render() {
        const header = "About the Developers";
        return (
            <div className="componentContainer">
                <Header header={header} />
                <Nav />
                <div className='aboutDiv'>
                    {/* <h2 id='aboutDevs' textAlign='center'>About the Developers</h2> */}
                    <ul className='aboutUL'>
                        <div className="devBox">
                            <li className='aboutLI' id='aboutChelsea'>
                                <img src="chelsea.jpeg" alt='chelsea' height="200" width="200"></img>
                                <h3>Chelsea</h3>
                            </li>
                            <p className='aboutText'>Chelsea Spangler loves to code, knit, crochet, make dumb jokes, and invent cocktails.</p>
                            <div className="social-media-links">
                                <a href="https://www.linkedin.com/in/chelseanspangler/" target="_blank">
                                    <img src="li_black.png" className="linked"></img>
                                </a>
                                <a href="https://github.com/CNSpangler" target="_blank">
                                    <img src="GitHub-Mark-30px-plus.png"></img>
                                </a>
                            </div>
                        </div>
                        <div className="devBox">
                        <li className='aboutLI' id='aboutDakota'>
                            <img src="dakota.jpeg" alt='dakota' height="200" width="200"></img>
                            <h3>Dakota</h3>
                        </li>
                        <p className='aboutText'>Dakota Druley is a creative problem solver who dances, paints, and attempts to amuse those around her.</p>
                        <div className="social-media-links">
                                <a href="https://www.linkedin.com/in/dakota-druley/" target="_blank">
                                    <img src="li_black.png" className="linked"></img>
                                </a>
                                <a href="https://github.com/dakotadruley" target="_blank">
                                    <img src="GitHub-Mark-30px-plus.png"></img>
                                </a>
                            </div>
                        </div>
                        <div className="devBox">
                            <li className='aboutLI' id='aboutDannie'>
                                <img src="dannie.jpeg" alt='dannie' height="200" width="200"></img>
                                <h3>Dannie</h3>
                            </li>
                            <p className='aboutText'>Dannie Schumaker makes beautiful and useful things with needles, hooks, words and code. </p>
                            <div className="social-media-links">
                                <a href="https://www.linkedin.com/in/dannieschumaker/" target="_blank">
                                    <img src="li_black.png" className="linked"></img>
                                </a>
                                <a href="https://github.com/DannieSchu" target="_blank">
                                    <img src="GitHub-Mark-30px-plus.png"></img>
                                </a>
                            </div>
                        </div>
                        <div className="devBox">
                            <li className='aboutLI' id='aboutJanelle'>  
                                <img src="janelle.jpeg" alt='janelle' height="200" width="200"></img>
                                <h3>Janelle</h3>
                            </li>
                            <p className='aboutText'>Janelle Mellor is an avid hiker, kombucha brewer, and sourdough baker.</p>
                            <div className="social-media-links">
                                <a href="https://www.linkedin.com/in/janellemellor/" target="_blank">
                                    <img src="li_black.png" className="linked"></img>
                                </a>
                                <a href="https://github.com/janellemellor" target="_blank">
                                    <img src="GitHub-Mark-30px-plus.png"></img>
                                </a>
                            </div>
                        </div>
                        <div className="devBox">
                            <li className='aboutLI' id='aboutJenna'>
                                <img src="jenna.jpeg" alt='jenna' height="200" width="200"></img>
                                <h3>Jenna</h3>
                            </li>
                            <p className='aboutText'>Jenna Goldman is a full-stack developer who also loves crafting, baking, and looking at cute animal videos on the internet.</p>
                            <div className="social-media-links">
                                <a href="https://www.linkedin.com/in/jennagoldman/" target="_blank" className="linked" >
                                    <img src="li_black.png" className="linked"></img>
                                </a>
                                <a href="https://github.com/jennagoldman" target="_blank">
                                    <img src="GitHub-Mark-30px-plus.png"></img>
                                </a>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}
