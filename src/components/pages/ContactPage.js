import ContactButton from "../ContactButton"
import ContactDetail from "../ContactDetail"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faExpand, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import SideHeader from "./SideHeader"
library.add(fab, faExpand, faWindowClose)

const ContactPage = () => {
    return (
        <>
            {/* <PageHeader title="Contact" positionMiddle={false} /> */}
            <main className="content" id="contact-page">
                <div className="contact-platforms">
                    <h2>You can find me on these platforms</h2>

                    <div className="platforms">
                        <ContactButton
                            brand="github"
                            link="https://github.com/avi-mukesh"
                        />
                        <ContactButton
                            brand="linkedin"
                            link="https://www.linkedin.com/in/avi-mukesh/"
                        />
                        <ContactButton
                            brand="instagram"
                            link="https://www.instagram.com/avimu_photo/"
                        />
                    </div>
                </div>
                <div className="side contact-details">
                    <SideHeader title="Contact" />
                    <div className="details">
                        <ContactDetail
                            title="Phone number"
                            value="07447655785"
                        />
                        <ContactDetail
                            title="Email "
                            value="avimukesh10@gmail.com"
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export default ContactPage
