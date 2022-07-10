import { Container, Content } from "./styles";
import { FaNode, FaReact, FaSass, FaJsSquare } from 'react-icons/fa'
export function Skills() {
  return(
    <Container>
      <h1>  Skills </h1>
      <Content>
        <div>
          <FaReact size="40px"/>
        </div>
        <div>
          <FaJsSquare size="40px"/>
        </div>
        <div>
          <FaNode size="40px"/>
        </div>
        <div>
          <FaSass size="40px"/>
        </div>
        <div>
          <FaNode size="40px"/>
        </div>
      </Content>
    </Container>
  )
}