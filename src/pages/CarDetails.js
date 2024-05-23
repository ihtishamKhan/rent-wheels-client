import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CarDetails() {
    const [car, setCar] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:9000/get-car-details/${id}`)
            .then(response => response.json())
            .then(data => {
                setCar(data.car)
            })
    }, [id])


    return (
        <div>
            {car && car._id ?
                <div className="">
                    <img className="w-full" src={car.image} alt="Display" width={500} height={100} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{car.make} {car.model}</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>


                        <p>
                            <span className="text-gray-700 text-base">Price/Day: ${car.pricePerDay}</span>
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        {car.features.map((feature, index) => (
                            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{feature}</span>
                        ))

                        }
                    </div>
                </div>
                :
                <div className="text-center bg-blue-300 m-5 p-5">Car not found</div>
            }
        </div>
    )
}

export default CarDetails