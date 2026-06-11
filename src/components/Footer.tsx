import { profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <span className="mono">
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span className="site-footer__stack mono">react + typescript + vite</span>
      <a className="mono" href="#topo">
        voltar ao topo ↑
      </a>
    </footer>
  );
}
