package dankook.capstone.oneByOne.member.domain;

import static jakarta.persistence.GenerationType.IDENTITY;

import jakarta.persistence.Embeddable;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class HashTag {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private HashTagName hashTagName;
}
