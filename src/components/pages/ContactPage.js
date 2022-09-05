import ContactButton from "../ContactButton"
import ContactDetail from "../ContactDetail"
import PageHeader from "./PageHeader"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab)

const ContactPage = () => {
    return (
        <>
            {/* <PageHeader title="Contact" positionMiddle={false} /> */}
            <main className="content" id="contact-page">
                <div className="contact-platforms">
                    <h2>You can find me on these platforms</h2>

                    <ContactButton brand="github" />
                    <ContactButton brand="linkedin" />
                    <ContactButton brand="instagram" />
                </div>
                <div className="side contact-details">
                    <ContactDetail title="Phone number" value="07447655785" />
                    <ContactDetail
                        title="Email "
                        value="avimukesh10@gmail.com"
                    />
                </div>
            </main>
        </>
    )
}

export default ContactPage
