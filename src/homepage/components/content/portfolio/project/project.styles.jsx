import styled from 'styled-components';

export const PreviewContainer = styled.div`
  background-image: url(${(props) => props.thumbnail});
  background-size: 100% 100%;
  width: 50%;

  & li {
    padding: 5px;
  }
  & a p {
    margin: 0;
  }
  & li,
  a , p{
    text-align: center;
    transition: 0.1s;

    &:hover {
      text-decoration: none;
      opacity:0.8;
    }
  }
`;

export const Preview = styled.img`
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.2s;

  &:hover {
    opacity: 1;
    background-image: url(${(props) => props.gif});
  }
`;
