import Text from "./Text"

interface ICard{
    flag:string,
    link:string,
    country:string,
    population: string,
    region:string,
    capital: string,
}

const Card = ({
    flag,
    link,
    country,
    population,
    region,
    capital,
}:ICard ) => {

    const data = [
        {
            category :'Population: ',
            value : population
        },
        {
            category :'Region: ',
            value : region
        },
        {
            category :'Capital: ',
            value : capital
        },
    ];

    return (
        <a href={link}> 
            <div className="w-full bg-white shadow-md dark:bg-gray-700 rounded-md overflow-hidden">
                {/* flag */}
                <div className="">
                    <div className="h-32 overflow-hidden bg-slate-500">
                        <div className="aspect-w-16 aspect-h-9 max-h-5">
                            <img
                                className="object-contain w-full h-full"
                                src={flag}
                                alt="country flag"
                            />
                        </div>
                    </div>
                </div>
                {/* description */}
                <div className="px-8 pt-4 pb-10">
                    <h1 className="text-lg font-semibold mb-3">{country}</h1>
                    <div className="">
                        {
                            data.map( (elem, i:number) => {
                                return (
                                    <Text 
                                        key={i} 
                                        category={elem.category} 
                                        value={elem.value} 
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Card;