package dankook.capstone.oneByOne.member.domain.repository;

import dankook.capstone.oneByOne.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Member findByUsername(String username);
}
