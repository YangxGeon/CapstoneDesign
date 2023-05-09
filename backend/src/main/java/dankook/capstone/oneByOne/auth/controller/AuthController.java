package dankook.capstone.oneByOne.auth.controller;

import dankook.capstone.oneByOne.auth.service.AuthService;
import dankook.capstone.oneByOne.auth.service.dto.LoginRequest;
import dankook.capstone.oneByOne.member.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/auth/register")
    public void register(@RequestBody Member member) {
        authService.register(member);
    }

    @PostMapping("/auth/login")
    public void register(@RequestBody LoginRequest request) {
        authService.login(request);
    }
}
