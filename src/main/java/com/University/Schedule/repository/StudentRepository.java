package com.University.Schedule.repository;

import com.University.Schedule.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student,Integer> {
    Optional<Student> findByEmail(String email);
    @Transactional
    @Modifying
    @Query("UPDATE Student a " +
            "SET a.enabled = TRUE WHERE a.email = ?1")

    int enableAppUser(String email);
}
