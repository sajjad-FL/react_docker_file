/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function User() {
  const [data, setData] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    setData(data || []);
  };
  useEffect(() => {
    getUsers();
  });
  return (
    <div className='mainContainer'>
      {data?.map((user, i) => {
        const { city, street, suite, zipcode } = user.address;
        return (
          <div className='card'>
            <img
              src={`https://picsum.photos/seed/picsum/200/30${i}`}
              alt='Image'
            />
            <div className='details'>
              <h2>${user?.name}</h2>
              <p>${user?.username}</p>
            </div>
            <p id='info'>
              <h2>Address</h2>
              City: ${city} <br />
              Street: ${street}
              <br />
              Suite: ${suite}
              <br />
              Zipcode: ${zipcode}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default User;
