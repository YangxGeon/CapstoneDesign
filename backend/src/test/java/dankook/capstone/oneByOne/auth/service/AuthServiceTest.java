package dankook.capstone.oneByOne.auth.service;

import static org.assertj.core.api.Assertions.assertThat;

import dankook.capstone.oneByOne.member.domain.Gender;
import dankook.capstone.oneByOne.member.domain.Member;
import dankook.capstone.oneByOne.member.domain.repository.MemberRepository;
import java.time.LocalDate;
import java.util.List;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AuthServiceTest {

    @Autowired
    private AuthService authService;

    @Autowired
    private MemberRepository memberRepository;

    @DisplayName("회원가입에 성공한다.")
    @Test
    void register() {
        // given
        final Member member = new Member(
                "username", "password", "김규한",
                LocalDate.now(), Gender.M, "nickname", "email@email.com", List.of());

        // when
        authService.register(member);

        // then
        final Member foundMember = memberRepository.findAll().get(0);
        assertThat(foundMember.getUsername()).isEqualTo("username");
        assertThat(foundMember.getName()).isEqualTo("김규한");
    }
}
