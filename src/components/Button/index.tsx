import { Container } from "./styles";

interface IProps {
  title: string;
  image?: any;
}

export function Button( {title, image}: IProps ) {
  return (
    <Container type="button">
      <div className="button-img">
        <div className='img'>
          { image }
        </div>
        <div className="title">
          { title }
        </div>
      </div>
    </Container>
  )
}