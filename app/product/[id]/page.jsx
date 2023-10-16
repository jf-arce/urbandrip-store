"use client"
import { ButtonAddToCart } from '@/components/ButtonAddToCart';
import { stock } from '@/db/stock';
import { useEffect, useState } from 'react';
import {BsPatchCheck, BsBoxSeam} from 'react-icons/bs';


export default function Product({params}) {
    const {id} = params;
    const [product, setProduct] = useState({});

    useEffect(() => {
        const prod = stock.find(prod => prod.id.toString() === id);
        setProduct(prod);
    }, [id])
  return (
    <div>
        <div className='h-52 bg-black text-white flex justify-center items-end text-2xl'>
            <h1 className='uppercase m-5'>{product.category}</h1>
        </div>
        <div className='flex px-32 py-10 w-full gap-10'>
            <img src={product.image} alt="" className='w-[800px] object-cover max-h-[800px]'/>
            <div className='flex flex-col gap-5 flex-grow'>
                <div className='flex flex-col gap-5 after:h-[1.5px] after:w-full after:bg-[#00000025] after:mb-4'>
                    <div className='flex gap-2 items-center'>
                        <BsPatchCheck/>
                        <p className='capitalize'>{product.brand}</p>
                    </div>
                    <h2 className='font-bold text-2xl'>{product.title}</h2>
                    <p className='font-bold text-lg'>${product.price}</p>
                </div>
                <div className=''>
                    <ButtonAddToCart prod={product}/>
                </div>
                <div className='flex flex-col gap-5 py-5 text-sm'>
                    <div>
                        <div className='flex gap-2 items-center'>
                            <BsBoxSeam/> 
                            <h4>¡ENVÍO A TODO EL PAÍS!</h4>
                        </div>
                        <p>¡Compra Hoy! y recibí tu pedido entre 3 a 7 días hábiles</p>
                    </div>
                    <div>
                        <h4>¡CAMBIOS Y DEVOLUCIONES!</h4>
                        <p>Tenés 15 días ¡No importa el motivo!</p>
                    </div>
                    <div>
                        <h4>GARANTÍA DE FABRICACIÓN</h4>
                        <p>Somos tienda oficial ¡Estás cubierto!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
