import React from "react"
import { CenteredFullPageFlexContainer, SiteConstructionBanner } from '../ReusableComponents'

function LinksPage(props) {
    return (
       <div className="links-page">
          <CenteredFullPageFlexContainer>
             <SiteConstructionBanner />
             <h1 className="mb-5 px-2">
                Links to Projects & Work
             </h1>
             {/* <h2 className="mb-4 px-2 pt-4"></h2> */}
             <div className="mb-20">
                <p className="about-me-paragraph">An online portfolio of essays and blog posts I wrote for <span className="italic">UWP 101Y - Advanced Composition</span>. In this body of work, I investigate the history, geography, and circumstances of two urban redevelopment schemes in the San Francisco Bay Area and examine how money, location, and collective civic action have shaped the outcomes of both projects.</p>
 
                <p className="about-me-paragraph text-black">A fitness-tracking web application I developed for <span className="italic">ECS 162 - Web Programming</span>. This application supports Google sign-in using OAuth 2.0, logging of past and future activity, and data visualization of recorded progress.</p>
 
                <p className="about-me-paragraph">My final project for <span className="italic">ECS 162 - Web Programming</span>; a web application I developed for the exhibit <span className="italic">Education Should Be Free</span> at the Manetti Shrem Museum at the University of California, Davis. Use this web application to estimate the cost of education at various public universities in California using data drawn from the U.S. Department of Education's College Scorecard.</p>
 
                <p className="about-me-paragraph text-black">A video about a procedure I devised for transforming Super Smash Bros. Melee inputs into music. This mechanism works with any valid Slippi replay file (.slp) and outputs MIDI notes with millisecond-perfect temporal precision.</p>
 
                <p className="about-me-paragraph">The website for Virovek, a Hayward-based gene therapy company. I played a major role in debugging the website's stylesheets. It's built on WordPress, which I'm not very familiar with, but I managed to work my magic all the same. </p>
 
                <p className="about-me-paragraph text-black">A lecture on Super Smash Bros. Melee that I presented for <span className="italic">CTS 172 - Metagaming</span>, a course all about "examining the community histories and material practices that have evolved alongside videogames as a mass medium, cultural commodity, and digital technology." This class just might be one of the most enjoyable university courses I've ever taken.</p>
 
                <p className="about-me-paragraph">A webpage I designed on my own, just for fun. I wanted to try my hand at designing a sleek, beautiful, majestic, responsive, super sick cool-ass webpage. This is the result of that work.</p>
                {
                   // include uwp101y, tractivity, shop til you drop, slippi sampler, a cool sick design showcase, virovek.com
                }
             </div>
 
             <h1 className="mt-5 mb-5 px-2">
                Links to Site Subdomains
             </h1>
             <div className="mb-20">
                <p className="about-me-paragraph">The obligatory "blog section" of my website. I really don't plan on writing much here. But setting this subdomain up gave me an excuse to learn Jekyll and deploy a statically-generated blog.
                   <br />blog.raidsrc.me </p>
 
                <p className="about-me-paragraph text-black">
                   A subdomain of my site that's more of an experimental design sandbox than anything else.
                   <br />raid.raidsrc.me</p>
             </div>
          </CenteredFullPageFlexContainer>
       </div >
    )
 }

 export default LinksPage