package com.University.Schedule.controller;


import com.University.Schedule.models.Class;
import com.University.Schedule.models.Course;
import com.University.Schedule.models.Schedule;
import com.University.Schedule.service.Schedule.ScheduleService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/schedule")
@AllArgsConstructor
public class ScheduleController {


    private ScheduleService scheduleService;

    @GetMapping("/course")
    public ResponseEntity<List<Schedule>> findByCourse(@RequestParam(name = "course_name") String group) {
        Course course = new Course();
        course.setName(group);
        List<Schedule> schedules = scheduleService.findByCourse(course);
        return new ResponseEntity<>(schedules, HttpStatus.OK);
    }

    @GetMapping("/class")
    public ResponseEntity<List<Schedule>> findByClass(@RequestParam(name = "class_name") String className) {
        Class schClass = new Class();
        schClass.setName(className);
        List<Schedule> schedules = scheduleService.findBySchClass(schClass);
        return new ResponseEntity<>(schedules, HttpStatus.OK);
    }

}
