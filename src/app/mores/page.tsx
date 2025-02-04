import React from 'react';
import ProductDetail from '../component/proDetail';
import Reviews from '../component/reviews2';
import AlsoLike from '../component/alsoLike';

const Mores = () => {
  return (
    <div>
      <ProductDetail/>
      <Reviews/>
      <div className="mt-12 mb-14">
  <AlsoLike/>
  </div>
    </div>
  )
}

export default Mores
