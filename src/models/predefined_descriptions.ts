import { API } from "aws-amplify";
import { MbtiEnum } from "."

interface Description {
    display_name: string;
    mbti: { [key: string]: string };
}
async function addDescription(payload: { [x: string]: any; headers?: {}; body?: { display_name: string; mbti: { [key: string]: string; }; }; }) {
    try {
        await API.post("api", "/descriptions", payload).then((response) => {
            console.log(response);
          });
    } catch(err) {
        console.log("error creating descriptions:", err);
    }
}
export function addDescriptions() {
    descriptions.forEach((d) => {
        const payload = {
            headers: {},
            body: {
                display_name: d.display_name,
                mbti: d.mbti
            },
        };
        addDescription(payload);
    });
  }
  
export const descriptions: Description[] = [
    {
        "display_name": "극단적 단점",
        "mbti": {
            [MbtiEnum.ISTJ]: "융퉁성 제로",
            [MbtiEnum.ISTP]: "사회성 없음",
            [MbtiEnum.INFJ]: "우울증 환자 지 우울증에 심취해 있음",
            [MbtiEnum.INTJ]: "로봇",
            [MbtiEnum.ISFJ]: "가성비충",
            [MbtiEnum.ISFP]: "무색무취",
            [MbtiEnum.INFP]: "찐",
            [MbtiEnum.INTP]: "논리적인척 하는 찐",
            [MbtiEnum.ESTJ]: "꼰대",
            [MbtiEnum.ESFP]: "우유부단 나댐충",
            [MbtiEnum.ENFP]: "ADHD",
            [MbtiEnum.ENTP]: "싸움닭",
            [MbtiEnum.ESFJ]: "착한아이 콤플렉스",
            [MbtiEnum.ESTP]: "양아치",
            [MbtiEnum.ENFJ]: "내로남불",
            [MbtiEnum.ENTJ]: "자기 중심적 폭군",

        }
    },
    {
        "display_name": "유형별 팩폭",
        "mbti": {
            [MbtiEnum.ISTJ]: "틀딱",
            [MbtiEnum.ISTP]: "정신승리",
            [MbtiEnum.INFJ]: "음침 오타쿠",
            [MbtiEnum.INTJ]: "정치질",
            [MbtiEnum.ISFJ]: "소심충",
            [MbtiEnum.ISFP]: "융퉁성 제로",
            [MbtiEnum.INFP]: "찐따",
            [MbtiEnum.INTP]: "자기 합리화",
            [MbtiEnum.ESTJ]: "젊은 꼰대",
            [MbtiEnum.ESFP]: "개관종",
            [MbtiEnum.ENFP]: "머가리 꽃밭",
            [MbtiEnum.ENTP]: "쿨병 말기",
            [MbtiEnum.ESFJ]: "친목질",
            [MbtiEnum.ESTP]: "일호선 광인",
            [MbtiEnum.ENFJ]: "우유부단",
            [MbtiEnum.ENTJ]: "선민의식",
        }
    }
]