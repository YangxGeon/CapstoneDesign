package dankook.capstone.oneByOne.member.domain;

import static lombok.AccessLevel.PROTECTED;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = PROTECTED)
@AllArgsConstructor
public class Member {

    @Id
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
}
