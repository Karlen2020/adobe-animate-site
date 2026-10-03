import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import VideoLessons from "../pages/VideoLessons";
import LessonDetail from "../pages/LessonDetail";
import Practice from "../pages/Practice";
import PracticeTask from "../pages/PracticeTask";
import Quiz from "../pages/Quiz";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/lessons" element={<VideoLessons />} />
        <Route path="/lessons/:slug" element={<LessonDetail />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/tasks/:taskId" element={<PracticeTask />} />
        <Route path="/practice/quizzes/:quizId" element={<Quiz />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
