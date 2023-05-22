package dankook.capstone.oneByOne.auth.service;

import dankook.capstone.oneByOne.auth.service.dto.LoginRequest;
import dankook.capstone.oneByOne.auth.service.dto.TokenResponse;
import dankook.capstone.oneByOne.auth.support.JwtTokenProvider;
import dankook.capstone.oneByOne.member.domain.Member;
import dankook.capstone.oneByOne.member.domain.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthService {

    private final MemberRepository memberRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @Transactional(readOnly = true)
    public TokenResponse login(LoginRequest request) {
        final Member foundMember = memberRepository.findByUsername(request.getUsername());
        if (request.getPassword() != foundMember.getPassword()) {
            throw new IllegalArgumentException("로그인 정보 불일치");
        }

        final String token = jwtTokenProvider.createToken(foundMember.getEmail());
        return new TokenResponse(token);
    }

    public TokenResponse register(Member member) {
        final Member savedMember = memberRepository.save(member);

        final String token = jwtTokenProvider.createToken(savedMember.getEmail());
        return new TokenResponse(token);
    }
}
