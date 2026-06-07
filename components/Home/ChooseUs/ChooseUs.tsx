import Container from "@/components/global/container"
import TextContent from "./textContent"
import ChoosePoints from "./ChoosePoints"

const ChooseUs = () => {
  return (
    <Container className="grid md:grid-cols-2 space-y-6 py-10">
          <TextContent />
          <ChoosePoints/>
    </Container>
  )
}

export default ChooseUs
