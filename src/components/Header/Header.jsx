import { Link } from 'react-router-dom';
import { SHeader, SLink } from './Header.styled';
import { useContext } from 'react';
import { UserContext } from '../../context/contextAPI';

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
    const { logOut } = useContext(UserContext);

    function handleExitClick(e) {
        logOut();
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
                    <button className="button exit-button" onClick={handleExitClick}>
                        {' '}
                        Выйти
                    </button>
                ) : null}
            </div>
        </SHeader>
    );
}
