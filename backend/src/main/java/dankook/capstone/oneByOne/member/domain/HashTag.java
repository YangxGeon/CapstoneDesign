package dankook.capstone.oneByOne.member.domain;

import jakarta.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class HashTag {

    private HashTagName hashTagName;
}
