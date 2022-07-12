import { Container, Content } from "./styles";
import { FaNode, FaReact, FaSass, FaJsSquare } from 'react-icons/fa'
import Image from "next/image";
export function Skills() {
  return(
    <Container>
      <h1>  Skills </h1>
      <Content>
        <div className="bg-zinc-900 flex items-center justify-center p-4 rounded-lg">
          <img src="/images/Vector.svg" alt="Vector"  />
        </div>
        <div className="bg-zinc-900 flex items-center justify-center p-4 rounded-lg">
          <img src="/images/Vector1.svg" alt="Vector"  />
        </div>
        <div className="bg-zinc-900 flex items-center justify-center p-4 rounded-lg">
          <img src="/images/Vector2.svg" alt="Vector"  />
        </div>
        <div className="bg-zinc-900 flex items-center justify-center p-4 rounded-lg">
          <img src="/images/Vector3.svg" alt="Vector"  />
        </div>
        <div className="bg-zinc-900 flex items-center justify-center p-4 rounded-lg">
          <img src="/images/Vector4.svg" alt="Vector"  />
        </div>
      </Content>
    </Container>
  )
}