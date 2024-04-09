import React, { useState } from 'react'
import { useEffect } from 'react'
import Product from './Product'
import './UseEffect.css'

const Effect = () => {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getProduct()
    }, [])

    

    const getProduct = async () => {
        setLoading(true)
        try {
            let data = await fetch('https://fakestoreapi.com/products')
            let resp = await data.json()
            // console.log(resp);
            setResult(resp)
            setLoading(false)
            
        } catch{
            (err)=>{
            return console.log(err);
        }
            
        }

    }


  return (
    <>
        {
            loading ? <p className='load'>Chill abeg, e dey load...</p> :  <div className='theProductContainer'>

      {
        result.map((show)=>{
            return(
                <Product key={show.id} title={show.title} description={show.description} category={show.category} price={show.price} image={show.image}></Product>
            )
        })
        
        }
      
    </div>
        }
    </>
  )

}

export default Effect
