import { Link } from 'react-router-dom';
import { SHeader, SLink } from './Header.styled';

function HeaderLink({ disabled, children, ...props }) {
    function handleClick(e) {
        if (disabled) {
            e.preventDefault();
        }
    }

    return (
        <SLink {...props} onClick={handleClick} $disabled={disabled}>
            {children}
        </SLink>
    );
}


export function Header({ showButtons, activePage }) {
    function handleExitClick(e) {
        e.preventDefault();
    }
    return (
        <SHeader>
            <div className="header-container">
                <Link to="/">
                    <img className="header_logo" src="src\assets\WalletLogo.svg" alt="" />
                </Link>
                {showButtons ? (
                    <div className="header_buttons-container">
                        <HeaderLink
                            to="/expenses"
                            className="button"
                            disabled={activePage === 'ExpensesPage'}
                        >
                            Мои расходы
                        </HeaderLink>
                        <HeaderLink
                            to="/analysis"
                            className="button"
                            disabled={activePage === 'AnalisysPage'}
                        >
                            Анализ расходов
                        </HeaderLink>
                    </div>
                ) : null}
                {showButtons ? (
                    <HeaderLink className="button exit-button" onClick={handleExitClick} to="/signout">
                        {' '}
                        Выйти
                    </HeaderLink>
                ) : null}
            </div>
        </SHeader>
    );
}
