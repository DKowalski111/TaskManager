import React from 'react';

const Navbar: React.FC<{ onAddButtonClick: any }> = (props) => {
  return (
    <div style={{ width: '100%', borderBottomWidth: '1px', borderBottomStyle: 'solid', background: 'var(--bs-white)' }}>
      <nav className="navbar navbar-expand-md bg-body py-3 mb-md-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span style={{ fontSize: '24px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <svg className="icon icon-tabler icon-tabler-subtask" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="6" y1="9" x2="12" y2="9"></line>
                <line x1="4" y1="5" x2="8" y2="5"></line>
                <path d="M6 5v11a1 1 0 0 0 1 1h5"></path>
                <rect x="12" y="7" width="8" height="4" rx="1"></rect>
                <rect x="12" y="15" width="8" height="4" rx="1"></rect>
              </svg>
              {' '}
              Task Manager
            </span>
          </a>
          <div>
            <button className="btn btn-primary" type="button" onClick={props.onAddButtonClick}>
              Add
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
