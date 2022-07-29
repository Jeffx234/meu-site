import { Container, Content } from './styles'
import { FaNode, FaReact, FaSass, FaJsSquare } from 'react-icons/fa'
import Image from 'next/image'
export function Skills() {
  return (
    <Container>
      <h1 className="text-slate-100"> Skills </h1>
      <Content>
        <div className="bg-zinc-900 flex items-center justify-center p-8 rounded-lg">
          <Image src="/images/Vector.svg" alt="Zinc" width={100} height={100} />
        </div>
        <div className="bg-zinc-900 flex items-center justify-center p-4 rounded-lg">
          <Image
            src="/images/Vector1.svg"
            alt="Zinc"
            width={100}
            height={100}
          />
        </div>
        <div className="bg-zinc-900 flex items-center justify-center p-4 rounded-lg">
          <Image
            src="/images/Vector2.svg"
            alt="Zinc"
            width={100}
            height={100}
          />
        </div>
        <div className="bg-zinc-900 flex items-center justify-center p-4 rounded-lg">
          <Image
            src="/images/Vector3.svg"
            alt="Zinc"
            width={100}
            height={100}
          />
        </div>
        <div className="bg-zinc-900 flex items-center justify-center p-4 rounded-lg">
          <Image
            src="/images/Vector4.svg"
            alt="Zinc"
            width={100}
            height={100}
          />
        </div>
      </Content>
    </Container>
  )
}
