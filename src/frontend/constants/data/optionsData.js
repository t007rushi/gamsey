import {
    RiPlayList2Fill,
    AiOutlineLike,
    MdOutlineWatchLater,
    RiHistoryLine,
  } from "../react-icons";

export const optionsData = [
  {
    id:1,
    Icon: <RiPlayList2Fill />,
    title: "Playlist",
    link:"/playlist"
  },
  {
    id:2,
    Icon: <AiOutlineLike />,
    title: "Liked",
    link:"/liked"
  },
  {
    id:3,
    Icon: <MdOutlineWatchLater />,
    title: "WatchLater",
    link:"/watchlater"
  },
  {
    id:4,
    Icon: <RiHistoryLine />,
    title: "History",
    link:"/history"
  },
];
