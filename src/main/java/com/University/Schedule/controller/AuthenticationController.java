package com.University.Schedule.controller;

import com.University.Schedule.config.JwtService;
import com.University.Schedule.dto.request.AuthenticationRequest;
import com.University.Schedule.dto.request.RegisterRequest;
import com.University.Schedule.dto.response.AuthenticationResponse;
import com.University.Schedule.models.Student;
import com.University.Schedule.service.AuthenticationService;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authenticate")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    private final JwtService jwtService;

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody final RegisterRequest request
    ){
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody final AuthenticationRequest request
    ){
        return authenticationService.authenticate(request);
    }


    @GetMapping("/validate")
    public ResponseEntity<?> validateToken(@RequestParam String token, @AuthenticationPrincipal Student student){
        try {
            boolean isTokenValid = jwtService.isTokenValid(token, student);
            return ResponseEntity.ok(isTokenValid);
        }catch (ExpiredJwtException e){
            return ResponseEntity.ok(false);
        }

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
