import Container from "../global/container"
import FooterContent from "./footerContent"
import LinkList from "./linkList"
import ServiceList from "./serviceList"


const Footer = () => {
  return (
      <Container className="border-t-2 border-muted py-6 grid md:grid-cols-4 gap-y-6">
          <FooterContent />
          <LinkList/>
          <ServiceList/>
    </Container>
  )
}

export default Footer
