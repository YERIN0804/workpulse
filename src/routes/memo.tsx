import { styled } from "styled-components";
import PostMemoForm from "../components/post-memo-form";
import Timeline from "../components/timeline";

const Wrapper = styled.div`
  display: flex;
  gap: 100px;
//   overflow-y:scroll;
  gird-template-rows: 1fr 5fr;
  padding: 20px;
`;

export default function Memo(){
    return (
        <Wrapper>
            <Timeline/>
            <PostMemoForm/>
        </Wrapper>
        
    );
}