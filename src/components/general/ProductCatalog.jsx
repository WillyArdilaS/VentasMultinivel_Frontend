import ProductCard from "./ProductCard"
import { useState, useEffect } from "react";
import axios from "axios";

const ProductCatalog = ({url, regionID}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (url != '' && url != undefined) {
      setProducts([])
      axios.get(url)
      .then((res) => {
          res.data.map(item=>{
          setProducts(element => [...element, item]);
          })
      })
      .catch((err) => {
          console.log(err)
      })
    }
  }, [url])

  return (
    <article className="fixed w-10/12 h-screen top-24 right-0 px-12 overflow-y-auto">
      <section className="grid grid-cols-3 2xl:grid-cols-4 h-fit mt-24 pb-6">
        {
          products.map(product => (
            <ProductCard key={product.id} info={product} regionID={regionID}/>
          ))
        }
      </section>
    </article>
  )
}

export default ProductCatalog