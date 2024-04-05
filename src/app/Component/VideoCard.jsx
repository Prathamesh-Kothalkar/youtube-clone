"use client"
export default function VideoCard(props){
    return(
        <>
            <div className="m-4 cursor-pointer">
           <img src={props.thumbnail} className="rounded-xl" alt="" />
           <div className="grid grid-cols-12">
             <div className="col-span-2 w-10 h-10 mt-5 ml-5 lg:ml-0 ">
             <img src="/logo.jpg" className="rounded-full overflow-hidden" alt="" />
             </div>
             <div className="col-span-10 mt-3">
                <div className="text ">
                    {props.description} 
                </div>
                <div className="text text-slate-500 text-xs mt-1">
                    {props.title}
                </div>
                <div className="text-slate-500 text-xs mt-1">
                    4.3K views |{props.timestamp}
                </div>
             </div>
           </div>
           </div>
        </>
    )
}