const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content justify-center">
      <div className="flex sm:flex-col md:flex-row items-center gap-0">
        <img
          className="w-12"
          src="../../../../public/icons/title.png"
          alt="logo"
        />
        <aside className="items-center .grid-flow-col">
          <p>Copyright © 2023 - Online task management system</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
