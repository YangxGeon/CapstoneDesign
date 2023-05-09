package dankook.capstone.oneByOne.auth.controller;

import dankook.capstone.oneByOne.auth.service.AuthService;
import dankook.capstone.oneByOne.auth.service.dto.LoginRequest;
import dankook.capstone.oneByOne.member.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/auth/register")
    public ResponseEntity<Void> register(@RequestBody Member member) {
        authService.register(member);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/auth/login")
    public ResponseEntity<Void> register(@RequestBody LoginRequest request) {
        authService.login(request);
        return ResponseEntity.ok().build();
    }
}
