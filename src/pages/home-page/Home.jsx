import { Feature } from "./feature/Feature";
import { Subject } from "./subject/Subject";
import { useLocation } from "react-router-dom";
import { HomeHeader } from "./HomeHeader";
import { useEffect } from "react";
import { CourseCounter } from "./feature/CourseCounter";
import { LearnSkills } from "./feature/LearnSkills";
import { Learner } from "./subject/Learner";
import { Video } from "./subject/Video";
import { NextStep } from "./subject/NextStep";

export const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <HomeHeader />
      <Feature />
      <CourseCounter />
      <LearnSkills />
      <Subject />
      <Learner />
      <Video />
      <NextStep />
    </>
  );
};
