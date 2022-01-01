import React from "react"
import { CenteredFullPageFlexContainer, SiteConstructionBanner } from '../ReusableComponents'

function ContactPage(props) {
   return (
      <div className="find-me-page">
         <CenteredFullPageFlexContainer>
            <SiteConstructionBanner />
            <h1 className="mb-5 px-2 text-white">
               Contact
            </h1>
            <div className="text-center py-5 px-2 text-base md:text-lg">
               I'm not really on social media. It's better that way. But if you must, leave me a message or a comment on either of these platforms and I'll get back to you within the month, maybe.
            </div>
            <div className="grid grid-cols-3 grid-rows-5">
               <div className="row-start-2 col-start-2 flex flex-row items-center justify-center">
                  <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/raidsrc" className=" hover:opacity-60 active:opacity-40">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  </a>
                  <span className="px-4 text-lg font-semibold text-white">@raidsrc</span>
               </div>
               <div className="row-start-4 col-start-2 flex flex-row items-center justify-center">
                  <a target="_blank" rel="noreferrer noopener" href="https://youtube.com/c/raidsrc" className=" hover:opacity-60 active:opacity-40">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                  </a>
                  <span className="px-4 text-lg font-semibold text-white">/c/raidsrc</span>
               </div>
            </div>
            <div className="text-center py-5 px-2 text-base md:text-lg">
               Alternatively, you could email me at the address below. Only if it's urgent.
            </div>
            <div className="grid grid-cols-3 grid-rows-6">
               <div className="row-start-2 col-start-2 flex flex-row items-center justify-center">
                  <a href="mailto:rsrchen@ucdavis.edu" className=" hover:opacity-60 active:opacity-40">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" /></svg>
                  </a>
                  <span className="px-4 text-lg font-semibold text-white col-start-2">rsrchen@ucdavis.edu</span></div>
            </div>
         </CenteredFullPageFlexContainer>
      </div>
   )
}

export default ContactPage