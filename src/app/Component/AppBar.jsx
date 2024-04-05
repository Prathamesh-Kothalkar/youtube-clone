import SearchBar from "./SearchBar";

export default function AppBar(){
    return (
        <>
        <div className="flex justify-around">
            <div className="y">
                <img src="/youtube.jpg" className="w-auto h-20 object-cover " alt="" />
            </div>
            <div className="mt-4 invisible sm:visible md:visible">
                <SearchBar/>
            </div>
            <div className="mt-7">
                <button>Login</button>
            </div>
        </div>        
        </>
    )
}