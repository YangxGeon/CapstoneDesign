package dankook.capstone.oneByOne.notice.domain;

import static jakarta.persistence.GenerationType.IDENTITY;
import static lombok.AccessLevel.PROTECTED;

import dankook.capstone.oneByOne.member.domain.Member;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
@AllArgsConstructor
public class Notice {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private String title;
    private String description;

    @ManyToOne
    private Member writer;

    public Notice(final String title, final String description) {
        this.title = title;
        this.description = description;
    }

    public Notice(final String title, final String description, final Member writer) {
        this.title = title;
        this.description = description;
        this.writer = writer;
    }
}
