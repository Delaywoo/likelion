let songs = [
    {
        id: 1,
        title: "That That(prod. & feat. SUGA of BTS)",
        singer: "싸이(PSY)"
    },
    {
        id: 2,
        title: "Tomboy",
        singer: "(여자)아이들"
    },
    {
        id: 3,
        title: "LOVE DIVE",
        singer: "IVE (아이브)"
    },
    {
        id: 4,
        title: "사랑인가 봐",
        singer: "멜로망스"
    },
];

export function getSongs() {
    return songs;
}

export function getSong(id) {
    return songs.find((song) => song.id === id);
}