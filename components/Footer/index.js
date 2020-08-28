import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <section className="footer__page-information">
        <div>
          <h4>About us</h4>
          <ul>
            <li>
              <Link href="/about">
                <a>Discover more</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>
              <Link href="/">
                <a>All products</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Developed by</h4>
          <ul>
            <li>
              <Link href="https://github.com/ivansevillaa">
                <a>Ivan Sevilla</a>
              </Link>
            </li>
          </ul>
        </div>
      </section>


      <style jsx>{`
        footer {
          margin-top: 3em;
          padding: 4em 0;
          border-top: 1px solid #e5e5e5;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer__page-information {
          max-width: 700px;
          margin: 0 auto;
          padding: 0 1rem;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 20px;
        }

        .footer__page-information h4 {
          margin: 0 0 14px 0; 
        }

        .footer__page-information ul li a {
          color: #4183c4;
          text-decoration: none;
        }
      `}</style>
    </footer>
  )
}

export default Footer;