package com.University.Schedule.controller;

import com.University.Schedule.dto.request.AuthenticationRequest;
import com.University.Schedule.dto.request.RegisterRequest;
import com.University.Schedule.dto.response.AuthenticationResponse;
import com.University.Schedule.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody final RegisterRequest request
    ){
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody final AuthenticationRequest request
    ){
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @GetMapping("/confirm")
    public String viewConfirmPage(@RequestParam("token") String token) {
        String verification = authenticationService.confirmToken(token);
        if (verification.equals("expired")) {
            return "emailfaild";
        }
        return "emailSuccess";
    }

}
