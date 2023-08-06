import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "Pages/HomePage";
import EventsPage from "Pages/EventsPage";
import EventSubPage from "./EventSubPage/EventSubPage";
import EventSearchPega from "Pages/EventSearchPega";
import EventDetailsPage from "Pages/EventDetailsPage";

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>}/>
        <Route path="events" element={<EventsPage />}>
          <Route path=':id' element={<EventSubPage />}/>
        </Route >
        <Route path="search" element={<EventSearchPega />}>
          <Route path=':id' element={<EventSubPage />} />
          </Route>
          <Route path="events/:id/details" element={<EventDetailsPage />} />
          <Route path="search/:id/details" element={<EventDetailsPage />} />

      </Route>
    </Routes>
    </>
  );
};
