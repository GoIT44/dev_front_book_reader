import SideBarStatistics from '../../components/SideBarStatistics/SideBarStatistics';
import Timer from '../../components/Timer/Timer';
import Container from '../../components/Container/Container'
import ResultBox from '../../components/ResultBox/ResultBox';
import StatisticChart from '../../components/StatisticChart/StatisticChart';
import { flexbox } from '@mui/system';
const StatisticPage = () => {
    const style = {
        width: 866,
        height: 214,

      }
      const styles = {
          display: "flex",
      }
    return (
        <section>
            <Container>
                <div style={styles}>

                    <Timer/>
                
                
                    <SideBarStatistics/>
                
                <div style={style}></div>
                </div>
                
            </Container>
            <Container>
                <StatisticChart/>
                <ResultBox/>
            </Container>
        </section>
    );
}

export default StatisticPage;