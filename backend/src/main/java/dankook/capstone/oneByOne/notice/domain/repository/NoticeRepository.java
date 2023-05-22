package dankook.capstone.oneByOne.notice.domain.repository;

import dankook.capstone.oneByOne.notice.domain.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
}
