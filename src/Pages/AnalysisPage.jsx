
import Calendar from '../components/Calendar/Calendar';
import { CardsContainer } from '../components/CardsContainer/CardsContainer';
import { Diagram } from '../components/Diagram/Diagram';
import { GlobalStyles } from '../components/GlobalStyles';
import { Header } from '../components/Header/Header';
import { PageContainer } from '../components/PageContainer/PageContainer';
import { Wrapper } from '../components/Wrapper/Wrapper';

export function AnalysisPage() {
    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <Header showButtons={true} activePage={'AnalisysPage'}></Header>
                <PageContainer>
                    <h1 className="analysis_tittle">Мои расходы</h1>
                    <CardsContainer>
                        <Calendar></Calendar>
                        <Diagram></Diagram>
                    </CardsContainer>
                </PageContainer>
            </Wrapper>
        </>
    );
}
