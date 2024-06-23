import React, { useEffect, useState } from 'react'
import SummeryApi from '../common'

const Cart = () => {

    const [data, setData] = useState([])

    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        const response = await fetch(SummeryApi.addToCartProductView.url, {
            method: SummeryApi.addToCartProductView.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            }
        })
        // setLoading(false)
        const json = await response.json()


        if (json.success) {
            setData(json.data)
        }

    }



    useEffect(() => {

        fetchData()


    }, [])


    console.log(data)





    return (
        <div className='container mx-auto '>

            <div className='text-center text-lg my-3'>
                {
                    data.length === 0 && !loading && (
                        <p className='bg-white my-5'>No Data</p>
                    )
                }

            </div>

            <div>
                {/* view product */}
                <div>
                    {
                        loading ? (
                            <div className='bg-slate-200 h-32 w-full my-1  border border-slate-300 rounded'>

                            </div>

                        ) : (
                            <div>

                            </div>
                        )
                    }
                </div>


            </div>



        </div>
    )
}

export default Cart