import SideBarStatistics from '../../components/SideBarStatistics/SideBarStatistics';
import Timer from '../../components/Timer/Timer';
import Container from '../../components/Container/Container'
import ResultBox from '../../components/ResultBox/ResultBox';
import StatisticChart from '../../components/StatisticChart/StatisticChart';
import style from './StatisticPage.module.css';
import Booklist from '../../components/BookList/Booklist';

const StatisticPage = () => {

    return (
        <section>
            <Container>
                <div className={style.grids}>
                    <div className={style.gridsTimer}>
                        <Timer/>
                    </div>
                    <div className={style.gridsSideBar}>
                        <SideBarStatistics/>
                    </div>
                    <div className={style.gridsBookList}>
                        <Booklist/>  
                    </div>
                    <div className={style.gridsChart}>
                        <StatisticChart/>
                    </div>
                    <div className={style.gridsResultBox}>
                        <ResultBox/>
                    </div>
                </div>

            </Container>
        </section>
    );
}

export default StatisticPage;