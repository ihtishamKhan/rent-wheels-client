import React from 'react'

function Card({ car }) {
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={car.image} alt="Display" width={500} height={300} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{car.make} {car.model}</div>
                    <p className="text-gray-700 text-base">
                        {car.description}
                    </p>
                    <p>
                        <span className="text-gray-700 text-base">Price/Day: ${car.pricePerDay}</span>
                    </p>
                </div>
                <div className="px-6 py-4">
                    {car.features.map((feature, index) => (
                        // only show 2 with number of features
                        (index < 2) ? (<span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{feature}</span>)
                            :
                            index === 2 && (<span key={index} className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">+{car.features.length - 2} more</span>)
                    ))

                    }
                </div>
            </div>
        </div>
    )
}

export default Card