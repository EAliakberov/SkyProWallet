import { GlobalStyles } from '../components/GlobalStyles';
import { Header } from '../components/Header/Header';
import { SignInOutForm } from '../components/SignInOutForm/SignInOutForm';
import { Wrapper } from '../components/Wrapper/Wrapper';

export function SignInOutPage() {
    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <Header></Header>
                <SignInOutForm></SignInOutForm>
            </Wrapper>
        </>
    );
}
