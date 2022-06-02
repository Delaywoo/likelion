import React, { useState } from 'react';

// 참고: https://bongbongdang.tistory.com/62

const Second = () => {
    let [music, setMusic] = useState(["I've - Love Dive","(G)-Idle - Tomboy","Le Sserafim - FEARLESS"]);

    function ChangeFirstSong() {
        var musicArray = [...music];
        musicArray[0] = "Asepa - Next Level";
        setMusic(musicArray);
    }
    
    return (
        <div>
            <h1>[ 2번 ]</h1>
            <h2>저의 최애 곡들을 소개합니다!</h2>
            <ul>
                <li>{music[0]}</li>
                <li>{music[1]}</li>
                <li>{music[2]}</li>
            </ul>

            <button className='numberBtn' onClick={ChangeFirstSong}>곡 변경</button>

        </div>
    );
};

export default Second;