import { Container, Content } from './styles'

import Image from 'next/image'

import { SubTitle } from '../../../styles/globals'

export function Skills() {
  return (
    <Container id="skills">
      <SubTitle id="skills">Skills</SubTitle>

      <Content>
        <div className="bg-zinc-900 flex items-center justify-center p-8 rounded-lg">
          <Image src="/svg/js.svg" alt="Zinc" width={100} height={100} />
        </div>

        <div className="bg-zinc-900 flex items-center justify-center p-4 rounded-lg">
          <Image src="/svg/react.svg" alt="Zinc" width={100} height={100} />
        </div>

        <div className="bg-zinc-900 flex items-center justify-center p-4 rounded-lg">
          <Image
            src="/svg/reactnative.svg"
            alt="Zinc"
            width={100}
            height={100}
          />
        </div>

        <div className="bg-zinc-900 flex items-center justify-center p-4 rounded-lg">
          <Image src="/svg/nextjs.svg" alt="Zinc" width={100} height={100} />
        </div>

        <div className="bg-zinc-900 flex items-center justify-center p-4 rounded-lg">
          <Image src="/svg/nodejs.svg" alt="Zinc" width={100} height={100} />
        </div>

        <div className="bg-zinc-900 flex items-center justify-center p-4 rounded-lg">
          <Image
            src="/svg/typescript.svg"
            alt="Zinc"
            width={100}
            height={100}
          />
        </div>

        <div className="bg-zinc-900 flex items-center justify-center p-4 rounded-lg">
          <Image src="/svg/linux2.svg" alt="Zinc" width={100} height={100} />
        </div>

        <div className="bg-zinc-900 h-44 flex items-center justify-center p-4 rounded-lg">
          <Image src="/svg/aws.svg" alt="Zinc" width={100} height={100} />
        </div>
      </Content>
    </Container>
  )
}
