package dankook.capstone.oneByOne.auth.service;

import dankook.capstone.oneByOne.auth.service.dto.LoginRequest;
import dankook.capstone.oneByOne.member.domain.Member;
import dankook.capstone.oneByOne.member.domain.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final MemberRepository memberRepository;

    public void register(Member member) {
        memberRepository.save(member);
    }

    public void login(LoginRequest request) {
        Member foundMember = memberRepository.findByUsername(request.getUsername());
        if (request.getUsername() != foundMember.getUsername()){
            throw new IllegalArgumentException("로그인 정보 불일치");
        }
    }

}
