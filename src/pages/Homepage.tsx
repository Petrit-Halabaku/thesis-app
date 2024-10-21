import React, { useEffect, useState } from "react";
// import axios from "axios";
import { YoutubeIcon, Music2 } from "lucide-react";
import { faker } from "@faker-js/faker";

interface Event {
  id: string;
  title: string;
  platform: "youtube" | "tiktok";
  thumbnailUrl: string;
  startTime: string;
}

const Homepage: React.FC = () => {
  // const [events, setEvents] = useState<Event[]>([]);
  // const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [musicList, setMusicList] = useState<
    { song: string; artist: string; album: string }[]
  >([]);

  useEffect(() => {
    // Generate an array of fake music items
    const generateMusicData = () => {
      const musicItems = [];
      for (let i = 0; i < 50; i++) {
        musicItems.push({
          song: faker.music.songName(),
          artist: faker.person.fullName(),
          album: faker.music.genre(),
        });
      }
      setMusicList(musicItems);
      setLoading(false);
    };

    generateMusicData();
  }, []);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       setLoading(true);
  //       // const response = await axios.get<Event[]>("/api/events");
  //       const response = await axios.get("");
  //       if (Array.isArray(response.data)) {
  //         setEvents(response.data);
  //       } else {
  //         console.error("API did not return an array:", response.data);
  //         setError(
  //           "An error occurred while fetching events. Please try again later."
  //         );
  //       }
  //     } catch (error) {
  //       console.error("Error fetching events:", error);
  //       setError(
  //         "An error occurred while fetching events. Please try again later."
  //       );
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchEvents();
  // }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-2xl font-bold text-gray-600">Loading...</div>
      </div>
    );
  }

  // if (error) {
  //   return (
  //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  //       <div className="bg-white p-8 rounded-lg shadow-md">
  //         <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
  //         <p className="text-gray-700">{error}</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <>
      {musicList.length === 0 ? (
        // {events.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">
          No live events available at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* {events.map((event) => ( */}
          {musicList.map((event) => (
            // <div
            //   key={event.id}
            //   className="bg-white overflow-hidden shadow rounded-lg"
            // >
            //   <img
            //     className="h-48 w-full object-cover"
            //     src={event.thumbnailUrl}
            //     alt={event.title}
            //   />
            //   <div className="p-4">
            //     <h3 className="text-lg font-medium text-gray-900">
            //       {event.title}
            //     </h3>
            //     <p className="mt-1 text-sm text-gray-500">
            //       Starts at: {new Date(event.startTime).toLocaleString()}
            //     </p>
            //     <div className="mt-2 flex items-center">
            //       {event.platform === "youtube" ? (
            //         <YoutubeIcon className="h-5 w-5 text-red-600" />
            //       ) : (
            //         <Music2 className="h-5 w-5 text-pink-500" />
            //       )}
            //       <span className="ml-1 text-sm text-gray-500 capitalize">
            //         {event.platform}
            //       </span>
            //     </div>
            //   </div>
            // </div>
            <div className="bg-white overflow-hidden shadow rounded-lg p-5">
              <p className="text-lg font-medium text-gray-900">
                Song:{event.song}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Artist:{event.artist}
              </p>
              <p className="mt-1 text-sm text-gray-500">Album:{event.album}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Homepage;
