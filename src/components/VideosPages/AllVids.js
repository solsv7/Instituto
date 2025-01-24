import React, { useEffect, useState } from "react";
import transition from "../../transition";
import './AllVids.css';
import axios from "axios";

const AllVids = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/all-vids');
                setVideos(response.data);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };
        fetchVideos();
    }, []);
    const getEmbedURL = (url) => {
        const videoIdMatch = url.match(/(?:\?v=|\/embed\/|youtu\.be\/)([^#&?]*).*/);
        return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
    };

    return (
        <div className="Contenido-Videos">
            <h1>Todos los Videos</h1>
            <div className="separador-videos">
            {videos.map((vids) => (
                <div key={vids.id_video}>
                    <h3 className="titulos">{vids.titulo}</h3>
                    <iframe 
                        src={getEmbedURL(vids.url)}
                        title={vids.titulo}
                        allowFullScreen
                    />
                </div>
            ))}
            </div>
        </div>
    );
};

export default transition(AllVids);

