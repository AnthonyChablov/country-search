
interface ICard{
    flag:string,
    country:string,
    population: string,
    region:string,
    capital: string,
}

const Card = ({
    flag,
    country,
    population,
    region,
    capital
}:ICard ) => {

    return (
        <div className="w-full bg-white shadow-md dark:bg-gray-700 rounded-md overflow-hidden">
            {/* flag */}
            <div className="">
                <div className="h-44 bg-slate-500">

                </div>
            </div>
            {/* description */}
            <div className="px-8 py-8">
                <h1 className="text-lg font-semibold mb-3">{country}</h1>
                <div className="">
                    <span className=" flex"><p>Population: </p> <p className="text-slate-400">{population}</p></span>
                    <span className=" flex"><p>Region: </p> <p className="text-slate-400">{region}</p></span>
                    <span className=" flex"><p>Capital: </p> <p className="text-slate-400">{capital}</p></span>
                </div>
            </div>
        </div>
    )
}

export default Card;