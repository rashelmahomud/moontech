import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../compornents/ProductCart';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])


  const state = useSelector((state) => state)

  const activeClass = "text-white  bg-indigo-500 border-white";


  return (

    <div>

      <div className='mb-10 flex justify-end gap-5'>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
        >
          In Stock
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          AMD
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          Intel
        </button>
      </div>



      <div className='grid lg:grid-cols-3 mg:grid-cols-2 grid-cols-1 gap-10 my-10 p-5'>

        {
          products.map(product => <ProductCard key={product._id} product={product} />)
        }
      </div>
    </div>
  );
};

export default Products;