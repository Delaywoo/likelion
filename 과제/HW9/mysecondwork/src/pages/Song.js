import React from 'react';
import { useParams } from 'react-router-dom';
import { getSong } from  "./Song_data";

const Song = () => {

    const params = useParams();
    console.log(params);

    const song = getSong(parseInt(params.songID));
    return (
        <div>
            상세페이지 입니다.
        </div>
    );
};

export default Song;