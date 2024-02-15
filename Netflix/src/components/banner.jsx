export const Banner = () => {
    
    return (
        <div className="w-full h-96 relative">
            <img src={banner} alt
                ="banner" className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                <h1 className="text-4xl font-bold">The Witcher</h1>
                <div className="flex flex-row gap-4">
                    <button className="btn">Play</button>
                    <button className="btn">My List</button>
                </div>
                <p className="text-lg">Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.</p>
            </div>
        </div>
    );
}
