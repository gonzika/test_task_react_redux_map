import { Link } from "react-router-dom";
import styled from "styled-components";
import { itemsList } from "../app/configs";
import { Button } from "../components/Button";

export const Home = () => (
  <div>
    <StyledTitle>Datasets</StyledTitle>
    <StyledList>
      {itemsList.map(item => (
        <li key={item.id}>
          <div className="datasets__left">
            <img src={`https://picsum.photos/seed/${item.id}/200/300`} alt="Photo" />
            <div>Type: {item.type}</div>
          </div>
          <div>
            <h2>{item.title}</h2>
            <div>Last update: </div>
            <div>{new Date().toUTCString()}</div>
          </div>

          <StyledLink to={item.url}>
            <Button primary style={{}}>OPEN</Button>
          </StyledLink>
        </li>
      ))}
    </StyledList>
  </div>
);



const StyledLink = styled(Link)`
  position: absolute;
  bottom: 10px;
  right: 20px;
  @media(max-width: 400px) {
    position: initial;
    order: -1;
  }
`

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.color.black};
  font-size: 2.5em;
  text-align: center;
  padding-top: 20px;
`;

const StyledList = styled.ul`
  color: ${({ theme }) => theme.color.black};
  display: flex;
  list-style-type: none;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  li {
    position: relative;
    padding: 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    gap: 20px;
    max-width: 400px;
    flex-wrap: wrap-reverse;

    @media(max-width: 400px) {
      justify-content: center;
      text-align: center;
    }
  }
  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    object-fit: fill;
    margin-bottom: 10px;
  }

  .datasets__left {
    text-align: center;
  }
`;