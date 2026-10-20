import { GlobalStyles } from '../components/GlobalStyles';
import { Header } from '../components/Header/Header';
import { PageContainer } from '../components/PageContainer/PageContainer';
import { SignInOutForm } from '../components/SignInOutForm/SignInOutForm';
import { Wrapper } from '../components/Wrapper/Wrapper';

export function SignInOutPage({ signup }) {
    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <Header showButtons={false}></Header>
                <PageContainer>
                    <SignInOutForm signup={signup}></SignInOutForm>
                </PageContainer>
            </Wrapper>
        </>
    );
}
