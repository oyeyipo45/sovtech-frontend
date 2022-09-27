import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { PersonResponse, PageFilter } from '../@types';
import Loader from '../components/Loader';


const GET_PEOPLE = gql`
  query People($filter: PageFilter) {
    getPeople(filter: $filter) {
      data {
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`;

export const useGetPosts = (): any | undefined => {
  let { loading, data } = useQuery<any, PageFilter>(GET_PEOPLE, { variables: { page: 3 } });
  
    return {loading, data :  data?.getPeople?.data};
}


const Home = () => {
  // let {loading,  data  } = useQuery<any, PageFilter>(GET_PEOPLE, { variables: { page: 3 } });

  const {loading,data: desData} = useGetPosts()
  

  return (
    <>
      {loading && <Loader />}
      {desData &&
        desData?.map((data: any, index: any) => (
          <div key={index}>
            <p>Name: {data.name}</p>
            <p>
              Gender: <span>{data.gender}</span>
            </p>
            <p>
              Mass: <span>{data.mass}</span>
            </p>
            <p>
              Height: <span>{data.height}</span>
            </p>
            <p>
              Mass: <span>{data.mass}</span>
            </p>
          </div>
        ))}
    </>
  );
};

export default Home;
