import SideBarStatistics from '../../components/SideBarStatistics/SideBarStatistics';
import Timer from '../../components/Timer/Timer';
import Container from '../../components/Container/Container'
import ResultBox from '../../components/ResultBox/ResultBox';
import StatisticChart from '../../components/StatisticChart/StatisticChart';
const StatisticPage = () => {
    return (
        <section>
            <Container>
                <div>
                    <Timer/>
                </div>
                <div>
                    <SideBarStatistics/>
                </div>
                <ResultBox/>
                <StatisticChart/>
            </Container>
        </section>
    );
}

export default StatisticPage;