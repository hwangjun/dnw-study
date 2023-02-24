import { GetStaticProps } from 'next';

interface data {
  name: string;
  age: number;
}

function About(data: data) {
  console.log(data);
  return <div>About!!!</div>;
}

export default About;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: {
        name: 'Teepo',
        age: 28,
      },
    }, // will be passed to the page component as props
  };
};
