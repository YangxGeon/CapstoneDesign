package dankook.capstone.oneByOne.notice.controller;

import dankook.capstone.oneByOne.auth.support.AuthenticationPrincipal;
import dankook.capstone.oneByOne.notice.domain.Notice;
import dankook.capstone.oneByOne.notice.service.NoticeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class NoticeController {

    private final NoticeService noticeService;

    @PostMapping("/api/notice")
    public ResponseEntity<Void> writeNotice(@AuthenticationPrincipal String email, Notice request) {
        noticeService.write(email, request);
        return ResponseEntity.ok().build();
    }
}
