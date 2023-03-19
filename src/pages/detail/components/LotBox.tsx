import styled from "styled-components";
import BoxLayout from "./BoxLayout";
import { Wrapper } from "../../components/Wrapper";
import { height_size, width_size } from "../../../utils/style";
import Lot from "../../../assets/lot.png";
import Button from "../../components/Button";
import IconPair from "./IconPair";

const LotBox = () => {
  return (
    <BoxLayout width={800} color="white" title="필지 탐색">
      <Wrapper direction="row" width={"full"} gap={25}>
        <LotImg src={Lot} />
        <Wrapper direction="column" width={525} gap={20}>
          <Wrapper direction="row" width={"full"} wrap={true} gap={15}>
            <IconPair title="지목" value="대" />
            <IconPair title="이용상황" value="상업용" />
            <IconPair title="용도지역" value="3종일주" />
            <IconPair title="면적(㎡)" value="7342" />
            <IconPair title="도로" value="광대한면" />
            <IconPair title="형상" value="역삼각형" />
            <IconPair title="지세" value="평지" />
            <IconPair title="공시지가(㎡)" value="24,750,000원" />
            <IconPair
              title="토지이용계획"
              value="가로구역벽 최고높이 제한지역(포함), 가로구역별 최고높이(저촉), 도로(접함), 대공방어협조구역(포함), 상대보호구역(포함), 도시지역(포함), 제3종일반주거지역(저촉), 일반상업지역(저초), 과밀억제권역(포함), 건축선(저촉)"
            />
          </Wrapper>

          <LotButtons />
        </Wrapper>
      </Wrapper>
    </BoxLayout>
  );
};
export default LotBox;

const LotImg = styled.img`
  width: ${width_size(210)};
  height: ${height_size(210)};

  object-fit: cover;
`;

const LotButtons = () => {
  return (
    <Wrapper direction="row" gap={10}>
      <Button
        width={172}
        height={30}
        radius={10}
        color="purpleLight"
        textOption={{
          text: "토지이용계획 자세히보기",
          weight: "regular",
          size: 11,
          color: "black",
        }}
      />
      <Button
        width={172}
        height={30}
        radius={10}
        color="purpleLight"
        textOption={{
          text: "도시계획도면 자세히보기",
          weight: "regular",
          size: 11,
          color: "black",
        }}
      />
    </Wrapper>
  );
};