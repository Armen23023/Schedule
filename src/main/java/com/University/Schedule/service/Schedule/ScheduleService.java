package com.University.Schedule.service.Schedule;

import com.University.Schedule.models.Class;
import com.University.Schedule.models.Course;
import com.University.Schedule.models.Schedule;
import com.University.Schedule.repository.ScheduleRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Stream;

@Service
@AllArgsConstructor
public class ScheduleService {

    private ScheduleRepository scheduleRepository;

    public List<Schedule> findByCourse(Course course) {
        return  scheduleRepository.findBySchCourse(course);
    }

    public List<Schedule> findBySchClass(Class schClass) {
        return scheduleRepository.findBySchClass(schClass);
    }
}
