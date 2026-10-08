import { GlobalStyles } from '../components/GlobalStyles';
import { Header } from '../components/Header/Header';
import { Wrapper } from '../components/Wrapper/Wrapper';

export function ExpensesPage() {
    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <Header showButtons={true} activePage={'ExpensesPage'}></Header>
            </Wrapper>
        </>
    );
}
