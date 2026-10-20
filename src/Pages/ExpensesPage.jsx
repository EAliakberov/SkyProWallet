import { CardsContainer } from '../components/CardsContainer/CardsContainer';
import ExpensesTable from '../components/ExpensesTable/ExpensesTable';
import { GlobalStyles } from '../components/GlobalStyles';
import { Header } from '../components/Header/Header';
import { NewExpenseForm } from '../components/NewExpenseForm/NewExpenseForm';
import { PageContainer } from '../components/PageContainer/PageContainer';
import { Wrapper } from '../components/Wrapper/Wrapper';

export function ExpensesPage() {
    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <Header showButtons={true} activePage={'ExpensesPage'}></Header>
                <PageContainer>
                    <h1 className="analysis_tittle">Мои расходы</h1>
                    <CardsContainer>
                        <ExpensesTable className="card"></ExpensesTable>

                        <NewExpenseForm></NewExpenseForm>
                    </CardsContainer>
                </PageContainer>
            </Wrapper>
        </>
    );
}
