# Publish Melissa Snow’s Portfolio on GitHub Pages

## Your account and website address

Your connected personal GitHub username is **itsmelissasnow-mss**, associated with **itsmelissasnow@gmail.com**.

Recommended repository name: **itsmelissasnow-mss.github.io**

Expected website address after publication: **https://itsmelissasnow-mss.github.io/**

This package has not been pushed to GitHub or published. The following steps publish it under your account.

## Recommended setup using GitHub Desktop

GitHub Desktop keeps your local folder connected to the repository and includes hidden folders such as `.github` when you publish updates.

1. Download GitHub Desktop from https://desktop.github.com/ and sign in to the **itsmelissasnow-mss** account.
2. Extract `Melissa-Snow-Portfolio-GitHub-Pages.zip`. Keep the extracted folder somewhere permanent, such as Documents.
3. In GitHub Desktop, choose **File → Add Local Repository** and select the extracted `portfolio-github-package` folder containing `index.html`.
4. If Desktop says the folder is not a Git repository, use its **create a repository here** link. Keep the local path pointed at that exact folder. Create the repository; do not create an extra nested folder. If the dialog asks for a name, use `portfolio-github-package` locally - you will choose the public repository name in the next step.
5. Check the Changes tab. If files are uncommitted, enter **Initial portfolio website** as the summary and choose **Commit to main**. If the default branch has another name, use **Branch → Rename** to rename it `main`.
6. Click **Publish repository**. Set the repository name to **itsmelissasnow-mss.github.io**, leave Organization as **None**, and deselect **Keep this code private** if you are using GitHub Free. Publish the repository.
7. Open the repository on GitHub. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.
8. Go to the **Actions** tab. Open **Deploy portfolio to GitHub Pages**, select **Run workflow**, choose `main`, and run it. If the first automatic run failed because Pages was not enabled yet, rerun after completing step 7.
9. Wait for the workflow to show a green check mark. Return to **Settings → Pages** and click **Visit site**. GitHub notes that publication can take up to 10 minutes.

If `itsmelissasnow-mss.github.io` already exists, clone that repository in Desktop and copy this package’s contents into it instead of publishing a second repository. On Mac, press **Command + Shift + .** in Finder to show and copy the `.github` folder. Commit and push, then continue at step 7.

## Browser-only alternative

1. Sign in to https://github.com/ as **itsmelissasnow-mss**.
2. Create a **Public** repository named **itsmelissasnow-mss.github.io**. Add a README when creating it.
3. In the repository, choose **Add file → Upload files**. Upload the extracted **index.html**, **assets** folder, and guide files. Upload the contents, not the ZIP and not an extra enclosing folder. The repository root must contain `index.html` directly. Commit to `main`.
4. The `.github` folder may be hidden on your computer. To add the deployment workflow reliably, choose **Add file → Create new file** and enter `.github/workflows/deploy-pages.yml` as the filename. Copy the full contents of that file from the package, paste them into GitHub, and commit to `main`.
5. Follow steps 7-9 in the Desktop setup above to enable Pages and run the workflow.

GitHub’s browser upload has file-count limits; Desktop is more convenient for future updates. All files in this package are small enough for ordinary Git storage.

## What “connected” means

GitHub Desktop connects your local website folder to its GitHub repository. The included GitHub Actions workflow connects changes on `main` to your published GitHub Pages site. After setup, you edit locally, commit, and click **Push origin** to publish the changes.

Your personal GitHub account is already connected in ChatGPT. Once the repository exists and the GitHub connection has access to it, you can share the repository URL here for future portfolio work. Do not assume that a local change has reached the live site until the relevant changes are pushed and the Pages workflow succeeds.

## Check the published website

• The homepage loads with Montserrat, both portraits appear in their intended places, and images are visible.
• Each project opens, and **Work & results** returns to the homepage.
• Copy a project link ending in `#hiremymom` or `#therapycloud` into a fresh tab and check that the matching story opens.
• Gallery buttons switch images, and enlarge buttons work.
• **View résumé** opens the HTML resume, **Open PDF** displays the PDF, and **Download PDF** saves it.
• Email and LinkedIn links point to your accounts.
• Check the page on your phone.

## Future edits

1. Edit the files in the connected local folder.
2. Open GitHub Desktop and review the changed files.
3. Add a short summary, then **Commit to main**.
4. Click **Push origin**.
5. Check the Actions tab for a successful deployment and refresh the website.

To update the PDF, replace `assets/documents/Melissa-Snow-Resume.pdf` and keep the filename. Update the HTML resume in `index.html` separately if its wording changes.

## Optional custom domain

You can add a custom domain later through **Settings → Pages → Custom domain**, then configure DNS with your domain provider. This package does not assume you own a domain and does not include a CNAME file.

## Official references

• GitHub Pages quickstart: https://docs.github.com/en/pages/quickstart
• Creating your site: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
• Publishing with workflows: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
• GitHub Desktop: https://docs.github.com/en/desktop/adding-and-cloning-repositories/adding-an-existing-project-to-github-using-github-desktop
