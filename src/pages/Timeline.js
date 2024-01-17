import TimelineNode from "../components/TimelineNode";
import TimelineTitle from "../components/TimelineTitle";
import TimelineContainer from "../components/TimelineContainer";
import TimelineSubtitle from "../components/TimelineSubtitle";

// Import for all the timeline styling.
import 'react-vertical-timeline-component/style.min.css';
import References from "../components/References";

function Timeline() {
    return <>
        <h1>The Cuban Revolution</h1>

        <TimelineContainer>
            <TimelineNode date="1990-1995">
                <TimelineTitle>This is a title.</TimelineTitle>
                <TimelineSubtitle>And this is a subtitle.</TimelineSubtitle>
                <p>Some other text...</p>
            </TimelineNode>

            <TimelineNode date="">
                <TimelineTitle>Platt Amendment</TimelineTitle>
                <TimelineSubtitle>And this is a subtitle.</TimelineSubtitle>
            </TimelineNode>

            <TimelineNode date="">
                <TimelineTitle>Estrada Palma's administration</TimelineTitle>
            </TimelineNode>

            <TimelineNode date="">
                <TimelineTitle>United States Withdrawal</TimelineTitle>
            </TimelineNode>

            <TimelineNode date="">
                <TimelineTitle>Corruption in Cuba</TimelineTitle>
            </TimelineNode>

            <TimelineNode date="">
                <TimelineTitle>The rise of Fidel Castro</TimelineTitle>
            </TimelineNode>

            <TimelineNode date="">
                <TimelineTitle>The revolution</TimelineTitle>
            </TimelineNode>
        </TimelineContainer>

        <References/>
    </>
}

export default Timeline;