package com.University.Schedule.service;

import com.University.Schedule.repository.token.Token;
import com.University.Schedule.repository.token.TokenRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ConfirmationTokenService {

    private final TokenRepository confirmationTokenRepository;

    public void saveConfirmationToken(Token token) {
        confirmationTokenRepository.save(token);
    }

    public Optional<Token> getToken(String token) {
        return confirmationTokenRepository.findByToken(token);
    }

    public int setConfirmedAt(String token) {
        return confirmationTokenRepository.updateConfirmedAt(
                token, LocalDateTime.now());
    }


}
