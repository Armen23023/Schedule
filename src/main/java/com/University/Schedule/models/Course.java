package com.University.Schedule.models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDate;
import java.time.Year;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "course")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    @Column(name = "id")
    private int id;

    @Column(name = "course_name")
    private String name;

    @Column
    private Integer year;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private Set<Class> classes;

    @ManyToMany(mappedBy = "classes")
    private Set<Student> students;
}
