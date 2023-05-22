package dankook.capstone.oneByOne.notice.service;

import dankook.capstone.oneByOne.member.domain.Member;
import dankook.capstone.oneByOne.member.domain.repository.MemberRepository;
import dankook.capstone.oneByOne.notice.domain.Notice;
import dankook.capstone.oneByOne.notice.domain.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class NoticeService {

    private final NoticeRepository noticeRepository;
    private final MemberRepository memberRepository;

    public void write(final String email, final Notice request) {
        final Member foundMember = memberRepository.findByEmail(email);
        noticeRepository.save(new Notice(request.getTitle(), request.getDescription(), foundMember));
    }
}
