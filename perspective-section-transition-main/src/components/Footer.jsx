import Link from "next/link";
import FooterTextSocial from "./FooterTextSocial";
import { FlipLink, FlipAnchor } from "@/components/FlipLink";

export default function Footer() {
  return (
    <footer className="new-footer">
      <div className="new-footer-grid">
        <div className="new-footer-logo" aria-hidden="true">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="300.000000pt" height="131.000000pt" viewBox="0 0 300.000000 131.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,131.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <path d="M2005 1271 c-60 -16 -153 -47 -206 -69 l-97 -39 5 38 c5 34 2 40 -20 50 -21 9 -33 8 -69 -10 -41 -19 -63 -21 -398 -24 -312 -4 -366 -7 -448 -25 -206 -46 -380 -120 -525 -223 -132 -93 -227 -207 -227 -269 0 -105 180 -121 355 -33 118 60 255 175 290 244 25 47 12 45 -40 -6 -188 -182 -498 -298 -535 -199 -38 99 192 294 446 380 183 61 221 66 604 73 255 4 361 10 377 19 40 23 35 12 -24 -52 -33 -35 -129 -151 -213 -257 -84 -107 -156 -195 -160 -197 -5 -2 -11 6 -15 17 -3 11 -30 42 -60 69 -74 68 -151 87 -229 56 -15 -6 -12 4 17 57 105 189 127 233 125 240 -2 4 -17 2 -34 -5 -25 -11 -47 -44 -126 -192 -53 -99 -169 -312 -257 -474 -87 -162 -155 -297 -150 -299 6 -1 22 2 38 8 22 10 48 51 131 209 57 108 121 228 141 266 l38 70 11 -45 c15 -59 72 -134 132 -173 26 -17 47 -34 47 -38 1 -10 -226 -239 -279 -281 -38 -30 -42 -37 -31 -51 7 -9 21 -16 30 -16 16 0 263 243 309 303 l21 29 43 -16 c24 -9 74 -22 113 -29 l70 -13 12 -83 c12 -87 24 -114 44 -94 6 6 28 48 50 94 35 76 41 84 69 87 19 2 30 9 30 18 0 11 -6 13 -20 9 -11 4 -20 2 -20 4 0 6 23 58 52 115 l52 105 29 -25 c16 -13 35 -24 43 -24 8 0 14 -3 14 -6 0 -6 -194 -354 -218 -392 -14 -21 -13 -22 13 -22 15 0 35 10 47 23 21 23 208 354 208 367 0 4 37 10 83 13 228 17 482 147 665 341 158 168 176 314 45 377 -41 20 -66 24 -168 26 -107 3 -132 0 -230 -26z m287 -32 c67 -15 118 -62 125 -116 11 -86 -91 -235 -238 -349 -75 -57 -87 -57 -17 1 163 134 209 282 106 345 -54 32 -156 28 -238 -11 -36 -17 -87 -49 -114 -71 -50 -43 -51 -33 -3 35 12 18 16 32 10 38 -12 12 -151 -40 -227 -86 -31 -18 -56 -33 -56 -31 0 1 13 33 29 70 l29 70 71 27 c220 86 375 109 523 77z m-641 -71 c-5 -26 -19 -39 -73 -72 -73 -45 -95 -63 -86 -71 3 -3 34 12 69 34 35 22 65 39 66 37 8 -8 -74 -176 -100 -205 -38 -44 -65 -106 -74 -167 -4 -29 -34 -107 -76 -191 -57 -118 -73 -143 -91 -143 -51 0 -61 10 -80 75 -10 35 -29 86 -42 114 l-23 51 164 212 c249 324 312 391 341 367 7 -6 9 -22 5 -41z m559 -83 c36 -19 50 -43 50 -90 0 -99 -140 -249 -313 -335 -112 -55 -250 -91 -286 -74 -17 8 -11 22 68 164 117 208 210 304 331 341 43 13 120 10 150 -6z m-363 -22 c-3 -5 -22 -37 -44 -73 -22 -36 -79 -136 -127 -222 -48 -87 -91 -158 -95 -158 -11 0 -57 52 -64 72 -8 24 99 258 131 286 26 22 178 102 195 102 5 0 6 -3 4 -7z m-882 -277 c36 -16 102 -79 124 -119 13 -24 11 -29 -49 -101 -35 -42 -67 -76 -73 -76 -22 0 -107 74 -141 123 -55 80 -51 153 9 177 32 13 93 11 130 -4z m199 -281 c14 -44 26 -85 26 -92 0 -12 -79 5 -144 32 l-36 15 57 70 c31 39 59 67 63 63 4 -4 19 -44 34 -88z m125 -150 c0 -5 -9 -28 -19 -50 -17 -38 -18 -39 -23 -15 -6 25 -10 61 -8 70 2 10 51 5 50 -5z"/>
              <path d="M2538 856 c-24 -19 -70 -66 -102 -105 l-58 -70 -111 -3 c-92 -2 -112 -6 -112 -18 0 -12 19 -16 97 -18 l97 -3 -59 -82 c-33 -45 -81 -123 -107 -174 l-48 -92 -85 -40 c-92 -44 -117 -49 -126 -26 -7 17 33 92 87 164 22 28 37 56 34 62 -13 21 -36 6 -80 -53 -94 -125 -121 -191 -91 -221 23 -23 65 -13 165 39 46 24 84 44 85 44 2 0 1 -13 -2 -28 -12 -88 140 -68 303 38 36 23 65 46 65 51 0 13 -9 11 -38 -10 -47 -32 -167 -89 -205 -96 -83 -16 -84 31 -7 184 47 93 52 98 147 171 l98 74 170 4 c192 3 215 6 215 28 0 14 -22 15 -175 12 -96 -2 -175 -1 -175 0 0 2 18 24 40 49 58 66 79 153 37 153 -8 0 -34 -15 -59 -34z m42 -21 c0 -17 -34 -82 -61 -116 -25 -32 -37 -39 -65 -39 -19 0 -34 4 -34 8 0 15 132 152 146 152 8 0 14 -2 14 -5z m-182 -238 c-76 -62 -87 -67 -65 -34 9 15 24 38 33 52 12 19 25 25 51 25 l34 0 -53 -43z"/>
              <path d="M2102 624 c-27 -19 -27 -67 0 -72 23 -4 70 43 66 66 -4 23 -38 26 -66 6z"/>
            </g>
          </svg>
          
        </div>

        <div className="new-footer-main">
          <div className="new-footer-top">
            <nav className="new-footer-nav" aria-label="Footer navigation">
              <h4 className="footer-section-title">Site</h4>
              <ul>
                <li><FlipLink href="/">Home</FlipLink></li>
                <li><FlipLink href="/work">Work</FlipLink></li>
                <li><FlipLink href="/about">About</FlipLink></li>
                <li><FlipLink href="/contact">Contact</FlipLink></li>
              </ul>
            </nav>
            <FooterTextSocial />
            <div className="new-footer-social" aria-label="Social media links">
              <a className="icon-link" href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.87-2.36 8.5 8.5 0 0 1-2.7 1.03 4.24 4.24 0 0 0-7.23 3.86A12.03 12.03 0 0 1 3.1 4.8a4.23 4.23 0 0 0 1.31 5.66c-.67-.02-1.31-.2-1.86-.5v.05a4.25 4.25 0 0 0 3.4 4.16c-.59.16-1.22.19-1.83.07a4.25 4.25 0 0 0 3.97 2.95A8.51 8.51 0  0 1 2 19.54a12.02 12.02 0  0 0 6.51 1.91c7.82 0 12.1-6.48 12.1-12.1v-.55c.83-.6 1.55-1.34 2.12-2.19z"/></svg>
              </a>
              <a className="icon-link" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0  4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-1 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9 .1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 1-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4  2.3-.5C8.4 2.2 8.8 2.2 12 2.2zm0 2.2c-3.1 0-3.4 0-4.6.1-1 .1-1.5 .2-1.9 .4-.5 .2-.8 .4-1.1 .7-.3 .3-.5 .6-.7 1.1-.2 .4-.3 .9 -.4 1.9-.1 1.2-.1 1.5-.1 4.6s0  3.4 .1 4.6c.1 1 .2 1.5 .4 1.9 .2 .5 .4 .8 .7 1.1 .3 .3 .6 .5 1.1 .7 .4 .2 .9 .3 1.9 .4 1.2 .1 1.5 .1 4.6 .1s3.4 0  4.6-.1c1-.1 1.5 -.2 1.9 -.4 .5 -.2 .8 -.4 1.1 -.7 .3 -.3 .5 -.6 .7 -1.1 .2 -.4 .3 -.9 .4 -1.9 .1 -1.2 .1 -1.5 .1 -4.6s0-3.4-.1-4.6c-.1-1 -.2-1.5 -.4 -1.9 -.2 -.5 -.4 -.8 -.7 -1.1 -.3 -.3 -.6 -.5 -1.1 -.7 -.4 -.2 -.9 -.3 -1.9 -.4 -1.2 -.1 -1.5 -.1 -4.6 -.1zm0 2.7a4.3 4.3 0  1 1 0 8.6 4.3 4.3 0  0 1 0-8.6zm0 2.2a2.1 2.1 0  1 0 0 4.2 2.1 2.1 0  0 0 0-4.2zm5.5 -3.2a1 1 0  1 1 0 2.1 1 1 0  0 1 0-2.1z"/></svg>
              </a>
              <a className="icon-link" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5A2.5 2.5 0  0 1 0 3.5 2.5 2.5 0  0 1 2.48 1c1.38 0 2.5 1.12 2.5 2.5zM.5 8.99h4.96V24H.5V8.99zM8.98 8.99h4.75v 2.04h.07c.66-1.25 2.29-2.57 4.72 -2.57 5.05 0 5.98 3.33 5.98 7.66V24h-4.96v-6.6c0 -1.58 -.03 -3.61 -2.2 -3.61 -2.2 0 -2.54 1.72 -2.54 3.5V24H8.98V8.99z"/></svg>
              </a>
            </div>
          </div>

        {/* Divider removed to avoid any visual separation */}

          <div className="new-footer-sections" aria-label="Additional footer information">
            <section className="new-footer-section">
              <h4 className="footer-section-title">Services</h4>
              <ul className="new-footer-services">
                <li>Brand Design</li>
                <li>UI/UX Design</li>
                <li>Frontend Development</li>
                <li>Prototyping</li>
              </ul>
            </section>

            <section className="new-footer-section">
              <h4 className="footer-section-title">Studio</h4>
              <address className="new-footer-studio">
                <span>San Francisco, CA</span>
                <span>Mon–Fri, 9am–6pm PT</span>
              </address>
              <div className="new-footer-cta">
                <Link className="btn primary" href="/contact">Start a project</Link>
              </div>
            </section>
          </div>

        </div>
        
        {/* Contact block placed below the logo in the left column */}
        <div className="new-footer-contact" aria-label="Contact information">
          <a href="mailto:hello@tapit.studio">hello@tapit.studio</a>
          <a href="tel:+11234567890">+1 123 456 7890</a>
        </div>
        <div className="new-footer-contact-divider" aria-hidden="true"></div>
        <div className="new-footer-bottom">
          <div className="new-footer-policies">
            <FlipAnchor href="/privacy">Privacy Policy</FlipAnchor>
            <FlipAnchor href="/terms">Terms of Service</FlipAnchor>
            <FlipAnchor href="/cookies">Cookies</FlipAnchor>
          </div>
          <div className="new-footer-note">© TAPit Studio. Crafted with design and code.</div>
        </div>
      </div>
    </footer>
  );
}
