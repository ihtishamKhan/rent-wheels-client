import React, { useEffect, useState } from 'react'
import Hero from "../components/Hero"
import { Link } from 'react-router-dom'
import Card from '../components/Card'

function Home() {
    const [cars, setCars] = useState([])
    const [noOfCars, setNoOfCars] = useState(0)


    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/cars`)
            .then(response => response.json())
            .then(data => {
                setNoOfCars(data.no_of_cars)
                setCars(data.cars)
            })
    }, [])

    return (
        <div>
            <Hero />

            <div className="mt-10 mb-8">
                <h3 className="text-3xl mt-10">Popular Cars ({noOfCars})</h3>
            </div>

            <div className="flex flex-wrap justify-around">
                {cars.map(car => (
                    <div key={car.id} className="sm:w-full md:w-2/3 lg:w-1/3 mb-10 flex justify-center">
                        <Link to={`/car-details/${car._id}`}>
                            <Card car={car} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home