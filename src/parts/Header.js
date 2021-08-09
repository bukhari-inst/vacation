import React from 'react';
import Button from 'elements/Button';
import BrandIcon from 'parts/IconText';

export default function Header(props) {
  // menentukan navbar yang sedang aktif
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? ' active' : '';
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li
                className={`nav-item align-self-center${getNavLinkClass('/')}`}
              >
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li
                className={`nav-item align-self-center${getNavLinkClass(
                  '/browse-by'
                )}`}
              >
                <Button className="nav-link" type="link" href="/browse-by">
                  Browse By
                </Button>
              </li>
              <li
                className={`nav-item align-self-center${getNavLinkClass(
                  '/stories'
                )}`}
              >
                <Button className="nav-link" type="link" href="stories">
                  Stories
                </Button>
              </li>
              <li
                className={`nav-item align-self-center${getNavLinkClass(
                  '/agents'
                )}`}
              >
                <Button className="nav-link" type="link" href="/agents">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
