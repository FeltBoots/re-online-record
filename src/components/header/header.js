import React from "react";
import { connect } from 'react-redux';
import './header.css';

const Header = ({ loading }) => {

  const spinnerClass = loading ? 'loading' : null;

  return (
    <header className="header">
      <a href="#" className="header-logo">
        <div className={`header-logo__spinner ${spinnerClass}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <circle r="15" cx="16" cy="16"></circle>
          </svg>
        </div>
      </a>
      <h3>Онлайн запись</h3>
    </header>
  )
};

const mapStateToProps = ({ data: { loading } }) => {
  return { loading };
};

export default connect(mapStateToProps, null)(Header);
