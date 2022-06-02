import React from 'react';
import { getSongs } from '../Song_data';
import { Link, Outlet } from "react-router-dom";

const songs = () => {
    const songs = getSongs();

    return (
        <div>
            <h1>넷플릭스 영화 추천 목록</h1>
            <div>
                {songs.map((song) => (
                    <Link 
                        to={`/songs/${song.id}`} 
                        key={song.id} 
                        style={{ display: "block"}}>
                            {song.title}
                    </Link>
                ))}
            </div>
            <hr />
            <Outlet />
        </div>
    );
};

export default songs;