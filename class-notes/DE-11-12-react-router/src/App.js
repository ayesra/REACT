import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Teacher from './pages/Teacher';
import CourseCard from './pages/CourseCard'
import ContactForm from './pages/ContactForm';
import NotFound from './pages/NotFound';
import CardDetails from './pages/CardDetails';
import TeacherDetails from './pages/TeacherDetails';

const App = () => {
  return (
    <div>
      <Router>
        <MyNavbar />

        <Routes>
          {/* "/"" (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu
         "/"" başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip olması gerekir . */}
          {/* "/courses/:name"--->böyle bir yolda yani':' kisim bir degisken belirtir,yani name=HtTML veya =CSS gibi  */}
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacher/:id" element={<TeacherDetails/>}/>
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/courses/:name" element={<CardDetails/>}/>
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App