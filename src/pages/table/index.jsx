import Head from 'next/head';
import { MdEditSquare } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import Link from 'next/link';

async function getData() {
    const res = await fetch('http://localhost:3000/api/allUser')
//   const res = await fetch('https://jsonplaceholder.typicode.com/comments', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//   });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default function ({ data }) {
    console.log(data)
  return (
    <>
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.css" rel="stylesheet" />
      </Head>

      {/* {data.map((item) => (
        <div key={item.id}>
          <h1>Name: {item.name}</h1>
          <h1>Email: {item.email}</h1>
        </div>
      ))} */}

      <div className="mt-14 mx-4">
        <Link href="/">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Add User
          </button>
        </Link>
      </div>

      <div className="my-10 mx-4">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>



              {data.map((item)=>
              
              
              <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item._id}
                </th>
                <td className="px-6 py-4">{item.fname}</td>
                <td className="px-6 py-4">{item.lname}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.gender}</td>
                <td className="flex items-center px-6 py-4">
                  <a href="#" className="link-dark">
                    <AiFillDelete style={{ color: 'red', fontSize: '1.8rem' }} />
                  </a>
                  <a href="#" className="link-dark">
                    <MdEditSquare style={{ color: 'green', fontSize: '1.8rem' }} />
                  </a>
                </td>
              </tr>
              )
}


            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getData();
  return {
    props: {
      data: data.savedUser,
    },
  };
}
