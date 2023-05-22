package dankook.capstone.oneByOne.notice.service;

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

    public void write(final Notice request) {
        noticeRepository.save(request);
    }
}
