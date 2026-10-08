import { GlobalStyles } from '../components/GlobalStyles';
import { Header } from '../components/Header/Header';
import { SignInOutForm } from '../components/SignInOutForm/SignInOutForm';
import { Wrapper } from '../components/Wrapper/Wrapper';

export function SignInOutPage({ signup }) {
    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <Header showButtons={false}></Header>
                <SignInOutForm signup={signup}></SignInOutForm>
            </Wrapper>
        </>
    );
}
