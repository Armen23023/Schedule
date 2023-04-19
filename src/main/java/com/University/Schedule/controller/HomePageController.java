//package com.University.Schedule.controller;
//
//
//import com.University.Schedule.service.Student.StudentProfileService;
//import lombok.RequiredArgsConstructor;
//
//import org.springframework.http.MediaType;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//
//import java.util.UUID;
//
//@RestController
//@RequestMapping("/student")
////@CrossOrigin(origins = "http://localhost:3000")
//@RequiredArgsConstructor
//public class HomePageController {
//
//    private final StudentProfileService studentProfileService;
//
//
//    @GetMapping("/home")
//    public String home() {
//        return null;
//    }
//
//    @PostMapping(
//            path = "{studentProfileId}/image/download",
//            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
//            produces = MediaType.APPLICATION_JSON_VALUE
//    )
//    public void uploadStudentProfileImage(@PathVariable("studentProfileId") UUID studentProfileId,
//                                          @RequestParam("file")MultipartFile file){
//
//        studentProfileService.uploadStudentProfileImage(studentProfileId,file);
//    }
//
//
//
//}