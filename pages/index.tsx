import React from 'react';
import Link from 'next/link';
import {NextComponentType} from 'next';
import Footer from '@/components/Footer';


const Index: NextComponentType<any> = (props) => {
  return (
    <div>
      <Link as = {`/p/${props.id}`}>
        <a>To the beyond and</a>
      </Link>
      <Footer/>
    </div>
  );
};

Index.getInitialProps = async () => {
  return {
    lasana: 'abc'
  }
}

export default Index;
