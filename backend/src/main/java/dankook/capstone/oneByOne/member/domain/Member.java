package dankook.capstone.oneByOne.member.domain;

import static jakarta.persistence.GenerationType.IDENTITY;
import static lombok.AccessLevel.PROTECTED;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
@AllArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String name;
    private LocalDate birthday;
    private Gender gender;
    private String nickname;
    private String email;

    @ElementCollection
    @CollectionTable(name = "hashtag", joinColumns = @JoinColumn(name = "hashtag_id"))
    private List<HashTag> hashTags = new ArrayList<>();

    public Member(final String username, final String password, final String name, final LocalDate birthday,
                  final Gender gender, final String nickname,
                  final String email, final List<HashTag> hashTags) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.nickname = nickname;
        this.email = email;
        this.hashTags = hashTags;
    }
}
