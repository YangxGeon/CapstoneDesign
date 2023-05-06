package dankook.capstone.oneByOne.member.domain;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class HashTag {

    @Id
    private Long id;

    private HashTagName hashTagName;
}
