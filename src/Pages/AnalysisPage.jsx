import ExpensesTable from '../components/ExpensesTable/ExpensesTable';
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
                    <ExpensesTable className="card"></ExpensesTable>
                </PageContainer>
            </Wrapper>
        </>
    );
}
