import {
    RiPlayList2Fill,
    AiOutlineLike,
    MdOutlineWatchLater,
    RiHistoryLine,
    MdExplore,
  } from "../react-icons";

export const optionsData = [
  {
    id:1,
    Icon: <MdExplore />,
    title: "Explore",
    link:"/explore"
  },
  {
    id:2,
    Icon: <RiPlayList2Fill />,
    title: "Playlist",
    link:"/playlist"
  },
  {
    id:3,
    Icon: <AiOutlineLike />,
    title: "Liked",
    link:"/liked"
  },
  {
    id:4,
    Icon: <MdOutlineWatchLater />,
    title: "WatchLater",
    link:"/watchlater"
  },
  {
    id:5,
    Icon: <RiHistoryLine />,
    title: "History",
    link:"/history"
  },
];
