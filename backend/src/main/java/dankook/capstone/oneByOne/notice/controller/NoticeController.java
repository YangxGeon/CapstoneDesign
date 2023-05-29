package dankook.capstone.oneByOne.notice.controller;

import dankook.capstone.oneByOne.auth.support.AuthenticationPrincipal;
import dankook.capstone.oneByOne.notice.domain.Notice;
import dankook.capstone.oneByOne.notice.service.NoticeService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class NoticeController {

    private final NoticeService noticeService;

    @PostMapping("/api/notices")
    public ResponseEntity<Void> writeNotice(@AuthenticationPrincipal String email, Notice request) {
        noticeService.write(email, request);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/api/notices")
    public ResponseEntity<List<Notice>> getNotices(Pageable pageable) {
        final List<Notice> notices = noticeService.getNotices(pageable);
        return ResponseEntity.ok(notices);
    }
}
