# Melissa Snow Portfolio

Responsive portfolio with a homepage, four project stories, an HTML resume, and a downloadable PDF. The approved Montserrat typography, portrait styling, colors, and galleries are included.

## Start here

Open **GITHUB-SETUP.md** for step-by-step publishing instructions tailored to the `itsmelissasnow-mss` GitHub account.

## Files

| File or folder | Purpose |
| --- | --- |
| `index.html` | Page content and image descriptions |
| `assets/css/style.css` | Design, typography, and responsive layout |
| `assets/js/app.js` | Navigation, galleries, image expansion, and shared asset paths |
| `assets/images/` | Portfolio photographs and project imagery |
| `assets/fonts/` | Montserrat fonts and their license |
| `assets/documents/Melissa-Snow-Resume.pdf` | Resume used by both PDF buttons |
| `.github/workflows/deploy-pages.yml` | Automatic publication after changes to `main` |

## Preview locally

Open `index.html` in a browser. Alternatively, if Python is installed, run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

No npm installation, build step, backend, database, ChatGPT login, or Lovable subscription is required.

## Shareable project links

Append these fragments to your published website URL:

• `#therapycloud`
• `#hiremymom`
• `#haven`
• `#monucore`
• `#resume`

The browser Back and Forward buttons work with these views. Relative asset paths also support a project repository such as `/portfolio/`.

## Maintaining the site

• Edit text in `index.html`.
• Replace images in `assets/images/` while keeping filenames, or update their paths in `assets/js/app.js`.
• Replace the PDF at the same path to update both PDF actions. Update the HTML resume content separately so it matches.
• Commit and push changes to `main`; the included workflow republishes the site.

## Included content status

The package includes the current portfolio preview, TherapyCloud onboarding and product galleries, HireMyMom dashboard gallery, MonuCore launch graphics, the resume-page portrait, and the resume PDF. The small portrait previously discussed for the shared contact section has not been added. The Haven story currently has no gallery.

Dashboard values are presented as platform snapshots rather than results attributed to the engagement. The displayed crops hide the lower name and email tables, but the original image files are included. Review client permission and image contents before publishing the repository publicly.

Montserrat is distributed under the SIL Open Font License in `assets/fonts/OFL.txt`. Other portfolio content and images are not offered under an open-source license.
