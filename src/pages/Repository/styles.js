import styled from 'styled-components';

export const Loading = styled.div`
    color: #FFF;
    font-size: 30px;
    font-family: 'Lato';
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 120px;
        margin-top: 20px;
        border-radius: 50%;
    }

    h1 {
        font-size: 25px;
        font-family: 'Lato';
        margin-top: 10px;
    }

    h3 {
        font-size: 20px;
        font-family: 'Lato';
        margin-top:10px;

        svg {
            margin-left: 5px;
        }
    }

    p {
    margin-top: 5px;
    font-size: 14px;
    font-family: 'Lato';
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }

`;

export const BackPage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    svg {
            margin-right: 10px;
        }
`;

export const IssueList = styled.ul`
  padding-top: 15px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    &:hover {
        background: #c1bebe;
    }

    & + li {
      margin-top: 10px;
    }
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }
    div {
      flex: 1;
      margin-left: 15px;
      strong {
        font-size: 16px;
        a {
          text-decoration: none;
          font-family: 'Lato';
          color: #333;
          &:hover {
            color: #2ae4b9;
          }
        }
        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Lato';
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        font-family: 'Lato';
        color: #999;
      }
    }
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  button {
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    margin: 0 0.25rem;
    &:nth-child(${props => props.active + 1}) {
      background: #31ecc1;
      color: white;
    }
  }
`;

export const PageActions = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  button {
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
