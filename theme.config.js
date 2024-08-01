const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Aashay Agrawal.
        <a href="/feed.xml"></a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
  navs: [],

  darkMode: true,
};
