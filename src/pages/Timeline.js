import TimelineNode from "../components/TimelineNode";
import TimelineTitle from "../components/TimelineTitle";
import TimelineContainer from "../components/TimelineContainer";

// Import for all the timeline styling.
import 'react-vertical-timeline-component/style.min.css';
import References from "../components/References";
import Container from "../components/Container"

function Timeline() {
    return <>
        <Container centered={true}>
            <h1>The Cuban Revolution</h1>
            <p>Aidan Grant-Ushinsky</p>
        </Container>

        <TimelineContainer>
            <TimelineNode date="1901" colour="rgb(33, 33, 120)">
                <TimelineTitle>Platt Amendment</TimelineTitle>
                <p>
                    The amendment stipulated the conditions for the withdrawal of the U.S. following the Spanish-American War. It required that Cuba would not transfer
                    land to any power other than the U.S. and the naval base, Guantánamo Bay must be handed over to the United States.
                    On the 1901, the articles were incorporated in the constitution. Upon the removal of U.S. troops, Cuba became a republic. ("Platt Amendment")
                </p>

                <p>
                    The Cuban people viewed the admendment as an infringement of their sovereignty ("Platt Amendment").
                </p>
            </TimelineNode>

            <TimelineNode date="1905-1906" colour="rgb(33, 33, 120)">
                <TimelineTitle>Estrada Palma's administration</TimelineTitle>
                <p>
                    Palma planned to implement progressive policies, however he was plagued by instability. Upon being accused of rigging the election,
                    and commiting pension fraud and failure to deliver on his promises, a revolution was triggered forcing him to resign ("Cuban Revolution").
                </p>
                <p>
                    Given the struggling economy, the proletariat is beginning to see how the hierarchy enables those in power to do as they please to benefit themselves, in this case, fraud.
                    Marx believed that when material conditions reached a tipping point, an inevitable revolution from the proletariat would occur ("Marxian communism").
                </p>
            </TimelineNode>

            <TimelineNode date="1913-1921" colour="rgb(33, 33, 120)">
                <TimelineTitle>Corruption in Cuba</TimelineTitle>
                <p>
                    Menocal's government made material progress, however new charges of government corruption came with it and accusations of nepotism.
                    Menocal later secured his reelection through the means of fraud and violence ("Cuban Revolution").  
                </p>
                <p>
                    Again, we see how the bourgeoisie created corruption, and had a general disregard for the proletariat. Marx believed that a materialistic conception
                    of history would cause the system to eventually be replaced by communism ("Marxian communism").
                </p>
            </TimelineNode>

            <TimelineNode date="1953" colour="rgb(33, 33, 120)">
                <TimelineTitle>The rise of Fidel Castro</TimelineTitle>
                <p>
                    Throughout Fidel Castro's time as a student, he participated in numerous revolutionary activities. In 1952, he was the candidate for the
                    people's party, however Batista's coup stopped the election. In 1953, Castro led 160 men in an unsuccessful raid hoping to spark an uprising against
                    Batista's dictatorship. Castro was arrested, but later received amnesty leading him to organize a force in Mexico ("Cuban Revolution") ("Fulgencio Batista").
                </p>
            </TimelineNode>

            <TimelineNode date="1956-1957" colour="rgb(90, 33, 33)">
                <TimelineTitle>The revolution</TimelineTitle>
                <p>
                    Castro returned to Cuba in 1956, with 81 men, but most of his force were quickly captured or killed. He started a guerilla campaign
                    in the mountains to overthrow Batista's dictatorship and start a revolution. At this time, Cuba was in a civil war between the
                    Revolutionary Directorate and a group of insurrectionists. Trade unionists attempted to promote a general strrike, however the government 
                    would take measures to suppress it ("Cuban Revolution").
                </p>
                <p>
                    Breaking strikes in order to gain political influence is a crucial detail when looking from the Marxist perspective. The power 
                    to establish influence in this manner is a representation of strict hierarchy, being used as a means of oppressing the people. 
                </p>
            </TimelineNode>

            <TimelineNode date="1958" colour="rgb(90, 33, 33)">
                <TimelineTitle>A successful implementation of Marxism</TimelineTitle>
                <p>
                    Castro led raids and destruction of property throughout his revolution, causing economic instability ("Cuban Revolution"). 
                    Marx believed that poor material conditions would lead to a revolution, Castro's revolution goes inline with his thinking. With the growing pessure
                    and weakness of his army, he ceded power, making Manuel Urrutia Lleó president, and Fidel Castro prime minister ("Cuban Revolution").
                </p>
                <p>
                    Castro successfully overthrew the government to begin implementing his social reforms, with the goal of benefitting the poorer 
                    people of Cuba.
                </p>
            </TimelineNode>

            <TimelineNode date="1959" colour="rgb(90, 33, 33)">
                <TimelineTitle>Land Ownership</TimelineTitle>
                <p>
                    Castro implemented a program of expropriation of all landholdings exceeding 4km², forced lending and heavier taxation ("Cuban Revolution").
                    These policies had the common goal of helping those who are less fortunate, and stopping the accumulation of wealth. Castro's government
                    put an emphasis on social programs and the redistribution of wealth, with the end goal of establishing a socialist state.
                </p>
            </TimelineNode>

            <TimelineNode date="1959" colour="rgb(33, 90, 33)">
                <TimelineTitle>Healthcare</TimelineTitle>
                <p>
                    Cuba began nationalizing healthcare during the post-revolution period 1959-1970. Cubans today have access to high quality, free healthcare in the public sector,
                    with privatization being forbidden (De Vos).
                </p>
                <p>
                    Within the context of Marxism, the implementation of nationalized healthcare is crucial because no one is left behind and healthcare is 
                    viewed a human right, such as in Cuba. In Karl Marx's 1875 Critique of the Gotha Programme, he said "From each according to his ability, to each according to his needs," 
                    which is why we see socialist movements bringing free healthcare to the population. This famous quote is the essence of Marxism, 
                    making sure everyones needs will be met, including healthcare.
                </p>
            </TimelineNode>

            <TimelineNode date="1961" colour="rgb(33, 90, 33)">
                <TimelineTitle>Education</TimelineTitle>
                <p>
                    Literacy is important to education, and with Cuba having a literacy rate of only 60%-76%, the Cuban Literacy Campaign was launched to combat this issue.
                    Around a quarter of a million volunteers, comprising of mostly young women set out to teach reading and writing skills. The program was extremely successful, with in over a little over a year
                    almost the entire population was literate (Seara Rey). 
                </p>
            </TimelineNode>

        </TimelineContainer>

        <References/>
    </>
}

export default Timeline;