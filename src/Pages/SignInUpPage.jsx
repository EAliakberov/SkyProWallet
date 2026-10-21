import { GlobalStyles } from '../components/GlobalStyles';
import { Header } from '../components/Header/Header';
import { PageContainer } from '../components/PageContainer/PageContainer';
import { SignInUpForm } from '../components/SignInUpForm/SignInUpForm';
import { Wrapper } from '../components/Wrapper/Wrapper';

export function SignInUpPage({ signup = false }) {
    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <Header showButtons={false}></Header>
                <PageContainer>
                    <SignInUpForm signup={signup}></SignInUpForm>
                </PageContainer>
            </Wrapper>
        </>
    );
}
