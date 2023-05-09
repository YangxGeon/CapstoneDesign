package dankook.capstone.oneByOne.auth.service;

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
}
