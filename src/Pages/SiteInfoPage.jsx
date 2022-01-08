import React from "react"
import { CenteredFullPageFlexContainer, NewTab } from '../ReusableComponents'

function SiteInfoPage(props) {
    return (
        <div className="site-info-page">
            <CenteredFullPageFlexContainer>
                <h1 className="text-white mb-5 px-2">
                    About This Site
                </h1>
                <p className="about-me-paragraph text-black py-3 lg:py-5">This site is a <NewTab href="https://reactjs.org/">React</NewTab> app. I got my first taste of React from <span className="italic">ECS 162: Web Programming</span>, a course I took at UC Davis during Spring Quarter 2021. React blew my mind. I'm never going back to vanilla JavaScript.</p>

                <p className="about-me-paragraph py-3 lg:py-5">To put this site together, I enlisted the help of <NewTab href="https://vitejs.dev/">vitejs</NewTab>, <NewTab href="https://reactrouter.com/">react-router-dom</NewTab>, <NewTab href="https://github.com/ajwann/svg-loaders-react">svg-loaders-react</NewTab>, <NewTab href="https://reactcommunity.org/react-transition-group/">react-transition-group</NewTab>, <NewTab href="https://react-spring.io/">react-spring</NewTab>, and <NewTab href="https://tailwindcss.com/">tailwindcss</NewTab>. I'm using <NewTab href="https://firebase.google.com/products/hosting">Firebase Hosting</NewTab> to deliver this site to the world.
                </p>

                <p className="about-me-paragraph text-black py-3 lg:py-5">Building the foundation of this site took me a few weeks of on-and-off work throughout the summer of 2021. Much of it was spent teaching myself how to use the technologies listed above. I struggled a lot with react-spring in particular, spending hours staring at my laptop screen in the dark cabin of an airplane wondering what was going wrong. Programming is confusing.</p>

                <p className="about-me-paragraph py-3 lg:py-5">I still like to update the site a little every now and then. Whenever I notice an optimization that could be done, I do it, time permitting. Maintaining this site is fun. Really fun! I get to assemble and preserve a massive, beautiful, complex digital creation, one with my signature on it, with many intricate parts all functioning together perfectly, available all over the world, and all I need is a chair and a laptop. And most importantly, it's something I made myself. It's my creation. It feels good to create, you know.</p>
                <div className="flex flex-col items-center justify-center mt-28 text-xs 2xl:text-sm">
                    <div>
                        <NewTab href="https://icons8.com/icon/83195/menu">
                            mobile hamburger menu icon © Icons8
                        </NewTab>
                    </div>
                    <div>
                        <NewTab href="https://iconmonstr.com">
                            twitter, youtube, email icons © 2021 iconmonstr
                        </NewTab>
                    </div>
                </div>
            </CenteredFullPageFlexContainer>
        </div>
    )
}

export default SiteInfoPage