import styled from 'styled-components'

export const Container = styled.header `
padding: 1.3rem;
width: 100%;
z-index: 9999;
background: ${({theme}) => theme.colors.shape};
 
.toggle {
  display: none;
}


nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

 h1 {
   padding-left: 1rem;
   color: #fff;
 }

  a {
    text-decoration: none;
    color: #fff;
    transition: filter 0.5s;
    padding: .5rem;
  }

  a:hover {
    border-bottom: 2px solid ${({theme}) => theme.colors.greenDarkMode};
  }

  ul {
    display: flex;

    li {
      list-style: none;
      padding: 0 2rem;
      
    }
  }
}

@media(max-width: 700px) {
  .toggle {
    cursor: pointer;
    padding-right: 1rem;
    display: block;
  }

  margin-bottom: 4rem;
   

  nav {
    ul {
        display: none;
    }
  }
}

`

