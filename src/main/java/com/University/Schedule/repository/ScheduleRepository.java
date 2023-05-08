package com.University.Schedule.repository;

import com.University.Schedule.models.Class;
import com.University.Schedule.models.Course;
import com.University.Schedule.models.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface ScheduleRepository extends JpaRepository<Schedule,Integer> {

    List<Schedule> findBySchClass(Class sch_class);

    List<Schedule> findBySchCourse(Course sch_course);



}
