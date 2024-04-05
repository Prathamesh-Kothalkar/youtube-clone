"use client"
import { VIDEOS } from "../video";
import VideoCard from "./VideoCard";

export default  function VideoLayout(){
    const videos=VIDEOS;
    return(
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                videos.map((v)=>{
                    return(
                      <VideoCard thumbnail={v.thumbnail} description={v.description} title={v.title} timestamp={v.timestamp}/>
                    )
                })
            }
            </div>
        </>
    )
}