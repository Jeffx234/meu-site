import { Container, Content } from './styles'
import Image from 'next/image'
import { SubTitle } from '../../../styles/globals'
export function Skills() {
  return (
    <Container>
      <SubTitle id="skills">Skills</SubTitle>
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
