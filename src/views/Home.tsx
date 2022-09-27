import React from 'react';
import { Person } from '../@types';
import Loader from '../components/Loader';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useGetPeople } from '../hooks/getPeople';
import Pagination from '../components/Pagination';

export const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  padding: 1.5rem 1rem;
  margin-top: 2rem;
  width: 13rem;
  border-radius: 0.5rem;
  background-color: white;
  @media only screen and (max-width: 600px) {
    padding: 1.5rem 0.5rem;
    margin-top: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  margin: 0;
  margin-bottom: 8px;
  color: #b26c10;
  a {
    color: #b26c10;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const SubTitle = styled.h1`
  font-size: 14px;
  margin: 0;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: #b26c10;
  opacity: 0.6;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Row = styled.h2`
  font-size: 14px;
  font-weight: semi-bold;
  margin: 0;
  padding: 2px 0;
  span {
    font-weight: normal;
    margin-left: 10px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const HomeWorldList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.5rem;
`;

const Home = () => {
  const location = useLocation();

  let pageNumber = Number(location?.search?.split('=')[1]) || 1;

  const { loading, data } = useGetPeople(pageNumber);

  return (
    <>
      {loading && <Loader />}
      {data?.data.length > 0 && <Pagination count={data?.page?.total} page={pageNumber} />}
      {data &&
        data?.data?.map((person: Person, index: any) => (
          <Link className='link' to={`/details/${person.name}`} key={index}>
            <Container>
              <Title>Name: {person.name}</Title>
              <Title>
                Gender: <span>{person.gender}</span>
              </Title>
              <Title>
                Mass: <span>{person.mass}</span>
              </Title>
              <Title>
                Height: <span>{person.height}</span>
              </Title>
              <Title>
                Mass: <span>{person.mass}</span>
              </Title>
            </Container>
          </Link>
        ))}
    </>
  );
};

export default Home;
